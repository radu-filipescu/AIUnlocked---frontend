import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportFromDatabaseModalComponent } from './import-from-database-modal.component';

describe('ImportFromDatabaseModalComponent', () => {
  let component: ImportFromDatabaseModalComponent;
  let fixture: ComponentFixture<ImportFromDatabaseModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImportFromDatabaseModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportFromDatabaseModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
