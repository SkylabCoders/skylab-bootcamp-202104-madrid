import { Injectable } from '@angular/core';
import { IshopList } from '../models/Ilista';

@Injectable({
  providedIn: 'root'
})
export class EcommerceService {

  basketList: IshopList[] = [];
  constructor() { }
}
