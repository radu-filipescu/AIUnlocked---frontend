import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalServiceService {
  static userClass1: string = "tomato";
  static userClass2: string = "papaya";

  backendUrl: string = "https://localhost:44307/api/";

  constructor(public httpClient: HttpClient) { }

  saveWebcamImages(imagesClass1: string[], imagesClass2: string[]) {
    let webcamDto = new Object();
    webcamDto['class1Name'] = GlobalServiceService.userClass1;
    webcamDto['class2Name'] = GlobalServiceService.userClass2;
    webcamDto['Class1Images'] = imagesClass1;
    webcamDto['Class2Images'] = imagesClass2;

    return this.httpClient.post(this.backendUrl + 'Image/postWebcamImages', webcamDto);
  }

  getImagesOfClass(objectClass: string) {
    let headers = new HttpHeaders();
    let params = new HttpParams();
    params = params.append("objectClass", objectClass);

    return this.httpClient.get(this.backendUrl + 'Image/getImagesOfClass', { headers: headers, params: params });
  }

  getImagesOfClassCount(objectClass: string) {
    let headers = new HttpHeaders();
    let params = new HttpParams();
    params = params.append("objectClass", objectClass);

    return this.httpClient.get(this.backendUrl + 'Image/getNumberOfImagesOfClass', { headers: headers, params: params });
  }
}
