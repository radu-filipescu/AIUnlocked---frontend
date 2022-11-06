import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeBuilderComponent } from './code-builder.component';

describe('CodeBuilderComponent', () => {
  let component: CodeBuilderComponent;
  let fixture: ComponentFixture<CodeBuilderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodeBuilderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
