import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppBackgroundComponent } from './app-background.component';

describe('AppBackgroundComponent', () => {
  let component: AppBackgroundComponent;
  let fixture: ComponentFixture<AppBackgroundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppBackgroundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppBackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
