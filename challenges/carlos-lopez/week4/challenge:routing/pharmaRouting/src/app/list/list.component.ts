import { Component, OnInit } from '@angular/core';
import { ComunicationService } from '../services/comunication.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private srv:ComunicationService) { }

  ngOnInit(): void {
  }

}
