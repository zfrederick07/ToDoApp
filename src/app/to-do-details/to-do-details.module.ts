import { NgModule } from '@angular/core';
import {ToDoDetailsComponent} from './to-do-details.component';
import {CommonModule} from '@angular/common';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    ToDoDetailsComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    FlexLayoutModule,
    MatButtonModule
  ],
  providers: [],
  exports: [
    ToDoDetailsComponent,
  ]
})
export class ToDoDetailsModule { }
