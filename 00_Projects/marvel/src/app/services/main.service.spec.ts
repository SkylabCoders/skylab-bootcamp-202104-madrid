import { TestBed } from '@angular/core/testing';
import { HttpService } from './http.service';
import { StorageService } from './storage.service';
import { MainService } from './main.service';

describe('MainService', () => {
  let service: MainService;

  beforeEach(() => {
    const httpServiceStub = () => ({ getData: () => ({}) });
    const storageServiceStub = () => ({});
    TestBed.configureTestingModule({
      providers: [
        MainService,
        { provide: HttpService, useFactory: httpServiceStub },
        { provide: StorageService, useFactory: storageServiceStub }
      ]
    });
    service = TestBed.inject(MainService);
  });

  it('can load instance', () => {
    expect(service).toBeTruthy();
  });

  it(`character has default value`, () => {
    expect(service.character).toEqual([]);
  });

  it(`favorites has default value`, () => {
    expect(service.favorites).toEqual([]);
  });
});
