import { Component, OnInit } from '@angular/core'
import { MainService } from '../services/main.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  dashboardTag = 'Dashboard';
  listTag = 'List';
  favoriteTag = 'Favourites';
  logIn = 'LogIn'
  searchInput = ''
  ram:any
  

  constructor (public srvMain:MainService) { }

  ngOnInit (): void {
    const obs$ = this.srvMain.getTheAPI(this.url).subscribe((res:any) => {
      obs$.unsubscribe();
    })
  }

  searchSubmit(){
    console.log(this.searchInput);
    const obs$ = this.srvMain.getTheAPI("https://rickandmortyapi.com/api/character/?name=" + this.searchInput).subscribe((res:any) => {
      console.log('esta')
      this.ram = res.results;
      obs$.unsubscribe();
    }, (err:any) => {
      console.log('no esta')
    })

  }
}
