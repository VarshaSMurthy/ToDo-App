import { Injectable } from '@angular/core';
import { Todo } from './todo.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  todos: Todo[] =[new Todo('This is a text',true),
                  new Todo('There are 3 types of cloud available i.e. public, private and hybrid cloud.')
]
  constructor() { }

  getAllTodos(){
    return this.todos;
  }
  addTodo(todo:Todo){
    this.todos.push(todo);
  }
  deleteTodo(index:number){
    this.todos.splice(index, 1)
  }
}
