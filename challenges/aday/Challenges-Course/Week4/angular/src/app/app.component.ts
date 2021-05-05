import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'angular';
  heroes = [
    {name: "Mortadelo", id: 1, superPower: "disfrazarse", urlImg: "https://i.pinimg.com/originals/a4/cc/ca/a4cccac226f8397eefff609bdf980df7.jpg"},
    {name: "Narco", id: 2, superPower: "getCoke", urlImg: "https://fotos01.noticiasdegipuzkoa.eus/2020/08/03/690x278/narco-vuelta.jpg"},
    {name: "Musulman", id: 3, superPower: "boom", urlImg: "https://image.shutterstock.com/image-photo/bearded-man-terrorist-threatens-plane-600w-393873109.jpg"}
  ]
  mustRenderComponent = true;
  deleteComponent(){
    this.mustRenderComponent = !this.mustRenderComponent;
  }
}
