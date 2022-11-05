import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { WebcamModule } from 'ngx-webcam';

import { AppComponent } from './app.component';
import { AppBackgroundComponent } from './app-background/app-background.component';
import { ImportTrainingDataPageComponent } from './import-training-data/import-training-data-page/import-training-data-page.component';
import { AppRoutingModule } from './app-routing.module';
import { ImportFromDatabaseModalComponent } from './import-training-data/import-from-database-modal/import-from-database-modal.component';
import { ClassPickerComponent } from './class-picker/class-picker.component';
import { UseWebcamPageComponent } from './import-training-data/use-webcam-page/use-webcam-page.component';

@NgModule({
  declarations: [
    AppComponent,
    AppBackgroundComponent,
    ImportTrainingDataPageComponent,
    ImportFromDatabaseModalComponent,
    UseWebcamPageComponent,
    ClassPickerComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
    ]),
    AppRoutingModule,
    WebcamModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
