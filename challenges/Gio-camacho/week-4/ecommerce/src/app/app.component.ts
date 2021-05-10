import { Component } from '@angular/core';
import { Products } from './model/products'
import { SerciosService } from './services/sercios.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'ecommerce';
  listProduct:Products [] = [
    {product: 'Lajusticia colageno con magnecio 450comp', price: 14.35},
    {product: 'Xhekpon® crema facial 10ml', price: 6.49},
    {product: 'Cerave® Crema Hidratante 314ml', price: 11.70},
    {product: 'Hyabak solucion 10ml', price: 9.48},
    {product: 'Fotoprotector ISDIN® Fusion Water SPF 50+ 50ml', price: 19.74},
    {product: 'Piz Buin® Allergy SPF50+ locion 200ml', price: 8.65},
  ]

  constructor(public srv:SerciosService){}

  listCart:any = []

  addToCart(product:{}){
    this.srv.products = product
    this.listCart = [...this.listCart,product]
    console.log(this.listCart[0].price)
  }

  uptadePrice(){
    this.listCart.reduce((acc:any,res:any)=> acc.price += acc.price,0)
  }
}
