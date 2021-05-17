import { Component, OnInit } from '@angular/core';
import { Imarvel } from '../../models/Imarvel';
import { MainService } from '../../services/main.service';
import { URL } from '../../models/url';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  MarvelList: Imarvel[] = [];
  randomList: Imarvel[] = [];
  topHeroes: Imarvel[] = [];
  loadGif = true;
  limit: string = '&limit=100';

  constructor(
    public mainSrv: MainService,
    public route: Router,
    public translate: TranslateService
  ) {}

  ngOnInit(): void {
    this.translate.addLangs(['en', 'es']);
    const localLang = localStorage.getItem('lang');
    if (localLang) {
      this.translate.use(localLang);
    }
    const obs$ = this.mainSrv
      .getAction('getList', URL.apiURL + URL.CharactersURL + this.limit)
      .subscribe((res: any) => {
        this.topHeroes = res.data.results.sort(() => Math.random() - 0.5);
        this.topHeroes = res.data.results.filter(
          (hero: Imarvel) =>
            hero.thumbnail.path !==
            'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available'
        );
        this.topHeroes = this.topHeroes.slice(0, 4);
        this.loadGif = false;
        this.topHeroes.map((hero: Imarvel) => {
          if (hero.description === '') {
            hero.description =
              'Ooops! We are very sorry! This super hero does not have a description available at this time.';
          }
          return hero.description;
        });
        obs$.unsubscribe();
      });
  }

  goCharacter(characters: any) {
    this.mainSrv.character = characters;
    this.route.navigate(['details']);
  }
}
