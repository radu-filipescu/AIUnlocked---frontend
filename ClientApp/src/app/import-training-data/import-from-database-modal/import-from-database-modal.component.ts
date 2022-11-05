import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { GlobalServiceService } from '../../global-services/global-service.service';

@Component({
  selector: 'app-import-from-database-modal',
  templateUrl: './import-from-database-modal.component.html',
  styleUrls: ['./import-from-database-modal.component.css']
})
export class ImportFromDatabaseModalComponent implements OnInit {
  userClass1: string = "";
  userClass2: string = "";
  databaseClass1Results: number = 1000;
  databaseClass2Results: number = 1200;

  @Output() cancelEvent = new EventEmitter<void>();

  constructor(public globalService: GlobalServiceService) { }

  ngOnInit() {
    this.userClass1 = GlobalServiceService.userClass1;
    this.userClass2 = GlobalServiceService.userClass2;

    // TODO: get number of results from backend
  }

  close() {
    this.cancelEvent.emit();
  }
}
