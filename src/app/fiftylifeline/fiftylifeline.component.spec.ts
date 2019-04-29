import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiftylifelineComponent } from './fiftylifeline.component';

describe('FiftylifelineComponent', () => {
  let component: FiftylifelineComponent;
  let fixture: ComponentFixture<FiftylifelineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiftylifelineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiftylifelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
