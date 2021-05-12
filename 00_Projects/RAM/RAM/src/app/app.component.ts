import { Component, OnInit } from '@angular/core';
import { MainService } from './services/main.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'RAM';

  constructor(public mainSrv: MainService){

  }

  ngOnInit (): void {
    // this.mainSrv.watchUrlRoute();
  }
}
