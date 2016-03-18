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

  constructor() { }

  ngOnInit() { }
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
