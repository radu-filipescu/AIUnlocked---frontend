import { Component, OnInit } from '@angular/core';
import { User } from 'oidc-client';
import { GlobalServiceService } from '../../global-services/global-service.service';

@Component({
  selector: 'app-import-training-data-page',
  templateUrl: './import-training-data-page.component.html',
  styleUrls: ['./import-training-data-page.component.css']
})
export class ImportTrainingDataPageComponent implements OnInit {
  userClass1: string = "";
  userClass2: string = "";

  constructor(public globalService: GlobalServiceService) { }

  ngOnInit() {
    console.log(GlobalServiceService.userClass1);
    this.userClass1 = GlobalServiceService.userClass1;
    this.userClass2 = GlobalServiceService.userClass2;
  }

}
