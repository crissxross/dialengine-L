import {Injectable} from 'angular2/core';
import {Http, Response} from 'angular2/http';
import { Observable } from 'rxjs/Rx';


@Injectable()
export class SceneDataService {

// NOTE SQLite (Ionic) returns a promise so will need to refactor
// 	to use Observable.fromPromise with SQLite (Ionic) - but check??

  private _sceneUrl = '../../content/mock-data/mock-dialog.json';
  private _simpleUrl = '../../content/mock-data/simple-dialog.json';

  constructor(private http: Http) { }

  getSceneDialog() {
    return this.http.get(this._sceneUrl)
      .map((res: Response) => res.json().dialogNodes)
      .do(dialogNodes => console.log(dialogNodes))
      .catch(this.handleError);
  }

  getSceneMeta() { // FIX - CHANGE TO OBSERVABLE
    return this.http.get(this._sceneUrl)
      .toPromise()
      .then(res => res.json().meta, this.handleError)
      .then(data => {
        // console.log(data);
        return data;
      });
  }


  getActorSimpleDialog() { // FIX - CHANGE TO OBSERVABLE
    return this.http.get(this._simpleUrl)
      .toPromise()
      .then(res => res.json().actor[0], this.handlePromiseError)
      .then(data => {
        // console.log(data);
        return data;
      });
  }

  getPlayerSimpleDialog() { // FIX - CHANGE TO OBSERVABLE
    return this.http.get(this._simpleUrl)
      .toPromise()
      .then(res => res.json().player, this.handlePromiseError)
      .then(data => {
        // console.log(data);
        return data;
      });
  }

  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }

  // EXPERIMENTAL USING PROMISES -------------------
  getSceneMetaPromise() {
    return this.http.get(this._sceneUrl)
      .toPromise()
      .then(res => res.json().meta, this.handlePromiseError)
      .then(data => {
        // console.log(data);
        return data;
      });
  }

  private handlePromiseError(error: any) {
    console.error(error);
    return Promise.reject(error.message || error.json().error || 'Server error');
  }

}
