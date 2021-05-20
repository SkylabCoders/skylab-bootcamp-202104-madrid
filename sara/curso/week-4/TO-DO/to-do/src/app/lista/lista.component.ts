import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})

export class ListaComponent implements OnInit {
  @Input() toDoList:any
  toDo = {task: null, who: null}
  wantsToAdd = false;
  newTask:any;
  newToDo:any;
  newWho:any;
  detail = false;
  redone:any

  constructor() { }

  ngOnInit(): void {
  }
  
  ngOnChanges(){
    this.newTask = {... this.toDo}
  }

  addMore(){
    this.wantsToAdd = !this.wantsToAdd
  }

  addNew(){
    this.toDo.task = this.newToDo;
    this.toDo.who = this.newWho;
    this.toDoList.push(this.toDo);
  }
}
