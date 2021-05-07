import { Component, OnInit } from '@angular/core';
import { HttpService } from './services/to-do-list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})

export class ListComponent implements OnInit {

  done = [true, false]

  list = [
    {task: 'Study HTML', done: false},
    {task: 'Study CSS', done: false},
    {task: 'Study JavaScript', done: false},
    {task: 'Study Angular', done: false}
  ]

  model = {task: 'Study HTML', done: false};

  show = false;
  watch = false;
  textList = 'Show List';
  textForm = 'Show Form';

  constructor() { }

  ngOnInit(): void {
  }

  toggleForm(){
    this.watch = !this.watch;
    if(this.watch){
      this.textForm = 'Hide Form';
    } else {
      this.textForm = 'Show Form';
    }
  }

  toggleList(){
    this.show = !this.show;
    if(this.show){
      this.textList = 'Hide List';
    } else {
      this.textList = 'Show List';
    }
  }

  onSubmit() {

  }

}