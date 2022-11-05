import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalServiceService {
  static userClass1: string = "tomato";
  static userClass2: string = "Dogs";

  backendUrl: string = "https://localhost:44307/api/";

  constructor(public httpClient: HttpClient) { }

  saveWebcamImages(images: string[]) {
    return this.httpClient.post(this.backendUrl + 'Image/postWebcamImages', images);
  }

  getImagesOfClass(objectClass: string) {
    let headers = new HttpHeaders();
    let params = new HttpParams();
    params = params.append("objectClass", objectClass);

    return this.httpClient.get(this.backendUrl + 'Image/getImagesOfClass', { headers: headers, params: params });

    //return this.httpClient.get()
  }

  databaseResultCount(label: string) {
    //return this.httpClient.get(this.backendUrl, )
  }
}
