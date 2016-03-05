import {Component, OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
  selector: 'home',
  templateUrl: 'app/home/home.component.html',
  styleUrls: ['app/home/home.component.css'],
  directives: [ROUTER_DIRECTIVES]
})

export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() { }
}