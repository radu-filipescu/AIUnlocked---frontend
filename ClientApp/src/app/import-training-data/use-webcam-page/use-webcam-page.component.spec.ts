import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UseWebcamPageComponent } from './use-webcam-page.component';

describe('UseWebcamPageComponent', () => {
  let component: UseWebcamPageComponent;
  let fixture: ComponentFixture<UseWebcamPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UseWebcamPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UseWebcamPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
