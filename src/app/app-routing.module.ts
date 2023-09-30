import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { TodoPageComponent } from './todo-page/todo-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
/**
 * int age=20;
 * int  : data type
 * float percentage=59.55f
 * Type script
 * age(varibale name):number(type)=20(value);
 * number(data type)
 * pecentage:number=58.55;
 * [] : array
 * in JS : Array is dynamic data structure
 * Just like List & ArrayList
 * {} is used to define object in JS
 * @httpGet("details")
 * [HttpGet("details")]
 */
const routes: Routes = [
  {
    path:'', // root path
    component:HomePageComponent
  },
  {
    path:'about',
    component:AboutPageComponent
  },
  {
    path:'todo',
    component:TodoPageComponent
  },
  {
    path:'contact',
    component:ContactPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
