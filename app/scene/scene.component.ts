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
  dialogNodes;

  constructor(public api: Api, private _dialogService: DialogService) { }

  ngOnInit() {
    console.log('Hello SceneComponent');
    this.getSceneMeta();
    this.getSceneDialog();
  }

  getSceneMeta() {
    this.sceneMeta = this._dialogService.getSceneMeta();
  }

  getSceneDialog() {
    this.dialogNodes = this._dialogService.getSceneDialog();
  }
}