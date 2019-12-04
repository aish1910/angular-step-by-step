import { Component } from '@angular/core';
import { trigger, animate, style, transition, keyframes } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations:[
    trigger("moveInLeft",[
       transition("void=> *",[style({transform:"translateX(300px)"}),
         animate(200,keyframes([
          style({transform:"translateX(300px)"}),
          style({transform:"translateX(0)"})
  
           ]))]),
 
 
           transition("*=>void",[style({transform:"translateX(0px)"}),
         animate(100,keyframes([
          style({transform:"translateX(0px)"}),
          style({transform:"translateX(300px)"})
  
           ]))])    
      
      ])
 
   ]
})
export class AppComponent {
  title = 'angular-example5';
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
  // we push the returned value to “todoArray”:
  todoSubmit(value: any) {
    if (value !== "") {
      this.todoArray.push(value.todo)
      //this.todoForm.reset()    
    } else {
      alert('Field required **')
    }
  }
}

