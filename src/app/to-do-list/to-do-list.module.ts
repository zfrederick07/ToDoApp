import { NgModule } from '@angular/core';
import {ToDoListComponent} from './to-do-list.component';
import {FlexLayoutModule} from '@angular/flex-layout';


@NgModule({
  declarations: [
    ToDoListComponent,
  ],
  imports: [
    FlexLayoutModule
  ],
  providers: [],
  exports: [
    ToDoListComponent
  ]
})
export class ToDoListModule { }
