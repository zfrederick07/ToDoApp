import {AfterViewInit, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import * as ToDoListActions from './store/to-do-list.actions';
import * as selectors from './to-do-list.selectors';
import {Observable} from 'rxjs';
import {ToDoListDto} from '../../models/ToDoListDto.model';
import {ToDoItemDto} from '../../models/ToDoItemDto.model';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent implements OnInit, AfterViewInit {
  public toDoList$: Observable<ToDoListDto>;
  public toDoItems: ToDoItemDto[];
  constructor(private store: Store,
              private changeDetection: ChangeDetectorRef) { }

  public ngOnInit(): void {
    this.store.dispatch(ToDoListActions.GetToDoList());
    this.toDoList$ = this.store.pipe(select(selectors.toDoListMembers));
  }

  public ngAfterViewInit(): void {
    this.toDoList$
      .subscribe((toDoListItems) => {
        console.log('here');
        console.log(toDoListItems);
        if (toDoListItems) {
          this.toDoItems = toDoListItems.toDoItems;
        }
        this.changeDetection.detectChanges();
      }
    );
  }
}
