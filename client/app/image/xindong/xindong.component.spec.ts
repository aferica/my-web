import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XindongComponent } from './xindong.component';

describe('XindongComponent', () => {
  let component: XindongComponent;
  let fixture: ComponentFixture<XindongComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XindongComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XindongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
