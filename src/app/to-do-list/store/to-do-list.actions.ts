import { createAction, props } from '@ngrx/store';
import {ToDoItemDto} from '../../../models/ToDoItemDto.model';
import {ToDoListDto} from '../../../models/ToDoListDto.model';

export const GetToDoList = createAction(
  '[To Do List] Get To Do List'
);

export const GetToDoListSuccess = createAction(
  '[To Do List] Get To Do List Success',
  props<{toDoItems: ToDoListDto}>()
);

export const GetToDoListError = createAction(
  '[To Do List] Get To Do List Error'
);
export const CreateToDoItem = createAction(
  '[To Do List] Create To Do Item',
  props<{ toDoItem: ToDoItemDto }>()
);

export const DeleteToDoItem = createAction(
  '[To Do List] Delete To Do Item',
  props<{ id: number; }>()
);

export const UpdateToDoItem = createAction(
  '[To Do List] Update To Do Item',
  props<{ id: number; toDoItem: ToDoItemDto }>()
);

export const OpenToDoItemDetail = createAction(
  '[To Do List] Open To Do Item Detail',
  props<{ id: number; }>()
);

export const CloseToDoItemDetail = createAction(
  '[To Do List] Close To Do Item Detail'
);
