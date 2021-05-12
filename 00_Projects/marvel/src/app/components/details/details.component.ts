import { Component, OnInit } from '@angular/core'
import { MainService } from 'src/app/services/main.service'
import { Imarvel } from '../../models/Imarvel'
import { URL } from '../../models/url'
import { ActivatedRoute, Params } from '@angular/router'

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  hero:any = this.mainSrv.character;
  description:string = 'Description'
  comicText:string = 'Comics'
  constructor (public mainSrv: MainService) { }

  ngOnInit (): void {
  }
}
