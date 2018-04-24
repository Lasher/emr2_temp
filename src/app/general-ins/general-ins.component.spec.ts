import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralInsComponent } from './general-ins.component';

describe('GeneralInsComponent', () => {
  let component: GeneralInsComponent;
  let fixture: ComponentFixture<GeneralInsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneralInsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralInsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
