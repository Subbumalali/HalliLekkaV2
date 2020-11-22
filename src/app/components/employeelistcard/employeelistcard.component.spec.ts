import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeelistcardComponent } from './employeelistcard.component';

describe('EmployeelistcardComponent', () => {
  let component: EmployeelistcardComponent;
  let fixture: ComponentFixture<EmployeelistcardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeelistcardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeelistcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
