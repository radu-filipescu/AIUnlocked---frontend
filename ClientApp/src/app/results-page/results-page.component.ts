import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-results-page',
  templateUrl: './results-page.component.html',
  styleUrls: ['./results-page.component.css']
})
export class ResultsPageComponent implements OnInit {
  accuracy: string = "72.2%";
  showWebcam: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  openWebcamModal() {
    this.showWebcam = true;
  }
}
