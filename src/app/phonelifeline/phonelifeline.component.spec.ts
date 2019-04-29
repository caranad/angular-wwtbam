import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhonelifelineComponent } from './phonelifeline.component';

describe('PhonelifelineComponent', () => {
  let component: PhonelifelineComponent;
  let fixture: ComponentFixture<PhonelifelineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhonelifelineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhonelifelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
