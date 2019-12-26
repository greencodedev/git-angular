import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { TaskSaveFilterPopupComponent } from '../task-save-filter-popup/task-save-filter-popup.component';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-task-filter-popup',
  templateUrl: './task-filter-popup.component.html',
  styleUrls: ['./task-filter-popup.component.css']
})
export class TaskFilterPopupComponent implements OnInit {
  type: FormGroup;
  constructor(public modalRef: BsModalRef, private modalService: BsModalService, private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.type = this.formBuilder.group({
      key: ['', Validators.nullValidator],
      taskName: ['', Validators.required],
      assignee: ['', Validators.required],
    });
  }

  saveSearch() {
    this.modalRef.hide();
    this.modalService.show(TaskSaveFilterPopupComponent, {
      initialState: {},
      class: 'save-search-modal'
    });
  }

  applyFilters() {

  }
}
