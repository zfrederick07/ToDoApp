import { NgModule } from '@angular/core';
import {ToDoListComponent} from './to-do-list.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {StoreModule} from '@ngrx/store';
import {ToDoListReducer} from './store/to-do-list.reducer';
import {ToDoListService} from './to-do-list.service';
import {ToDoListEffects} from './store/to-do-list.effects';
import {EffectsModule} from '@ngrx/effects';
import {HttpClient, HttpClientModule, HttpHandler} from '@angular/common/http';


@NgModule({
  declarations: [
    ToDoListComponent,
  ],
  imports: [
    FlexLayoutModule,
    StoreModule.forRoot({toDoList: ToDoListReducer}),
    EffectsModule.forRoot([ToDoListEffects]),
    HttpClientModule
  ],
  providers: [
    ToDoListService,
  ],
  exports: [
    ToDoListComponent
  ]
})
export class ToDoListModule { }
