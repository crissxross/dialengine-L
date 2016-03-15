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
  dialogNodes;
  simpleNodes;
  timer: Observable<number>;
  npcNodes;

  // constructor(private _dialogService: DialogService) { }
  constructor(private _sceneDataService: SceneDataService) { }

  ngOnInit() {
    this.getSimpleDialog();
    // console.log('OnInit - this.simpleNodes: ', this.simpleNodes);
    this.timer = Observable.interval(1000).startWith(0);
    this.getNpcNodes();
    // console.log('OnInit - this.npcNodes:', this.npcNodes);
  }
  // Bypassing DialogService
  getSimpleDialog() {
    this.simpleNodes = this._sceneDataService.getSimpleDialog()
    .do(data => console.log('simpleNodes:', data))
  }

  getNpcNodes() {
    this.npcNodes = this._sceneDataService.getSimpleDialog()
      // .do(stuff => console.log('stuff: ', stuff))
      .mergeMap(x => x)
      .do(x => console.log('x: ', x))
      .filter(y => y.npc)
      .do(y => console.log('filtered y: ' + y.npc.says))
    // .do(data => console.log('npcNodes: ', this.npcNodes));
  }




  // getSceneDialog() {
  //   this.dialogNodes = this._dialogService.getSceneDialog();
  // }

}
