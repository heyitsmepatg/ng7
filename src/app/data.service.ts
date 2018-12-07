import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  firstClick() {
    return console.log("my service tells me I clicked!")
  }
}
