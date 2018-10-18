import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DownDetailComponent } from './down-detail.component';

describe('DownDetailComponent', () => {
  let component: DownDetailComponent;
  let fixture: ComponentFixture<DownDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DownDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DownDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
