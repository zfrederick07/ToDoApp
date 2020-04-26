import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {ToDoListState} from './store/to-do-list.reducer';
import * as ToDoListActions from './store/to-do-list.actions';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent implements OnInit {

  constructor(private store: Store<{ toDoList: ToDoListState }>) { }

  public ngOnInit(): void {
    this.store.dispatch(ToDoListActions.GetToDoList());
  }
}
