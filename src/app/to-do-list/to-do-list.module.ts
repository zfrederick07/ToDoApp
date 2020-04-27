import { NgModule } from '@angular/core';
import {ToDoListComponent} from './to-do-list.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {ToDoListService} from './to-do-list.service';
import {ToDoListEffects} from './store/to-do-list.effects';
import {EffectsModule} from '@ngrx/effects';
import {HttpClientModule} from '@angular/common/http';
import {CommonModule} from '@angular/common';
import {ToDoItemCreateModule} from '../to-do-item-create/to-do-item-create.module';
import {MatDialogModule} from '@angular/material/dialog';


@NgModule({
  declarations: [
    ToDoListComponent,
  ],
  imports: [
    FlexLayoutModule,
    MatDialogModule,
    ToDoItemCreateModule,
    EffectsModule.forRoot([ToDoListEffects]),
    HttpClientModule,
    CommonModule
  ],
  providers: [
    ToDoListService,
  ],
  exports: [
    ToDoListComponent
  ]
})
export class ToDoListModule { }
