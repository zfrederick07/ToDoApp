import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {ToDoListDto} from '../../models/ToDoListDto.model';

@Injectable()
export class ToDoListService {
  constructor(private http: HttpClient) {}

  public getToDoList() {
    return this.http.get('/toDoList');
  }
}
