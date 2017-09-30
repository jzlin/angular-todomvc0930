import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  private _todos = [];

  @Input('data')
  set todos(value) {
    this._todos = value;
    this.tooMore = this.todos.length > 5;
  }
  get todos() {
    return this._todos;
  }

  tooMore = false;

  @Output() clearBtnClick = new EventEmitter();

  filterType = 'All';

  @Output() filterChange = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  logFooter() {
    console.log('log from footer');
  }

  changeFilterType(type) {
    this.filterType = type;
    this.filterChange.emit(type);
  }

}
