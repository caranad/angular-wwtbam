import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AudiencelifelineComponent } from './audiencelifeline.component';

describe('AudiencelifelineComponent', () => {
  let component: AudiencelifelineComponent;
  let fixture: ComponentFixture<AudiencelifelineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AudiencelifelineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AudiencelifelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
