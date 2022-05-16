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
  //   this.todos=this.dataService.getAllTodos()
  this.dataService.getAllTodos().subscribe(data => {
    console.log(data)
    this.data = data
    this.todos = this.data.name
    console.log(this.todos)
  }
  );
  }

onFormSubmit(form:NgForm){
  
  console.log("Form Submitted")
  console.log(form)
  
  if (form.invalid) return alert("Form is invalid!")
  this.dataService.addTodo(new Todo(form.value.text))
}

onClick(todo: Todo){
  // Set Todo to completed
  todo.completed=!todo.completed;
}

onDelete(todo: Todo){
  const index = this.todos.indexOf(todo)
  this.dataService.deleteTodo(index)
}
}
