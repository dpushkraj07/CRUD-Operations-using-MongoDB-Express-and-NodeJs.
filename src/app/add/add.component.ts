import { Component, OnInit, EventEmitter, Output } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { ApiService } from '../api.service';

@Component({
  selector: "app-add",
  templateUrl: "./add.component.html",
  styleUrls: ["./add.component.css"],
})
export class AddComponent implements OnInit {
  // input = [];
  name = "Felix";
  enteredValue = '';
  // addValues = new FormGroup({
  //   input: new FormControl(""),
  // });
  updated;
  constructor(private apiService: ApiService) {}
  @Output() inputCreated = new EventEmitter();
  ngOnInit(): void {
    this.updated = this.apiService.updatedObj
   if(this.updated  != undefined) {
     this.enteredValue = this.updated.title
   }
  }
  collectValues() {
    const input = this.enteredValue

    // console.warn(this.addValues.value);
   if(this.updated != undefined) {
    this.apiService.updateTodo(this.updated._id, input).subscribe(res => {
      alert(res.message);
      this.apiService.updatedObj = undefined;
    })
   } else {
    this.apiService.insertTodo(input).subscribe(res => {
      alert(res.message);
    }, err => {

    })

   }
       // this.input.push(this.enteredValue);
    this.inputCreated.emit(input)

}
}
