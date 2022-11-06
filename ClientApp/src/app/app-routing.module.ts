import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClassPickerComponent } from './class-picker/class-picker.component';
import { CodeBuilderComponent } from './code-builder/code-builder.component';
import { ImportTrainingDataPageComponent } from './import-training-data/import-training-data-page/import-training-data-page.component';


const routes: Routes = [
  { path: 'class-picker', component: ClassPickerComponent },
  { path: 'import-training-data', component: ImportTrainingDataPageComponent },
  { path: 'code-builder', component: CodeBuilderComponent },
  { path: '**', component: ClassPickerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
