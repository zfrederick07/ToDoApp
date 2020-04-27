import * as fromToDoList from './to-do-list/store/to-do-list.reducer';
import {ActionReducerMap} from '@ngrx/store';

export interface AppState {
  [fromToDoList.toDoListFeatureKey]: fromToDoList.ToDoListState;
}

export const reducers: ActionReducerMap<AppState> = {
  [fromToDoList.toDoListFeatureKey]: fromToDoList.ToDoListReducer
};
