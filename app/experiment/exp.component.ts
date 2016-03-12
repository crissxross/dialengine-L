import {Component, OnInit} from 'angular2/core';

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

  constructor(private _dialogService: DialogService) { }

  ngOnInit() {
    this.getSimpleDialog();
  }

  getSimpleDialog() {
    this.simpleNodes = this._dialogService.getSimpleDialog();
  }


  // getSceneDialog() {
  //   this.dialogNodes = this._dialogService.getSceneDialog();
  // }

}
