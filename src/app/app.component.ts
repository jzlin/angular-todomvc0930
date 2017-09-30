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
      this.todos = this.todos.concat({
        text: this.todo,
        done: false
      });
      this.todo = '';
    }
  }

  todoModelChange($event) {
    this.todo = $event;
  }
}
