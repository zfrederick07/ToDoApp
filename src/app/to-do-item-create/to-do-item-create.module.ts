import { NgModule } from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';
import {CommonModule} from '@angular/common';
import {ToDoItemCreateComponent} from './to-do-item-create.component';
import {HttpClientModule} from '@angular/common/http';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [
    ToDoItemCreateComponent,
  ],
  imports: [
    FlexLayoutModule,
    HttpClientModule,
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  providers: [
  ],
  exports: [
    ToDoItemCreateComponent
  ]
})
export class ToDoItemCreateModule { }
