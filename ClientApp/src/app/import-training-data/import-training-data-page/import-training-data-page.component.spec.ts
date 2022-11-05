import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportTrainingDataPageComponent } from './import-training-data-page.component';

describe('ImportTrainingDataPageComponent', () => {
  let component: ImportTrainingDataPageComponent;
  let fixture: ComponentFixture<ImportTrainingDataPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImportTrainingDataPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportTrainingDataPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
