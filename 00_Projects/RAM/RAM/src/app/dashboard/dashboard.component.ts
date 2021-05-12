import { Component, OnInit } from '@angular/core'
import { MainService } from '../services/main.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  url = 'https://rickandmortyapi.com/api/character';

  ram: any[] = [];
  imageRam:any

  constructor(public srvMain:MainService){

  }
 
  ngOnInit(): void {
    const obs$ = this.srvMain.getTheAPI(this.url).subscribe((res:any) => {
      this.ram = res.results;
      this.imageRam = this.ram.slice(0, 4);
      obs$.unsubscribe();
    })
  }
  addId(){
   let id = 0
    for (let i = 0; i < this.imageRam.length; i++) {
    this.imageRam[i].push(id++)
    }
  }
  goToDetails(character:any){
    
  }
}
