import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-example2';
  todoArray = []

  //we add the value entered in the textbox in the form and store it in this array.
  addTodo(value) { this.todoArray.push(value);
        console.log(this.todoArray) }
}

