import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-example4';
  todoArray = []

  //we add the value entered in the textbox in the form and store it in this array.
  addTodo(value) {
    this.todoArray.push(value);
    console.log(this.todoArray)
  }

  /*On click of delete button, this function gets called and the item is removed from the array*/
  deleteItem(todo) {
    for (let i = 0; i <= this.todoArray.length; i++) {
      if (todo == this.todoArray[i]) {
        console.log("Deleting item")
        this.todoArray.splice(i, 1)
      }
    }
  }

  // submit Form  
  // Check the console. It will return an object of values
  todoSubmit(value: any) { console.log(value) }
}

