import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import {ToDoListService} from '../to-do-list.service';
import * as ToDoListActions from './to-do-list.actions';
import {ToDoListDto} from '../../../models/ToDoListDto.model';

@Injectable()
export class ToDoListEffects {

  public getToDoItemList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ToDoListActions.GetToDoList),
      mergeMap(() => this.toDoListService.getToDoList()
        .pipe(
          map((toDoList: ToDoListDto) => (ToDoListActions.GetToDoListSuccess({toDoItems: toDoList}))),
          catchError(() => of(ToDoListActions.GetToDoListError()))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private toDoListService: ToDoListService,
  ) {}
}
