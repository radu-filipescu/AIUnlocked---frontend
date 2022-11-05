import { Component, EventEmitter, OnInit, Output } from '@angular/core';
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
  imageCaptures: string[] = [];

  previewMode: boolean = false;

  constructor(public globalService: GlobalServiceService) { }

  ngOnInit() {
  }

  close() {
    this.cancelEvent.emit();
  }

  startCapturing() {
    this.capturingNow = true;

    this.imageCaptures = [];

    this.timer = setInterval(() => {
      this.triggerCapture.emit();
    }, 1000 / this.capturesPerSecond);
  }

  stopCapturing() {
    this.capturingNow = false;
    if(this.timer)
      clearInterval(this.timer);
  }

  handleImageCapture(event: any) {
    this.imageCaptures.push(event._imageAsDataUrl);
  }

  openPreviewCaptures() {
    this.previewMode = true;
  }

  closePreview() {
    this.previewMode = false;
  }

  useWebcamCapture() {
    this.globalService.saveWebcamImages(this.imageCaptures)
      .subscribe(() => {
        console.log('images saved!');

      });
  }
}
