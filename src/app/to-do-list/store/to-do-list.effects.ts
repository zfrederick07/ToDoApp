import { Injectable } from '@angular/core';
import {act, Actions, createEffect, ofType} from '@ngrx/effects';
import {of, pipe} from 'rxjs';
import {map, mergeMap, catchError, flatMap, switchMap, tap} from 'rxjs/operators';
import {ToDoListService} from '../to-do-list.service';
import * as ToDoListActions from './to-do-list.actions';
import {ToDoListDto} from '../../../models/ToDoListDto.model';
import {ToDoItemCreateComponent} from '../../to-do-item-create/to-do-item-create.component';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';

@Injectable()
export class ToDoListEffects {
  public createToDoItemComponent: ToDoItemCreateComponent;
  private toDoItemCreateDialog: MatDialogRef<ToDoItemCreateComponent>;

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

  constructor(
    private actions$: Actions,
    private toDoListService: ToDoListService,
    private dialog: MatDialog
  ) {}
}
