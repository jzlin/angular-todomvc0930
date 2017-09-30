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
  filterType = 'All';
  toggleAll = false;

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

  clearCompleted() {
    this.todos = this.todos.filter(x => !x.done);
  }

  updateFilter($event) {
    this.filterType = $event;
  }

  toggleAllChange() {
    this.todos.forEach(x => {
      x.done = this.toggleAll;
    });
  }

  removeTodo(item) {
    this.todos = this.todos.filter(x => x !== item);
  }
}
