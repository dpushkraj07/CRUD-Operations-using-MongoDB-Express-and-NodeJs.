import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
updatedObj;
  constructor(private http: HttpClient) { }

  fetchTodo() {
   return this.http.get<{message: string,todo: []}>("http://localhost:3000/myTodos");
  }

  insertTodo(title) {
    let obj = {
      title: title
    }
    return this.http.post<{message: string}>("http://localhost:3000/todo", obj);
  }

  deleteTodo(id) {
    return this.http.delete<{message: string}>("http://localhost:3000/todo/"+id);
  }

  updateTodo(id, title) {
    let obj = {
      title: title
    }
    return this.http.put<{message: string}>("http://localhost:3000/todo/"+id, obj);
  }
}
