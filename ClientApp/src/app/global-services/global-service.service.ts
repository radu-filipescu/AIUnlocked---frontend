import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalServiceService {
  static userClass1: string = "Cats";
  static userClass2: string = "Dogs";

  backendUrl: string = "http://localhost:";

  constructor(public httpClient: HttpClient) { }

  databaseResultCount(label: string) {
    //return this.httpClient.get(this.backendUrl, )
  }
}
