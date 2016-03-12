import {Injectable} from 'angular2/core';

import {SceneDataService} from './scenedata.service';


@Injectable()
export class DialogService {

  // public dialogNodes;
  // public sceneMeta;
  // public actorNodes;
  // public playerNodes;

  constructor(private sceneDataService: SceneDataService) { }

  getSceneDialog() {
    let dialogNodes = this.sceneDataService.getSceneDialog();
    console.log('dialogNodes:', dialogNodes);
    return dialogNodes;
  }
// getSceneDialog() {
//     this.dialogNodes = this.sceneDataService.getSceneDialog();
//     console.log('dialogNodes:', this.dialogNodes);
//     return this.dialogNodes;
//   }

  getSceneMeta() {
    let scMetaData = this.sceneDataService.getSceneMeta();
    console.log('scMetaData!!!', scMetaData);
    return scMetaData;
  }

  getSimpleDialog() {
    let simpleDialog = this.sceneDataService.getSimpleDialog();
    console.log('simpleDialog', simpleDialog);
    return simpleDialog;
}

  getActorSimpleDialog() {
    let actorData = this.sceneDataService.getActorSimpleDialog();
    console.log('actorData:', actorData);
    return actorData;
  }

  getPlayerSimpleDialog() {
    let playerData = this.sceneDataService.getPlayerSimpleDialog();
    console.log('playerData:', playerData);
    return playerData;
  }

}
