import { Injectable } from '@angular/core';
import { IshopList } from '../models/interface';

@Injectable({
  providedIn: 'root'
})
export class EcommerceService {

basketList: IshopList[] = []

  constructor() { }
}
