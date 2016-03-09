import {Component, OnInit, Input} from 'angular2/core';

@Component({
  selector: 'player',
  templateUrl: 'app/scene/player.component.html',
  styleUrls: ['app/scene/player.component.css']
})

export class PlayerComponent implements OnInit {
  @Input() pNode: string[];
  @Input() pThought: string;
  @Input() pOptions;

  constructor() { }

  ngOnInit() { }
}