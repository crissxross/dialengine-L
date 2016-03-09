import {Component, OnInit} from "angular2/core";

import {DialogService} from "../services/dialog.service";
import {Api} from "../services/api";

@Component({
  selector: "experiment",
  templateUrl: "app/experiment/exp.component.html",
  styleUrls: ["app/experiment/exp.component.css"]
})

export class ExperimentComponent implements OnInit {

  sceneMeta;
  dialogNodes;

  constructor(public api: Api, private _dialogService: DialogService) { }

  ngOnInit() { }

  getSceneMeta() {
    this.sceneMeta = this._dialogService.getSceneMeta();
  }

  getSceneDialog() {
    this.dialogNodes = this._dialogService.getSceneDialog();
  }

}