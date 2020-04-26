import { createAction, props } from '@ngrx/store';
import {ToDoItemDtoModel} from '../../../models/ToDoItemDto.model';

export const createToDoItem = createAction(
  '[To Do List] Create To Do Item',
  props<{ toDoItem: ToDoItemDtoModel }>()
);

export const deleteToDoItem = createAction(
  '[To Do List] Delete To Do Item',
  props<{ id: number; }>()
);

export const updateToDoItem = createAction(
  '[To Do List] Update To Do Item',
  props<{ id: number; toDoItem: ToDoItemDtoModel }>()
);

export const openToDoItemDetail = createAction(
  '[To Do List] Open To Do Item Detail',
  props<{ id: number; }>()
);

export const closeToDoItemDetail = createAction(
  '[To Do List] Close To Do Item Detail'
);
