import { Component, OnInit } from '@angular/core'
import { MainService } from '../services/main.service'
import { Router } from '@angular/router'
// import { TranslateService } from '@ngx-translate/core'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  url = 'https://rickandmortyapi.com/api/character';
  ram: any[] = [];
  imageRam:any

  constructor(public srvMain:MainService, public router:Router /*, public translate: TranslateService*/){
  }
 
  ngOnInit(): void {
    // this.translate.use('en');
    const obs$ = this.srvMain.getTheAPI(this.url).subscribe((res:any) => {
      this.ram = res.results;
      this.imageRam = this.ram.slice(0, 4);
      obs$.unsubscribe();
    })
  }
  
  goToDetails(character:any){
    this.srvMain.detailsCharacter = character;
    this.router.navigate(['details']);
  }

  // changeLang(lang: string){
  //   this.translate.use(lang);
  // }

}
