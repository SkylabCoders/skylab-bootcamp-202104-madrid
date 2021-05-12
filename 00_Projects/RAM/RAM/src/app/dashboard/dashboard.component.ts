import { Component, OnInit } from '@angular/core'
import { MainService } from '../services/main.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  url = 'https://rickandmortyapi.com/api/character';
  ram: any[] = [];
  imageRam:any

  constructor(public srvMain:MainService, public router:Router){

  }
 
  ngOnInit(): void {
    const obs$ = this.srvMain.getTheAPI(this.url).subscribe((res:any) => {
      this.ram = res.results;
      this.imageRam = this.ram.slice(0, 4);
      obs$.unsubscribe();
    })
  }
  
  goToDetails(character:any){
    this.srvMain.detailsCharacter = character;
    console.log(this.srvMain.detailsCharacter);
    this.router.navigate(['details']);
  }
}
