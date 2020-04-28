import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {ToDoItemDto} from '../../models/ToDoItemDto.model';

@Injectable()
export class ToDoListService {
  public id = -1;
  constructor(private http: HttpClient) {}

  public getToDoList() {
    return this.http.get('/toDoList');
  }

  public createToDoItem(toDoItem: ToDoItemDto) {
    return this.http.post('/toDoList/create', toDoItem);
  }

  public getToDoItemsById(id: number) {
    const url = '/toDoList/' + id;
    return this.http.get(url);
  }
}
