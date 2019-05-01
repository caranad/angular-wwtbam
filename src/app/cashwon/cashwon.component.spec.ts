import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CashwonComponent } from './cashwon.component';

describe('CashwonComponent', () => {
  let component: CashwonComponent;
  let fixture: ComponentFixture<CashwonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CashwonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CashwonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
