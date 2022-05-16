import { Injectable } from '@angular/core';
import { Todo } from './todo.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  todos: Todo[] =[new Todo(1,'This is a text',true),
                  new Todo(2,'There are 3 types of cloud available i.e. public, private and hybrid cloud.')
]
  constructor(private http: HttpClient) { }

  private todoUrl = 'http://localhost:8000/todos/'; 

  getAllTodos(): Observable<Todo[]>{
    return this.http.get<Todo[]>(this.todoUrl);
  }

  // getAllTodos(){
  //   return this.todos;
  // }
  // addTodo(todo:Todo){
  //   this.todos.push(todo);
  // }
  addTodo(todo:Todo){
    return this.http.post<Todo[]>(this.todoUrl, todo);
  }
  deleteTodo(index:number){
    this.todos.splice(index, 1)
  }
}
