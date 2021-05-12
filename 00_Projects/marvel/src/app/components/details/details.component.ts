import { Component, OnInit } from '@angular/core'
import { Imarvel } from '../../models/Imarvel'
import { URL } from '../../models/url'
import { MainService } from '../../services/main.service'
import { ActivatedRoute, Params } from '@angular/router'

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  constructor (public mainSrv:MainService) { }

  ngOnInit (): void {

  }
}
