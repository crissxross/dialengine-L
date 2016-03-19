import {Component, OnInit} from 'angular2/core';
import { Observable } from 'rxjs/Rx';


@Component({
  selector: 'experiment4',
  templateUrl: 'app/experiment/exp4.component.html',
  styleUrls: ['app/experiment/exp.component.css']
})
// 4-################- EXPERIMENT 4 - ##############
export class Experiment4Component implements OnInit {

  simpleDialog;
  speeches = [
  'Speech 1. My first speech.',
  'Speech 2. My second speech.',
  'Speech 3. My third speech.',
  'Speech 4. My fourth speech.'
];

  constructor() { }

  ngOnInit() {
    this.startInterval(this.speeches);
    this.startClockSpeeches(this.speeches);
  }

  startInterval(speeches) {
    let interval = Observable.interval(2000).take(4).map(x => (x - 1) + 1);
    interval.subscribe(i => console.log('INTERVAL', speeches[i]));
  }

  startClockSpeeches(speeches) {
    var clock = Observable.interval(1000)
      .take(speeches.length - 1).map(x => x + 1).startWith(0)
      .share();

    console.log('a subscribed');
    clock.subscribe(i => console.log('a: ' + speeches[i]));

    setTimeout(function() {
      console.log('b subscribed');
      clock.subscribe(i => console.log('   b: ' + speeches[i]));
    }, 2500);

  }

}


// Using hard-coded array in this experiment
var simpleDialog = [
  {
    'npc': {
      'says': [
        'n1 This is NPC\'s first speech'
      ]
    }
  },
  {
    'player': {
      'says': [
        'P1 This is player\'s first speech'
      ]
    }
  },
  {
    'npc': {
      'says': [
        'n2 This is NPC\'s second speech'
      ]
    }
  },
  {
    'player': {
      'says': [
        'P2 This is player\'s second speech'
      ]
    }
  },
  {
    'npc': {
      'says': [
        'n3 This is NPC\'s third speech'
      ]
    }
  },
  {
    'player': {
      'says': [
        'P3 This is player\'s third speech'
      ]
    }
  },
  {
    'npc': {
      'says': [
        'n4 This is NPC\'s fourth speech'
      ]
    }
  },
  {
    'player': {
      'says': [
        'P4 This is player\'s fourth speech'
      ]
    }
  }
];
