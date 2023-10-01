import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { TodoPageComponent } from './todo-page/todo-page.component';
import { FormsModule } from '@angular/forms';
import { TodoRemoteComponent } from './todo-page/components/todo-remote/todo-remote.component';
// this is the module requried to enable http work in angular
import { HttpClientModule } from
  '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    HomePageComponent,
    AboutPageComponent,
    ContactPageComponent,
    TodoPageComponent,
    TodoRemoteComponent
  ],
  imports: [
    // here we will register the package/module which will use inside the application
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

/**
 * this module is the default module for the application
 * and this will invoke AppComponent
 * this module is called inside main.ts
 * 
 * main.ts (entry point) > AppModule > AppComponent > other components
 */