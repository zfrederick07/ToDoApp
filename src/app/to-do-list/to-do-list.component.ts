import {AfterViewInit, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import * as ToDoListActions from './store/to-do-list.actions';
import * as selectors from './to-do-list.selectors';
import {Observable} from 'rxjs';
import {ToDoListDto} from '../../models/ToDoListDto.model';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent implements OnInit, AfterViewInit {
  public toDoList$: Observable<ToDoListDto>;
  public toDoItems: ToDoListDto;
  constructor(private store: Store,
              private changeDetection: ChangeDetectorRef) { }

  public ngOnInit(): void {
    this.store.dispatch(ToDoListActions.GetToDoList());
    this.toDoList$ = this.store.pipe(select(selectors.toDoListMembers));
  }

  public ngAfterViewInit(): void {
    this.toDoList$
      .subscribe((toDoListItems: ToDoListDto) => {
        if (toDoListItems) {
          this.toDoItems = toDoListItems;
        }
        this.changeDetection.detectChanges();
      }
    );
  }

  public createToDoItem(): void {
    this.store.dispatch(ToDoListActions.OpenToDoItemCreate());
  }

  public openToDoItemDetail(id: number): void {
    this.store.dispatch(ToDoListActions.GetToDoItemById({id}));
    this.store.dispatch(ToDoListActions.OpenToDoItemDetail());
  }
}
