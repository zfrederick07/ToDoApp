import {ToDoItemDtoModel} from '../../../models/ToDoItemDto.model';
import {Action, createReducer, on} from '@ngrx/store';

export interface ToDoListState {
  toDoItems: ToDoItemDtoModel[];
}

export const initialState: ToDoListState = {
  toDoItems: [],
};

const scoreboardReducer = createReducer(
  initialState,
);

export function ToDoListReducer(state: ToDoListState | undefined, action: Action) {
  return scoreboardReducer(state, action);
}
