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

  // constructor(private _dialogService: DialogService) { }
  constructor(private _sceneDataService: SceneDataService) { }

  ngOnInit() {
    this.getSimpleDialog();
    console.log('OnInit - this.simpleNodes: ', this.simpleNodes);

    this.timer = Observable.interval(1000).startWith(0);
  }
// Bypassing DialogService
getSimpleDialog() {
  this.simpleNodes = this._sceneDataService.getSimpleDialog()
    .do(data => console.log('simpleNodes:', data));
      // .do(data => console.log('Just one simpleNode:', data[0].actor));
  }



  // getSimpleDialog() {
  //   this.simpleNodes = this._dialogService.getSimpleDialog()
  //     .do(data => console.log('simpleNodes:', data));
  //     .do(data => console.log('A simpleNode:', data[0].actor));
  // }


  // getSceneDialog() {
  //   this.dialogNodes = this._dialogService.getSceneDialog();
  // }

}
