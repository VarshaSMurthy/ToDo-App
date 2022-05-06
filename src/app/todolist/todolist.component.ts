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
   
  todos!: Todo[]
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.todos=this.dataService.getAllTodos()
  }
onFormSubmit(form:NgForm){
  
  console.log("Form Submitted")
  console.log(form)
  
  if (form.invalid) return alert("Form is invalid!")
  this.dataService.addTodo(new Todo(form.value.text))
}
}
