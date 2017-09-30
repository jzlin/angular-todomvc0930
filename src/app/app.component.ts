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

  addTodos(value) {
    this.todos.push(value);
  }
}
