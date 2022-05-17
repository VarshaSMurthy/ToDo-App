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

  private httpOptions!: {
  headers: HttpHeaders;
};

  constructor(private http: HttpClient) { 
	this.httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };
}

  private todoUrl = "http://localhost:8000/api/"; 

  getAllTodos(): Observable<Todo[]>{
    return this.http.get<Todo[]>(this.todoUrl+"task-list"+"/");
  }

  // getAllTodos(){
  //   return this.todos;
  // }
  // addTodo(todo:Todo){
  //   this.todos.push(todo);
  // }
  addTodo(todo:Todo){
    return this.http.post<Todo[]>(this.todoUrl+"task-create"+"/", todo, this.httpOptions);
  }
  deleteTodo(index:number){
    this.todos.splice(index, 1)
  }
}
