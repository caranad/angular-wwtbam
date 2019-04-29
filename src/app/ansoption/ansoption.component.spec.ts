import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnsoptionComponent } from './ansoption.component';

describe('AnsoptionComponent', () => {
  let component: AnsoptionComponent;
  let fixture: ComponentFixture<AnsoptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnsoptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnsoptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
