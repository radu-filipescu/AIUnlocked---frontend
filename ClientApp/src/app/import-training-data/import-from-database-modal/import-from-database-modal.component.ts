import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { GlobalServiceService } from '../../global-services/global-service.service';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-import-from-database-modal',
  templateUrl: './import-from-database-modal.component.html',
  styleUrls: ['./import-from-database-modal.component.css']
})
export class ImportFromDatabaseModalComponent implements OnInit {
  userClass1: string = "";
  userClass2: string = "";

  @Output() cancelEvent = new EventEmitter<void>();

  userClass1Length: number = 0;
  userClass2Length: number = 0;

  userClass1Images: string[] = [];
  userClass2Images: string[] = [];

  constructor(
    public globalService: GlobalServiceService,
    public _sanitizer: DomSanitizer,
    public router: Router) { }

  ngOnInit() {
    this.userClass1 = GlobalServiceService.userClass1;
    this.userClass2 = GlobalServiceService.userClass2;

    this.globalService.getImagesOfClassCount(this.userClass1)
      .subscribe((count) => {
        this.userClass1Length = count as number;
      });

    this.globalService.getImagesOfClassCount(this.userClass2)
      .subscribe((count) => {
        this.userClass2Length = count as number;
      });

    this.globalService.getImagesOfClass(this.userClass1)
      .subscribe((images) => {
        let safeImages = [];

        for (let image of images as string[]) {
          safeImages.push(this._sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' + image));
        }
        this.userClass1Images = safeImages;
      });

    this.globalService.getImagesOfClass(this.userClass2)
      .subscribe((images) => {
        let safeImages = [];

        for (let image of images as string[]) {
          safeImages.push(this._sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' + image));
        }
        this.userClass2Images = safeImages;
      });
  }

  close() {
    this.cancelEvent.emit();
  }

  useDatabase() {
    this.router.navigate(['code-builder']);
  }
}
