import { Component, OnInit } from '@angular/core';
import {environment} from '../../../environments/environment'

@Component({
  selector: 'app-main-dashboard',
  templateUrl: './main-dashboard.component.html',
  styleUrls: ['./main-dashboard.component.css']
})
export class MainDashboardComponent implements OnInit {
  env = environment

  constructor() { }

  ngOnInit(): void {
  }

}
