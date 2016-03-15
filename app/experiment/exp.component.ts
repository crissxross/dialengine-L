import {Component, OnInit} from 'angular2/core';
import { Observable } from 'rxjs/Rx';

import {SceneDataService} from '../services/scenedata.service';
import {DialogService} from '../services/dialog.service';
import {Api} from '../services/api';

@Component({
  selector: 'experiment',
  templateUrl: 'app/experiment/exp.component.html',
  styleUrls: ['app/experiment/exp.component.css']
})

export class ExperimentComponent implements OnInit {

  sceneMeta;
  dialogNodes;
  simpleNodes;
  timer: Observable<number>;
  npcNodes;

  // constructor(private _dialogService: DialogService) { }
  constructor(private _sceneDataService: SceneDataService) { }

  ngOnInit() {
    this.getSimpleData();
    // console.log('OnInit - this.simpleNodes: ', this.simpleNodes);
    this.timer = Observable.interval(1000).startWith(0);
    this.getNpcNodes();
    // console.log('OnInit - this.npcNodes:', this.npcNodes);
  }
  // Bypassing DialogService
  getSimpleData() {
    // this.simpleNodes = this._dialogService.getSimpleData()
    this.simpleNodes = this._sceneDataService.getSimpleData()
    // .do(data => console.log('simpleNodes:', data));
    // .do(data => console.log('Just one simpleNode:', data[0].actor));
  }

  getNpcNodes() {
    this.npcNodes = this._sceneDataService.getSimpleData()
      .do(data => console.log('data: ', data))
      .mergeMap(x => x)
      .do(x => console.log('x: ', x.character))
      .filter(y => y.character === 'npc')
      .do(y => console.log('y:', y.character + ': ' + y.speaks))
    .do(data => console.log('npcNodes: ', this.npcNodes));
  }




  // getSceneDialog() {
  //   this.dialogNodes = this._dialogService.getSceneDialog();
  // }

}
