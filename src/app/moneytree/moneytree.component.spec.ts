import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoneytreeComponent } from './moneytree.component';

describe('MoneytreeComponent', () => {
  let component: MoneytreeComponent;
  let fixture: ComponentFixture<MoneytreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoneytreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoneytreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
