import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DischargedComponent } from './discharged.component';

describe('DischargedComponent', () => {
  let component: DischargedComponent;
  let fixture: ComponentFixture<DischargedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DischargedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DischargedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
