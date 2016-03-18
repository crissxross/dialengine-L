import {Component} from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import {HTTP_PROVIDERS} from 'angular2/http';

import {HomeComponent} from './home/home.component';
import {SceneComponent} from './scene/scene.component';
import {ExperimentComponent} from './experiment/exp.component';
import {Experiment2Component} from './experiment/exp2.component';
import {Experiment3Component} from './experiment/exp3.component';
import {Experiment4Component} from './experiment/exp4.component';

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
  { path: '/experiment', name: 'Experiment', component: ExperimentComponent },
  { path: '/experiment2', name: 'Experiment2', component: Experiment2Component },
  { path: '/experiment3', name: 'Experiment3', component: Experiment3Component },
  { path: '/experiment4', name: 'Experiment4', component: Experiment4Component }
])
export class AppComponent {

  constructor(public api: Api) {
  }
}
