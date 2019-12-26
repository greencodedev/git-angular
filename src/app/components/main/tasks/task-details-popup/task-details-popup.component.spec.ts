import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskDetailsPopupComponent } from './task-details-popup.component';

describe('TaskDetailsPopupComponent', () => {
  let component: TaskDetailsPopupComponent;
  let fixture: ComponentFixture<TaskDetailsPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskDetailsPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskDetailsPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
