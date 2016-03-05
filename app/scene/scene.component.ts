import {Component, OnInit} from 'angular2/core';

import {ActorComponent} from './actor.component';
import {PlayerComponent} from './player.component';

@Component({
  selector: 'scene',
  templateUrl: 'app/scene/scene.component.html',
  styleUrls: ['app/scene/scene.component.css'],
  directives: [ActorComponent, PlayerComponent]
})

export class SceneComponent implements OnInit {

  constructor() { }

  ngOnInit() { }
}