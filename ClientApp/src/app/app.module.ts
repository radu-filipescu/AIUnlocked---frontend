import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { WebcamModule } from 'ngx-webcam';
import { InputSwitchModule } from 'primeng/inputswitch';
import { TooltipModule } from 'primeng/tooltip';
import { DropdownModule } from 'primeng/dropdown';
import { RadioButtonModule } from 'primeng/radiobutton';
import { SliderModule } from 'primeng/slider';

import { AppComponent } from './app.component';
import { AppBackgroundComponent } from './app-background/app-background.component';
import { ImportTrainingDataPageComponent } from './import-training-data/import-training-data-page/import-training-data-page.component';
import { AppRoutingModule } from './app-routing.module';
import { ImportFromDatabaseModalComponent } from './import-training-data/import-from-database-modal/import-from-database-modal.component';
import { ClassPickerComponent } from './class-picker/class-picker.component';
import { UseWebcamPageComponent } from './import-training-data/use-webcam-page/use-webcam-page.component';

import { PrismModule } from '@ngx-prism/core';

import { CodeBuilderComponent } from './code-builder/code-builder.component';


@NgModule({
  declarations: [
    AppComponent,
    AppBackgroundComponent,
    ImportTrainingDataPageComponent,
    ImportFromDatabaseModalComponent,
    UseWebcamPageComponent,
    ClassPickerComponent,
    CodeBuilderComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
    ]),
    AppRoutingModule,
    PrismModule,
    WebcamModule,
    InputSwitchModule,
    TooltipModule,
    DropdownModule,
    RadioButtonModule,
    SliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
