import { TestBed } from '@angular/core/testing';

import { ToDoListService } from './to-do-list.service';
import { getLocaleDateFormat } from '@angular/common';

describe('ToDoListService', () => {
  let service: ToDoListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToDoListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
