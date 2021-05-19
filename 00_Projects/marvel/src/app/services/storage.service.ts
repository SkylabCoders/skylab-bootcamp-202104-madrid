import { Injectable } from '@angular/core'
@Injectable({
  providedIn: 'root'
})
export class StorageService {
  constructor () {}
  get (key: string): any {
    let obj = localStorage.getItem(key)
    if (obj) {
      obj = JSON.parse(obj)
    }
    return obj
  }

  set (key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value))
  }
}
