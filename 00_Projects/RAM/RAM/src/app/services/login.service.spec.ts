import { TestBed } from '@angular/core/testing';
import { LoginService } from './login.service';

let user:Object;

describe('LoginService', () => {
  let service: LoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginService);
  });

   it('should be created', () => {
     expect(service).toBeTruthy();
   });
   it('should be {name:"Carlos", password:"siiiiiiu"}', ()=>{
     user = {name:"Carlos", password:"siiiiiiu"};
     expect(user).toEqual({name:"Carlos", password:"siiiiiiu"})
   })
 });
