import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrugInsComponent } from './drug-ins.component';

describe('DrugInsComponent', () => {
  let component: DrugInsComponent;
  let fixture: ComponentFixture<DrugInsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrugInsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrugInsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
