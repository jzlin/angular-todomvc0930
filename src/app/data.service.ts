import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataService {

  apiBase = 'http://localhost:3000/todos';

  constructor(private http: HttpClient) { }

  getTodos() {
    return this.http.get<any[]>(this.apiBase);
  }

  createTodo(data) {
    return this.http.post(this.apiBase, data);
  }

  removeTodo(data) {
    return this.http.delete(`${this.apiBase}/${data.id}`);
  }

  updateTodo(data) {
    return this.http.put(`${this.apiBase}/${data.id}`, data);
  }

}
