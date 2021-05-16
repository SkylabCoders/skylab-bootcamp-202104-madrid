import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Pipe, PipeTransform, Injectable, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, Directive, Input, Output } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { Observable, of as observableOf, throwError } from 'rxjs';

import { Component } from '@angular/core';
import { ListComponent } from './list.component';
import { MainService } from '../services/main.service';
import { Router } from '@angular/router';

@Injectable()
class MockMainService {
  url = {};
  amIInList = {};
}

@Injectable()
class MockRouter {
  navigate() {};
}

@Directive({ selector: '[oneviewPermitted]' })
class OneviewPermittedDirective {
  @Input() oneviewPermitted: any;
}

@Pipe({name: 'translate'})
class TranslatePipe implements PipeTransform {
  transform(value: any) { return value; }
}

@Pipe({name: 'phoneNumber'})
class PhoneNumberPipe implements PipeTransform {
  transform(value: any) { return value; }
}

@Pipe({name: 'safeHtml'})
class SafeHtmlPipe implements PipeTransform {
  transform(value: any) { return value; }
}

describe('ListComponent', () => {
  let fixture: ComponentFixture<ListComponent>;
  let component: { ngOnDestroy: () => void; chargePage: (arg0: {}) => void; ngOnInit: () => void; srvMain: { getTheAPI?: any; url?: any; detailsCharacter?: any; }; completeRam: { info?: any; }; getNextPage: () => void; getPrevPage: () => void; router: { navigate?: any; }; sendToDetail: (arg0: {}) => void; };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule, ReactiveFormsModule ],
      declarations: [
        ListComponent,
        TranslatePipe, PhoneNumberPipe, SafeHtmlPipe,
        OneviewPermittedDirective
      ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ],
      providers: [
        { provide: MainService, useClass: MockMainService },
        { provide: Router, useClass: MockRouter }
      ]
    }).overrideComponent(ListComponent, {

    }).compileComponents();
    fixture = TestBed.createComponent(ListComponent);
    component = fixture.debugElement.componentInstance;
  });

  afterEach(() => {
    component.ngOnDestroy = function() {};
    fixture.destroy();
  });

  it('should run #constructor()', async () => {
    expect(component).toBeTruthy();
  });

  // it('should run #ngOnInit()', async () => {
  //   component.chargePage = jest.fn();
  //   component.ngOnInit();
  //   // expect(component.chargePage).toHaveBeenCalled();
  // });

  // it('should run #chargePage()', async () => {
  //   component.srvMain = component.srvMain || {};
  //   component.srvMain.getTheAPI = jest.fn().mockReturnValue(observableOf({
  //     results: {}
  //   }));
  //   component.srvMain.url = 'url';
  //   component.chargePage({});
  //   // expect(component.srvMain.getTheAPI).toHaveBeenCalled();
  // });

  // it('should run #getNextPage()', async () => {
  //   component.completeRam = component.completeRam || {};
  //   component.completeRam.info = {
  //     next: {}
  //   };
  //   component.chargePage = jest.fn();
  //   component.getNextPage();
  //   // expect(component.chargePage).toHaveBeenCalled();
  // });

  // it('should run #getPrevPage()', async () => {
  //   component.completeRam = component.completeRam || {};
  //   component.completeRam.info = {
  //     prev: {}
  //   };
  //   component.chargePage = jest.fn();
  //   component.getPrevPage();
  //   // expect(component.chargePage).toHaveBeenCalled();
  // });

  // it('should run #sendToDetail()', async () => {
  //   component.srvMain = component.srvMain || {};
  //   component.srvMain.detailsCharacter = 'detailsCharacter';
  //   component.router = component.router || {};
  //   component.router.navigate = jest.fn();
  //   component.sendToDetail({});
  //   // expect(component.router.navigate).toHaveBeenCalled();
  // });

});
