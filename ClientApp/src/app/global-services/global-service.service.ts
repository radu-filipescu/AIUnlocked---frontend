import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalServiceService {
  static userClass1: string = "Cats";
  static userClass2: string = "Dogs";

  constructor() { }
}
