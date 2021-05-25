import { Component, OnInit } from '@angular/core'
import { Realstate } from '../../models/realstate'
import { environment } from '../../../environments/environment'
import { RealstateService } from '../../services/realstate.service'

@Component({
  selector: 'app-realstate',
  templateUrl: './realstate.component.html',
  styleUrls: ['./realstate.component.scss']
})
export class RealstateComponent implements OnInit {
realState: Realstate

constructor (public srvMain:RealstateService) { }

ngOnInit (): void {
  const obs$ = this.srvMain.getApi(environment.urlApi).subscribe((res:any) => {
    this.realState = res.data
    console.log(res.data)
    obs$.unsubscribe()
  })
}
}
