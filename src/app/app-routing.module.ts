import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ToDoListComponent} from './to-do-list/to-do-list.component';
import {ToDoDetailsComponent} from './to-do-details/to-do-details.component';
import {ToDoItemCreateComponent} from './to-do-item-create/to-do-item-create.component';


const routes: Routes = [
  {
    path: '',
    component: ToDoListComponent,
  },
  {
    path: 'details',
    component: ToDoDetailsComponent,
  },
  {
    path: 'create',
    component: ToDoItemCreateComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
