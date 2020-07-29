import { Component, OnInit,Input } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fetch',
  templateUrl: './fetch.component.html',
  styleUrls: ['./fetch.component.css']
})
export class FetchComponent implements OnInit {
todoArray
  constructor(private apiService: ApiService, private router: Router) { }


  ngOnInit(): void {
    this.apiService.fetchTodo().subscribe(res => {
      console.log(res);
      alert(res.message);
      this.todoArray = res.todo;
    })
  }
  @Input() inputs = ''

  deleteTodo(id) {
    alert(id);
    this.apiService.deleteTodo(id).subscribe(res => {
      alert(res.message);
      let index = this.todoArray.findIndex(ele => {
        return ele.id == id
      })
      this.todoArray.splice(index, 1);
    })
  }

  editClicked(todo) {
    this.apiService.updatedObj= todo;
    this.router.navigateByUrl("add");
  }
}
