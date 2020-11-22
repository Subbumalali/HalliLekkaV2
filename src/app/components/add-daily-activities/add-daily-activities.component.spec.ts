import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDailyActivitiesComponent } from './add-daily-activities.component';

describe('AddDailyActivitiesComponent', () => {
  let component: AddDailyActivitiesComponent;
  let fixture: ComponentFixture<AddDailyActivitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddDailyActivitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDailyActivitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
