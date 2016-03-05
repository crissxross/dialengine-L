import {Component} from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

import {HomeComponent} from './home/home.component';
import {SceneComponent} from './scene/scene.component';


@Component({
  selector: 'de-app',
  templateUrl: 'app/app.component.html',
  directives: [ROUTER_DIRECTIVES],
  providers: [ROUTER_PROVIDERS]
})
@RouteConfig([
  { path: '/home', name: 'Home', component: HomeComponent },
  { path: '/scene', name: 'Scene', component: SceneComponent }
])
export class AppComponent { }
