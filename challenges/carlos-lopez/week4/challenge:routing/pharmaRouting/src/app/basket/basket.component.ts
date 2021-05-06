import { Component, OnInit } from '@angular/core';
import { ComunicationService } from '../services/comunication.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {

  constructor(private srv:ComunicationService) { }

  ngOnInit(): void {
    
  }

}
