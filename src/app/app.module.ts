import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ToDoListModule} from './to-do-list/to-do-list.module';
import {ToDoDetailsModule} from './to-do-details/to-do-details.module';
import {HttpBaseInterceptor} from './HttpBaseInterceptor';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import {StoreModule} from '@ngrx/store';
import {reducers} from './app-state';
import {ToDoItemCreateModule} from './to-do-item-create/to-do-item-create.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    ToDoListModule,
    ToDoDetailsModule,
    ToDoItemCreateModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({
      maxAge: 10
    }),
    BrowserAnimationsModule
  ],
  providers: [AppComponent,
    { provide: HTTP_INTERCEPTORS, useClass: HttpBaseInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
