import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZhenhanComponent } from './zhenhan.component';

describe('ZhenhanComponent', () => {
  let component: ZhenhanComponent;
  let fixture: ComponentFixture<ZhenhanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZhenhanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZhenhanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
