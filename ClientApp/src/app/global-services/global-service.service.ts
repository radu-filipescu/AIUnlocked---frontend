import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalServiceService {
  static userClass1: string = "Cats";
  static userClass2: string = "Dogs";

  backendUrl: string = "https://localhost:44307/api/";

  constructor(public httpClient: HttpClient) { }

  saveWebcamImages(images: string[]) {
    return this.httpClient.post(this.backendUrl + 'Image/postWebcamImages', images);
  }

  databaseResultCount(label: string) {
    //return this.httpClient.get(this.backendUrl, )
  }
}
