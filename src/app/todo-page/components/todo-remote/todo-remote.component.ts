import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ITodo } from '../../models';
// using (c#), import (java)

@Component({
  selector: 'app-todo-remote',
  templateUrl: './todo-remote.component.html',
  styleUrls: ['./todo-remote.component.css']
})
export class TodoRemoteComponent implements OnInit,OnDestroy {

  // store the value of todo items
  _results: ITodo[] = [];
  // default true to show loader
  _loading:boolean=true

  // constructor : this is used to define constructor in java script
  /**
   * 
   * HttpClient : is used to do all http operations in application
   * this class in inside HTTPClientModule
   * 
   * // DI (Depedancy Injection)
   */
  constructor(private http: HttpClient) {

  }
 

  // call the API (https://jsonplaceholder.typicode.com/todos)
  // wait for response
  // after response display the data in UI

  // where to call the API
  // lifecycle of component

  ngOnInit(): void {
    // this method will invoke when component loaded into the UI
    // this method only call once, becuase it call on load
    // here we will load the API
    // In Angular if you want to work with http request/response, then we have to use some extra module
    // module

    // call the API
    // RXJS : 
    // subscribe : waiting for the result
    this.http.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos').subscribe(result => {
      this._results = result;
      // hide loader
      this._loading=false
    })
  }

  ngOnDestroy(): void {
    console.log('TODO unload')
  }
}
