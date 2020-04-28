import { Injectable } from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {of} from 'rxjs';
import {map, mergeMap, catchError, flatMap, switchMap} from 'rxjs/operators';
import {ToDoListService} from '../to-do-list.service';
import * as ToDoListActions from './to-do-list.actions';
import {ToDoListDto} from '../../../models/ToDoListDto.model';
import {ToDoItemCreateComponent} from '../../to-do-item-create/to-do-item-create.component';
import {MatDialog} from '@angular/material/dialog';
import {ToDoDetailsComponent} from '../../to-do-details/to-do-details.component';
import {ToDoItemDto} from '../../../models/ToDoItemDto.model';

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

  public openToDoItemCreate$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ToDoListActions.OpenToDoItemCreate),
      flatMap(() => {
        const dialogRef = this.dialog.open(ToDoItemCreateComponent, {});

        return dialogRef.afterClosed();
      }),
      map(() => ToDoListActions.GetToDoList())
    )
  );

  public createToDoItem$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ToDoListActions.CreateToDoItem),
      mergeMap((action ) => this.toDoListService.createToDoItem(action.toDoItem)
        .pipe(
          map(() => (ToDoListActions.CreateToDoItemSuccess())),
          catchError(() => of(ToDoListActions.CreateToDoItemError()))
        )
      )
    )
  );

  public createToDoItemSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ToDoListActions.CreateToDoItemSuccess),
      switchMap(() => [
          ToDoListActions.GetToDoList(),
        ])
    )
  );

  public openToDoDetail = createEffect(() =>
    this.actions$.pipe(
      ofType(ToDoListActions.OpenToDoItemDetail),
      flatMap(() => {
        const dialogRef = this.dialog.open(ToDoDetailsComponent, {});

        return dialogRef.afterClosed();
      }),
      map(() => ToDoListActions.GetToDoList())
    )
  );

  public getToDoItemById = createEffect(() =>
    this.actions$.pipe(
      ofType(ToDoListActions.GetToDoItemById),
      mergeMap((action) => this.toDoListService.getToDoItemsById(action.id)
        .pipe(
          map((toDoItem: ToDoItemDto) => (ToDoListActions.GetToDoItemByIdSuccess({toDoItem}))),
          catchError(() => of(ToDoListActions.GetToDoItemByIdError()))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private toDoListService: ToDoListService,
    private dialog: MatDialog
  ) {}
}
