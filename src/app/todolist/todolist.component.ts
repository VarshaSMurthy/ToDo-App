import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataService } from '../Service/data.service';
import { Todo } from '../Service/todo.model';


@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {
  
  public data: any = [];
  todos!: Todo[]
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  this.getData();
  }

getData(){
this.dataService.getAllTodos().subscribe(data => {
    console.log(data)
    this.todos = data
    console.log(this.todos)
}
);
}

onFormSubmit(form:NgForm){
  
  console.log("Form Submitted")
  console.log(form)
  
  if (form.invalid) return alert("Form is invalid!")
  const test = {
    "title": form.value.text,
  }
  this.dataService.addTodo(test).subscribe(data => {
    this.todos = data
  });
  this.getData();
}

onClick(todo: Todo){
  // Set Todo to completed
  todo.completed=!todo.completed;
}

onDelete(todo: Todo["id"]){
  //const index = this.todos.id;
  console.log(todo);
  this.dataService.deleteTodo(todo).subscribe(data => {
    console.log(data)
    this.todos = data
  }
  );
this.getData();
}
}
