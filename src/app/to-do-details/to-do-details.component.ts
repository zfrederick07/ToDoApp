import {AfterViewInit, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import * as selectors from '../to-do-list/to-do-list.selectors';
import {Observable} from 'rxjs';
import {ToDoItemDto} from '../../models/ToDoItemDto.model';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-to-do-details',
  templateUrl: './to-do-details.component.html',
  styleUrls: ['./to-do-details.component.scss']
})
export class ToDoDetailsComponent implements OnInit, AfterViewInit {
  public selectedToDoItem$: Observable<ToDoItemDto>;
  public toDoItem: ToDoItemDto;

  constructor(private store: Store,
              private changeDetection: ChangeDetectorRef,
              public dialogRef: MatDialogRef<ToDoDetailsComponent>) { }

  ngOnInit(): void {
    this.selectedToDoItem$ = this.store.pipe(select(selectors.selectedToDoItem));

  }

  public ngAfterViewInit(): void {
    this.selectedToDoItem$
      .subscribe((toDoItem: ToDoItemDto) => {
          if (toDoItem) {
            this.toDoItem = toDoItem;
          }
          this.changeDetection.detectChanges();
        }
      );
  }

  public closeDetail(): void {
    this.dialogRef.close();
  }

  public updateItem(): void {
    console.log('Open Update');
  }
}
