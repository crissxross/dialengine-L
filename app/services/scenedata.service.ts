import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
// Don't need Response from 'angular2/http' if not using observables in this service

@Injectable()
export class SceneDataService {

  // Using a PROMISE because SQLite (Ionic) returns a promise

  private _sceneUrl = '../../content/mock-data/mock-dialog.json';
  private _simpleUrl = '../../content/mock-data/simple-dialog.json';

  constructor(private http: Http) { }

  getSceneDialog() {
    return this.http.get(this._sceneUrl)
      .toPromise()
      .then(res => res.json().dialogNodes, this.handleError)
      .then(data => {
        // console.log(data);
        return data;
      });
  }

  getSceneMeta() {
    return this.http.get(this._sceneUrl)
      .toPromise()
      .then(res => res.json().meta, this.handleError)
      .then(data => {
        // console.log(data);
        return data;
      });
  }


  getActorSimpleDialog() {
    return this.http.get(this._simpleUrl)
      .toPromise()
      .then(res => res.json().actor[0], this.handleError)
      .then(data => {
        // console.log(data);
        return data;
      });
  }

  getPlayerSimpleDialog() {
    return this.http.get(this._simpleUrl)
      .toPromise()
      .then(res => res.json().player, this.handleError)
      .then(data => {
        // console.log(data);
        return data;
      });
  }

  private handleError(error: any) {
    console.error(error);
    return Promise.reject(error.message || error.json().error || 'Server error');
  }

}
