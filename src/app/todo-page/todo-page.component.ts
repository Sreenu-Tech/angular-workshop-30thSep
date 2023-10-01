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
  // semicoln (;) is optional in JS
  _items: string[] = [];
  // this will store the error message
  _error: string = ''
  // edit index. -1 means, not in edit mode
  _editIndex: number = -1
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
    // reset
    this._error = '';
    // LOGIC
    // this will check both blank,null,undefined, false etc
    // check that name should contains value
    // _items.forEach(item=>{})
    if (this._name) {
      if (this._editIndex > -1) {
        // edit mode
        // TODO:: check duplicate of the item in edit mode
        this._items[this._editIndex]=this._name
      }
      else {
        // add mode
        // do duplicate check
        if (this._items.indexOf(this._name) === -1) {
          // not exists
          // push method is used to insert the item end of an array 
          this._items.push(this._name)
          // clear the name
          this._name = ''
        }
        else {
          this._error = 'Duplicate Item'
        }
      }

    }
    else {
      // show an error
    }
  }

  handleDelete(index: number) {
    // before delete ask user for confirmation
    if (confirm('Do you want to delete?')) {
      // delete the item
      // splice is used to remove the item from an array
      this._items.splice(index, 1)
    }
  }

  handleEdit(index: number) {
    // get the item
    const item = this._items[index];
    // prefill the textbox
    this._name = item;
    // disable all the edit and delete button in list
    this._editIndex = index;
    // change the add button to edit
    
    // display cancel button
    console.log(this._editIndex)
  }

  handleCancel() {
    this._name = ''
    this._editIndex = -1
  }

}
