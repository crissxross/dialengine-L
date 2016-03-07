import {Component, OnInit} from 'angular2/core';

import {ActorComponent} from './actor.component';
import {PlayerComponent} from './player.component';

import {DialogService} from '../services/dialog.service';
import {Api} from '../services/api';

@Component({
  selector: 'scene',
  templateUrl: 'app/scene/scene.component.html',
  styleUrls: ['app/scene/scene.component.css'],
  providers: [DialogService, Api],
  directives: [ActorComponent, PlayerComponent]
})

export class SceneComponent implements OnInit {

  sceneMeta;

  constructor(public api: Api, private _dialogService: DialogService) { }

  ngOnInit() {
    console.log('Hello SceneComponent');
    this.getSceneMeta();
  }

  getSceneMeta() {
    this.sceneMeta = this._dialogService.getSceneMeta();
  }
}