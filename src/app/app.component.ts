import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  inputHint = 'What needs to be done?';
  colSpan = 2;
  todos = [];
  todo: string;

  addTodos() {
    if (this.todo) {
      this.todos.push(this.todo);
      this.todo = '';
    }
  }
}
