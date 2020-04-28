import {createSelector} from '@ngrx/store';
import {AppState} from '../app-state';
import {toDoListFeatureKey, ToDoListState} from './store/to-do-list.reducer';

export const toDoListState = (state: AppState) => state[toDoListFeatureKey];

export const toDoListMembers = createSelector(
  toDoListState,
  (state: ToDoListState) => state.toDoItemList
);

export const selectedToDoItem = createSelector(
  toDoListState,
  (state: ToDoListState) => state.selectedToDoItem
);
