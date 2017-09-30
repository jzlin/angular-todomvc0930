import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  inputHint = 'What needs to be done?';
  colSpan = 2;
  todos = [];
  todo: string;
  filterType = 'All';
  toggleAll = false;
  apiBase = 'http://localhost:3000/todos';

  constructor(private http: HttpClient) {

  }

  ngOnInit() {
    this.http.get<any[]>(this.apiBase)
      .subscribe(data => {
        this.todos = data;
      })
  }

  addTodos() {
    if (this.todo) {
      let newTodo = {
        text: this.todo,
        done: false
      };
      this.http.post(this.apiBase, newTodo)
        .subscribe(data => {
          this.todos = this.todos.concat(data);
          this.todo = '';
        });
    }
  }

  todoModelChange($event) {
    this.todo = $event;
  }

  clearCompleted() {
    this.todos.filter(x => x.done)
      .forEach(item => {
        this.removeTodo(item);
      });
  }

  updateFilter($event) {
    this.filterType = $event;
  }

  toggleAllChange() {
    this.todos.forEach(item => {
      item.done = this.toggleAll;
      this.todoUpdate(item);
    });
  }

  removeTodo(item) {
    this.http.delete(`${this.apiBase}/${item.id}`)
      .subscribe(() => {
        this.todos = this.todos.filter(x => x !== item);
      });
  }

  todoUpdate(item) {
    this.http.put(`${this.apiBase}/${item.id}`, item)
      .subscribe();
  }
}
