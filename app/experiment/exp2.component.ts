import {Component, OnInit} from 'angular2/core';
import { Observable } from 'rxjs/Rx';

import {SceneDataService} from '../services/scenedata.service';
import {DialogService} from '../services/dialog.service';
import {Api} from '../services/api';

@Component({
  selector: 'experiment2',
  templateUrl: 'app/experiment/exp2.component.html',
  styleUrls: ['app/experiment/exp.component.css']
})
// EXPERIMENT 2 !!!!!!!!!!!!!!!!!!!!!!!!!!!
export class Experiment2Component implements OnInit {

  sceneMeta;
  dialogNode$: Observable<any>;
  publishedNode$;
  simpleNodes: Observable<any>;
  timer: Observable<number>;
  npcNode$: Observable<any>;
  playerNode$: Observable<any>;

  // constructor(private _dialogService: DialogService) { }
  constructor(private _sceneDataService: SceneDataService) { }

  ngOnInit() {
 this.getDialogNodes();
    this.getSimpleDialog();
    // console.log('OnInit - this.simpleNodes: ', this.simpleNodes);
    this.getNpcNodes();
    // console.log('OnInit - this.npcNode$:', this.npcNode$);
    this.streamPlayerNodes();
    // this.timer = Observable.interval(1000).startWith(0);
  }
  // Bypassing DialogService
getDialogNodes() {
    this.dialogNode$ = this._sceneDataService.getSimpleDialog()
      // .do(data => console.log('dialogNode$: ', data));
    this.publishedNode$ = this.dialogNode$.share(); // SHARED
  }

  getSimpleDialog() {
    this.simpleNodes = this.publishedNode$;
    // .do(data => console.log('simpleNodes:', data));
  }


  streamPlayerNodes() {
    this.playerNode$ = this.publishedNode$
      // .do(data => console.log('playerNode$:', data))
      .mergeMap(data => data)
      .filter(data => data.player)
      .do(filtered => console.log('filtered player:', filtered))
      // .do(filtered => console.log('filtered player: ' + filtered.player.says));
      // .map(player => player.says)
      // .do(pSays => console.log('player says:', pSays));
  }

  getNpcNodes() {
    this.npcNode$ = this.publishedNode$
      // .do(stuff => console.log('stuff: ', stuff))
      .mergeMap(x => x)
      // .do(x => console.log('x: ', x))
      .filter(y => y.npc)
    .do(y => console.log('filtered y: ' + y.npc.says))
    // .do(data => console.log('npcNode$: ', this.npcNode$));
  }




  // getSceneDialog() {
  //   this.dialogNodes = this._dialogService.getSceneDialog();
  // }

}
