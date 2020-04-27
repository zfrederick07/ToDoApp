import {ToDoItemDto} from '../../../models/ToDoItemDto.model';
import {Action, createReducer, on} from '@ngrx/store';
import * as ToDoListActions from './to-do-list.actions';
import {ToDoListDto} from '../../../models/ToDoListDto.model';

export const toDoListFeatureKey = 'ToDoList';

export interface ToDoListState {
  toDoItemList: ToDoListDto;
}

export const initialState: ToDoListState = {
  toDoItemList: null,
};

const scoreboardReducer = createReducer(
  initialState,
  on(ToDoListActions.GetToDoListSuccess, (state, { toDoItems }) => {
    return {
      ...state,
      toDoItemList: toDoItems,
    };
  })
);

export function ToDoListReducer(state: ToDoListState | undefined, action: Action) {
  return scoreboardReducer(state, action);
}

