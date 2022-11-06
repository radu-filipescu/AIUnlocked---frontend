import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { GlobalServiceService } from '../../global-services/global-service.service';

@Component({
  selector: 'app-use-webcam-page',
  templateUrl: './use-webcam-page.component.html',
  styleUrls: ['./use-webcam-page.component.css']
})
export class UseWebcamPageComponent implements OnInit {

  @Output() cancelEvent = new EventEmitter<void>();

  triggerCapture = new EventEmitter<void>();
  capturingNow: boolean = false;

  capturesPerSecond: number = 10; // experiment with that
  timer = null;
  imageCapturesClass1: string[] = [];
  imageCapturesClass2: string[] = [];

  whichClass: number = 1;

  previewMode: boolean = false;

  userClass1: string = "";
  userClass2: string = "";

  constructor(public globalService: GlobalServiceService, public router: Router) { }

  ngOnInit() {
    this.userClass1 = GlobalServiceService.userClass1;
    this.userClass2 = GlobalServiceService.userClass2;
  }

  close() {
    this.cancelEvent.emit();
  }

  startCapturing() {
    this.capturingNow = true;

    if (this.whichClass == 1)
      this.imageCapturesClass1 = [];
    else
      this.imageCapturesClass2 = [];

    this.timer = setInterval(() => {
      this.triggerCapture.emit();
    }, 1000 / this.capturesPerSecond);
  }

  stopCapturing() {
    this.capturingNow = false;
    if(this.timer)
      clearInterval(this.timer);
  }

  nextClass() {
    this.whichClass = 2;
  }

  handleImageCapture(event: any) {
    if (this.whichClass == 1)
      this.imageCapturesClass1.push(event._imageAsDataUrl);
    else
      this.imageCapturesClass2.push(event._imageAsDataUrl);
  }

  openPreviewCaptures() {
    this.previewMode = true;
  }

  closePreview() {
    this.previewMode = false;
  }

  useWebcamCapture() {
    this.globalService.saveWebcamImages(this.imageCapturesClass1, this.imageCapturesClass2)
      .subscribe(() => {
      });

    this.router.navigate(['code-builder']);

    GlobalServiceService.importWay = 2;
  }
}
