import {Injectable} from 'angular2/core';
import {Http, Response} from 'angular2/http';
import { Observable } from 'rxjs/Rx';


@Injectable()
export class SceneDataService {

  private _sceneUrl = '../../content/mock-data/mock-dialog.json';
  private _simpleUrl = '../../content/mock-data/simple-dialog.json';
  private _simpleDataUrl = '../../content/mock-data/simple-dialog-data.json';
  private _simpleArraysUrl = '../../content/mock-data/simple-arrays-dialog.json';

  constructor(private _http: Http) { }

  getSimpleDialog() {
    return this._http.get(this._simpleUrl)
      .map((res: Response) => res.json().dialog)
      // .do(data => console.log(data))
      .catch(this.handleError);
  }

  getSimpleData() {
    return this._http.get(this._simpleDataUrl)
      .map((res: Response) => res.json().data)
      // .do(data => console.log(data))
      .catch(this.handleError);
  }


  getSceneDialog() {
    return this._http.get(this._sceneUrl)
      .map((res: Response) => res.json().dialogNodes)
      .do(dialogNodes => console.log(dialogNodes))
      .catch(this.handleError);
  }

  getSceneMeta() {
    return this._http.get(this._sceneUrl)
      .map((res: Response) => res.json().meta)
      .do(meta => console.log(meta))
      .catch(this.handleError);
  }

  getActorSimpleDialog() {
    return this._http.get(this._simpleArraysUrl)
      .map((res: Response) => res.json().actor)
      .do(actor => console.log(actor))
      .catch(this.handleError);
  }

  getPlayerSimpleDialog() {
    return this._http.get(this._simpleArraysUrl)
      .map((res: Response) => res.json().player)
      .do(player => console.log(player))
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }

}

// NOTE SQLite (Ionic) returns a promise so will need to refactor
// 	to use Observable.fromPromise with SQLite (Ionic) BUT check??
