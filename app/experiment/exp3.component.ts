import {Component, OnInit} from 'angular2/core';
import { Observable } from 'rxjs/Rx';

import {SceneDataService} from '../services/scenedata.service';
import {DialogService} from '../services/dialog.service';
import {Api} from '../services/api';

@Component({
  selector: 'experiment3',
  templateUrl: 'app/experiment/exp3.component.html',
  styleUrls: ['app/experiment/exp.component.css']
})
// 3************* EXPERIMENT 3 ****************
export class Experiment3Component implements OnInit {

  sceneMeta;
  dialogNode$: Observable<any>;
  publishedNode$;
  simpleNodes: Observable<any>;
  npcNode$: Observable<any>;
  playerNode$: Observable<any>;

  // constructor(private _dialogService: DialogService) { }
  constructor(private _sceneDataService: SceneDataService) { }

  ngOnInit() {
    this.getDialogNodes();
    this.getSimpleDialog();
    this.getNpcNodes();
    this.streamPlayerNodes();
  }
  // Bypassing DialogService
  getDialogNodes() {
    this.dialogNode$ = this._sceneDataService.getSimpleDialog()
    this.publishedNode$ = this.dialogNode$.share(); // SHARED
  }

  getSimpleDialog() {
    this.simpleNodes = this.publishedNode$;
  }


  streamPlayerNodes() {
    this.playerNode$ = this.publishedNode$
      .mergeMap(data => data)
      .filter(data => data.player)
      // .do(filtered => console.log('filtered player:', filtered))
      .map(filtered => filtered.player.says)
      .do(says => console.log(says));
  }

// NOTE: Should I use scan to show each 'says' in turn? Merged with an interval?

  getNpcNodes() {
    this.npcNode$ = this.publishedNode$
      .mergeMap(x => x)
      // .do(x => console.log('x: ', x))
      .filter(y => y.npc)
      // .do(y => console.log('filtered y:', y))
      .map(filtered => filtered.npc.says)
      .do(says => console.log(says));
  }

}
