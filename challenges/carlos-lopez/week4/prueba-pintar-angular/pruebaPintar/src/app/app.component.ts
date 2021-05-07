import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'pruebaPintar';
  heroes = [
    {name: "bombasto", id: 1, superPower: "fly", urlImg:"https://static.wikia.nocookie.net/pdsh/images/0/0f/Bombasto.jpg/revision/latest?cb=20130110211013"},
    {name: "Narco", id: 2, superPower: "get coke", urlImg:"https://cflvdg.avoz.es/default/2015/07/12/00121436730421386644189/Foto/afp_20150712_124331383.jpg"},
    {name: "Pikachu", id: 3, superPower: "pika pika", urlImg: "https://i.pinimg.com/originals/2f/a6/fa/2fa6fa2b399f3d85d8f403d4ac5ec666.png"},
    {name: "SuperLopez", id: 4, superPower: "n/a", urlImg: "https://static4.abc.es/media/cultura/2018/03/16/superlopez-aniversario-kcBD--1240x698@abc.jpg"},
  ]
  mustRenderComponent = true;
  deleteComponent(){
    this.mustRenderComponent = !this.mustRenderComponent
  }
}
