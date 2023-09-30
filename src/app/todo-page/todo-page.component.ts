import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.css']
})
export class TodoPageComponent {
  // defina a variable, which name is _name & default value is blank
  _name: string = ''
  // here _items is an array, which type is string and initial value is empty array
  _items: string[] = [];
  /**
   * Angular support 2 way data binding
   * when UI change, the code change and vice versa
   */
  /**
   * public void handleAdd(){}
   * in JS by default AM is public
   * return type is optional means is void
   * console.log is used to print the data in browser console
   * this is same as Java System.println or C# Console.WriteLine
   */
  handleAdd() {
    // LOGIC
    // this will check both blank,null,undefined, false etc
    // check that name should contains value
    // _items.forEach(item=>{})
    if (this._name) {
      this._items.push(this._name)
      console.log(this._items)
    }
    else {
      // show an error
    }
  }
}
