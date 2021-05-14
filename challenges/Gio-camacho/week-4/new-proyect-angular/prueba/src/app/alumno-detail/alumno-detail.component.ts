import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-alumno-detail',
  templateUrl: './alumno-detail.component.html',
  styleUrls: ['./alumno-detail.component.css']
})
export class AlumnoDetailComponent implements OnInit {
  @Input() alumno:any;
  constructor() { }

  ngOnInit(): void {
  }

}
