import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AddfacultyListComponent } from './addfaculty-list.component';

describe('AddfacultyListComponent', () => {
  let component: AddfacultyListComponent;
  let fixture: ComponentFixture<AddfacultyListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AddfacultyListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddfacultyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
