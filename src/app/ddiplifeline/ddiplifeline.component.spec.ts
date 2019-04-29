import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DdiplifelineComponent } from './ddiplifeline.component';

describe('DdiplifelineComponent', () => {
  let component: DdiplifelineComponent;
  let fixture: ComponentFixture<DdiplifelineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DdiplifelineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DdiplifelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
