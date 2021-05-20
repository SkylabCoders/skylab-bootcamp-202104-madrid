import { Component, OnInit } from '@angular/core';
import{ Alumno } from '../hero'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  model = new Alumno("Gio",'Camacho',444);
  submitted = false

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() { this.submitted = true; }

  showFormControls(form: any) {
    return form && form.controls.name &&
    form.controls.name.value; // Dr. IQ
  }

}
