// import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { Observable } from 'rxjs';
// import { of } from 'rxjs';
// import { ListComponent } from './list.component';
// const USER_OBJECT= {age:40,name:'Goliath'};
//  //clase mockeada que simula un servicio
// class MockUser {
//   public me(): Observable<any> {
//       return  of(USER_OBJECT); 
//   }
// }
// describe('ListComponent', () => {
//   let component: ListComponent;
//   let fixture: ComponentFixture<ListComponent>;
//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       declarations: [ ListComponent ],
//       providers: [{
//         provide:MockUser, useClass: MockUser
//       }]
//     })
//     .compileComponents();
//   });
//   beforeEach(() => {
//     fixture = TestBed.createComponent(ListComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });
//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
//   it('should contain angular mola',()=>{
//     component.callMockUser();
//     const el: HTMLElement = fixture.nativeElement; //document
//     const p = el.querySelector('#contenedor');
//     const title = el.querySelector('#title');
//     expect(p?.textContent).toContain('ANGULAR MOLA')
//     expect(title?.textContent).toMatch('ANGULAR RULES')
//   })
// });
