import {Component, OnInit} from 'angular2/core';

import {ActorComponent} from './actor.component';
import {PlayerComponent} from './player.component';
import {DialogService} from '../services/dialog.service';
import {Api} from '../services/api';

@Component({
  selector: 'scene',
  templateUrl: 'app/scene/scene.component.html',
  styleUrls: ['app/scene/scene.component.css'],
  // providers: [DialogService],
  directives: [ActorComponent, PlayerComponent]
})

export class SceneComponent implements OnInit {

  sceneMeta;
  dialogNodes;
  actorNodes;
  playerNodes;
  playerThought: string;
  playerOptions: string[];

  constructor(public api: Api, private _dialogService: DialogService) { }

  ngOnInit() {
    // console.log('Hello SceneComponent');
    this.getSceneMeta();
    this.getSceneDialog();
    this.getActorSimpleDialog();
    this.getPlayerSimpleDialog();
    this.getPlayerThoughts();
    this.getPlayerOptions();
  }

  getSceneMeta() {
    this.sceneMeta = this._dialogService.getSceneMeta();
  }

  getSceneDialog() {
    this.dialogNodes = this._dialogService.getSceneDialog();
  }

  getActorSimpleDialog() {
    this.actorNodes = this._dialogService.getActorSimpleDialog();
  }

  getPlayerSimpleDialog() {
    this.playerNodes = this._dialogService.getPlayerSimpleDialog();
  }

  getPlayerThoughts() {
    this.playerThought = "I'm thinking player thoughts.";
  }

  getPlayerOptions() {
    this.playerOptions = [
      "Option one?",
      "Or maybe I should choose option two?"
      // "Or even option three?"
    ]
  }
}