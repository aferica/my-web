import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XingganComponent } from './xinggan.component';

describe('XingganComponent', () => {
  let component: XingganComponent;
  let fixture: ComponentFixture<XingganComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XingganComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XingganComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
