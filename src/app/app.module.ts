import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ToDoListModule} from './to-do-list/to-do-list.module';
import {ToDoDetailsModule} from './to-do-details/to-do-details.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    ToDoListModule,
    ToDoDetailsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
