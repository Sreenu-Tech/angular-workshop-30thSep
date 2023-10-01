UI - User Interface(Screen)
---------
Platforms
---------
1. Browser
	- Chorme
	- Firefox
	- Edge
	- Safari
2. Mobile
	- Android
		- Java/Kotlin
	- IOS
		- Objective C /Swift
3. Tablet
	- - Android
		- Java/Kotlin
	- IOS
		- Objective C /Swift
4. TV
	- Android - Java
	- Webos (LG) 
	- Firestick (AMazon)
5. Smart Watch
	- ANdroid
	- IOS
	- 

Browser
--------
Browser is used to access the application from the web(internet)
- > Web application
	- HTML - design the web page (image,text,button, textbox etc)
	- CSS - style the web page
Static in nature > 

	- Java Script -  programming lang. for the web
		this is used to dynamically change the HTML & CSS in browser

HTML (Hyper Text Markup Language)
- Hyper - web/internet
- Text - string format
- Markup - <>
- Lang - 
CSS (casceding Style Sheet)

Web application
1. HTML
2. CSS
3. JS

Why Angular, React & Vue ?
--------
Web Application flow

Single Page Application (SPA)
Angular is a framework which is used to develop SPA

1. Setup Angular env.
	1. Node js - Java Script runtime (https://nodejs.org/en)
	2. npm -  node package manager  (https://www.npmjs.com/package/@angular/cli)
	3. Angular CLI - Command Line Interface (https://angular.io/)
	/> ng version
	1. ng :  cmd for angular
2 types of interface to create application
	1. GUI
	2. CLI
2.Create a new Application
	/> ng new <project name>
3. Setup Code editor
	https://code.visualstudio.com/
4. Run application
	/> ng serve
5. Folder & File Structure

6. Component
	Component is UI building block

# Component
1. HTML
2. CSS
3. JS/TS
4. spec.ts (unit test case)
## How to create component?
`ng g c <component name>`
`ng generate ccomponent <component name>`
`ng g c header`
## file structure in component
1. `header.component.html` - Design file
2. `header.component.css` - style file
3. `header.component.ts` - code/logic file
4. `header.component.spec.ts` - unit test file

https://undraw.co/illustrations

# Web Page Design
1. Header
	1. Home
	2. About
	3. Todo
	4. Contact
2. Content
	1. dynamic render
3. Footer
	1. Copyright
	2. Socialmedia links

# TODO APP
1. Controls
	1. Textbox
	2. Button
2. Action
	On click on button, we need to display textbox value in list down.
3. Make sure that before going to add the data in list, the dat should not be duplicate
4. After adding the data in list, need to clear the textbox value
5. Each line item we have to add edit & delete button
6. Edit Action
	1. On click of edit, data will pepopulate in textbox and button name change to update
	2. We have to display one cancel button and on click on cancel button, we have to display the normal add view
	3. After click on update, we have to change the value of the list and reset to add view
7. Delete Action
	on Click of delete, we need to show the comforim dialog, once user clik on ok/Yed, we will remove the data from the list.

# Java Script
JS is not a type saftey language.
`
let age=20 // type will decide based on the value
console.log(typeof age)
age="Abcd"
console.log(typeof age)
// int age=20;
let myAge=20;
console.log(typeof myAge)
let yourAge="20"
console.log(typeof yourAge)
// == it will check only value
console.log(myAge==yourAge)
// === it will check value with type
console.log(myAge===yourAge)
`
