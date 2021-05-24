import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import User from '../models/userModel';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  constructor() { }

  fetchCv$: Observable;

  ngOnInit(): void {

  }
}
