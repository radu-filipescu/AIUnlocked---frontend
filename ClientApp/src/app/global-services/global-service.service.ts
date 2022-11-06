import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { knnDto } from '../code-builder/Dto/knnDto';
import { NaiveBayesDto } from '../code-builder/Dto/naiveBayesDto';
import { SVCDto } from '../code-builder/Dto/SVCDto';

@Injectable({
  providedIn: 'root'
})
export class GlobalServiceService {
  static userClass1: string = "tomato";
  static userClass2: string = "papaya";

  // 1 - own database, 2 - webcam, 3 - file upload
  static importWay: number;

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

  setSVCConfig(config: SVCDto) {
    return this.httpClient.post(this.backendUrl + 'PythonCode/postSVCConfig', config);
  }

  setKNNConfig(config: knnDto) {
    return this.httpClient.post(this.backendUrl + 'PythonCode/postKNNConfig', config);
  }

  setNBConfig(config: NaiveBayesDto) {
    return this.httpClient.post(this.backendUrl + 'PythonCode/postNBConfig', config);
  }

  postCode(MLModel: string, userClass1: string, userClass2: string) {
    let dto = new Object();

    dto = {
      "pythonCode": MLModel,
      "class1": userClass1,
      "class2": userClass2,
      "sourceFlag": GlobalServiceService.importWay
    };

    console.log(dto);

    if ((dto as any).pythonCode == "Naive Bayes")
      (dto as any).pythonCode = 'NB';

    return this.httpClient.post(this.backendUrl + 'PythonCode/postPythonCode', dto);
  }
}
