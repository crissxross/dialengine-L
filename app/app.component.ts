import {Component} from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import {HTTP_PROVIDERS} from 'angular2/http';

import {HomeComponent} from './home/home.component';
import {SceneComponent} from './scene/scene.component';
import {ExperimentComponent} from './experiment/exp.component';

import {Api} from './services/api';
import {SceneDataService} from './services/scenedata.service';
import {DialogService} from './services/dialog.service';


@Component({
  selector: 'de-app',
  templateUrl: 'app/app.component.html',
  styleUrls: ['app/app.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [ROUTER_PROVIDERS, HTTP_PROVIDERS, Api, SceneDataService, DialogService]
})
@RouteConfig([
  { path: '/home', name: 'Home', component: HomeComponent },
  { path: '/scene', name: 'Scene', component: SceneComponent },
  { path: '/experiment', name: 'Experiment', component: ExperimentComponent }
])
export class AppComponent {

  constructor(public api: Api) {
  }
}
