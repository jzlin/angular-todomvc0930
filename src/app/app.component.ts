import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

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

  constructor(private dataSvc: DataService) {

  }

  ngOnInit() {
    this.dataSvc.getTodos()
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
      this.dataSvc.createTodo(newTodo)
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
    this.dataSvc.removeTodo(item)
      .subscribe(() => {
        this.todos = this.todos.filter(x => x !== item);
      });
  }

  todoUpdate(item) {
    this.dataSvc.updateTodo(item)
      .subscribe();
  }

  enterEditMode(item) {
    item.editText = item.text;
    item.isEditMode = true;
  }

  leaveEditMode(item) {
    delete item.isEditMode;
    this.todoUpdate(item);
  }

  saveEdit(item) {
    item.text = item.editText;
    delete item.editText;
    this.leaveEditMode(item);
  }
}
