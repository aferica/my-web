import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QingchunComponent } from './qingchun.component';

describe('QingchunComponent', () => {
  let component: QingchunComponent;
  let fixture: ComponentFixture<QingchunComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QingchunComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QingchunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
