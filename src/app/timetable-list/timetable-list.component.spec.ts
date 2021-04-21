import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TimetableListComponent } from './timetable-list.component';

describe('TimetableListComponent', () => {
  let component: TimetableListComponent;
  let fixture: ComponentFixture<TimetableListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TimetableListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimetableListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
