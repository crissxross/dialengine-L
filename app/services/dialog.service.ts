import {Injectable} from 'angular2/core';
import {Observable} from 'rxjs/Observable';
// import 'rxjs/add/operator/map';
// NOTE: already imported all of 'rxjs/Rx'

import {SceneDataService} from './scenedata.service';


@Injectable()
export class DialogService {

  public dialogNodes;
  public sceneMeta;
  public actorNodes;
  public playerNodes;

  constructor(private sceneDataService: SceneDataService) { }

  getSceneDialog() {
    this.dialogNodes = this.sceneDataService.getSceneDialog();
    console.log("dialogNodes:", this.dialogNodes);
    return this.dialogNodes;
  }

  getSceneMeta() {
    let scMetaData = this.sceneDataService.getSceneMeta();
    console.log("scMetaData!!!", scMetaData);
    // return this.sceneMeta = Observable.from(scMetaData);
  }

  getActorSimpleDialog() {
    let actorData = this.sceneDataService.getActorSimpleDialog();
    console.log("actorData:", actorData);
    return this.actorNodes = Observable.fromPromise(actorData);
  }

  getPlayerSimpleDialog() {
    let playerData = this.sceneDataService.getPlayerSimpleDialog();
    console.log("playerData:", playerData);
    return this.playerNodes = Observable.fromPromise(playerData);
  }

  // EXPERIMENT - USING PROMISE HERE
  getSceneMetaPromise() {
    let scMetaDataPromise = this.sceneDataService.getSceneMetaPromise();
    console.log("scMetaDataPromise!!!", scMetaDataPromise);
    return this.sceneMeta = Observable.fromPromise(scMetaDataPromise);
  }

}
