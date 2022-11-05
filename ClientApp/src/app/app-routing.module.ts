import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImportTrainingDataPageComponent } from './import-training-data/import-training-data-page/import-training-data-page.component';

const routes: Routes = [
  { path: '**', component: ImportTrainingDataPageComponent },
  { path: 'import-training-data', component: ImportTrainingDataPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
