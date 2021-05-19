import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'AngularExercises';
  heroes = [
    {name:'Bombasto', id: 1, superPower: 'fly', urlImg: 'https://tienda.dreamers.es/imagenes/833231.jpg'},
    {name: 'Narco', i: 2, superPower: 'get coke', urlImg: 'https://phantom-elmundo.unidadeditorial.es/09cab931d2ef2a202f7218dde27a9a2f/crop/0x0/375x250/resize/990/f/jpg/assets/multimedia/imagenes/2020/08/14/15974203186539.jpg'},
    {name:'Pikachu', id: 3, superPower: 'pika pika', urlImg: 'https://i.pinimg.com/originals/2f/a6/fa/2fa6fa2b399f3d85d8f403d4ac5ec666.png'},
    {name: 'SuperLopez', id: 4, superPower: 'whatever', urlImg:'https://static4.abc.es/media/cultura/2018/03/16/superlopez-aniversario-kcBD--1240x698@abc.jpg'}
  ]
  mustRenderComponent = true;
  deleteComponent(){
    this.mustRenderComponent = !this.mustRenderComponent;
  }

}
