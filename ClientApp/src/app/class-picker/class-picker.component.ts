import { Component, OnInit } from '@angular/core';
import { GlobalServiceService } from '../global-services/global-service.service';

@Component({
  selector: 'app-class-picker',
  templateUrl: './class-picker.component.html',
  styleUrls: ['./class-picker.component.css']
})
export class ClassPickerComponent implements OnInit {

  class1: string = "";
  class2: string = "";

  constructor(private _globalService: GlobalServiceService) { }

  ngOnInit() {
  }

  next(): void {
    GlobalServiceService.userClass1 = this.class1;
    GlobalServiceService.userClass2 = this.class2;
  }

}
