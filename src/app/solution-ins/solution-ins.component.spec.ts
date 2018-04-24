import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolutionInsComponent } from './solution-ins.component';

describe('SolutionInsComponent', () => {
  let component: SolutionInsComponent;
  let fixture: ComponentFixture<SolutionInsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolutionInsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolutionInsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
