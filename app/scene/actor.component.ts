import {Component, OnInit, Input} from 'angular2/core';

@Component({
  selector: 'actor',
  templateUrl: 'app/scene/actor.component.html',
  styleUrls: ['app/scene/actor.component.css']
})

export class ActorComponent implements OnInit {
  @Input() aNode;

  constructor() { }

  ngOnInit() { }
}