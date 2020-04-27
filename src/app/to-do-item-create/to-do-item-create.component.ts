import { Component } from '@angular/core';
import {Store} from '@ngrx/store';
import * as ToDoListActions from '../to-do-list/store/to-do-list.actions';
import {ToDoItemDto} from '../../models/ToDoItemDto.model';
import {MatDialogRef} from '@angular/material/dialog';


@Component({
  selector: 'app-to-do-item-create',
  templateUrl: './to-do-item-create.component.html',
  styleUrls: ['./to-do-item-create.component.scss']
})
export class ToDoItemCreateComponent {
  public title = '';
  public description = '';

  constructor(
    public dialogRef: MatDialogRef<ToDoItemCreateComponent>,
    private store: Store) { }

  public titleBlurEvent(value: string): void {
    this.title = value;
  }

  public descriptionBlurEvent(value: string): void {
    this.description = value;
  }

  public closeCreate(): void {
    this.store.dispatch(ToDoListActions.CloseToDoItemCreate());
    this.dialogRef.close();
  }

  public createItem(): void {
    const toDoItem = {
        id: 0,
        title: this.title,
        description: this.description,
        isCompleted: false
      } as ToDoItemDto;
    this.store.dispatch(ToDoListActions.CreateToDoItem({toDoItem}));
    this.dialogRef.close();
  }
}
