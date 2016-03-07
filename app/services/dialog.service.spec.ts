import {
  it,
  iit,
  describe,
  ddescribe,
  expect,
  inject,
  injectAsync,
  TestComponentBuilder,
  beforeEachProviders
} from 'angular2/testing';
import {provide} from 'angular2/core';
import {DialogService} from './dialog.service';


describe('DialogService Service', () => {

  beforeEachProviders(() => [DialogService]);


  it('should ...', inject([DialogService], (service:DialogService) => {

  }));

});
