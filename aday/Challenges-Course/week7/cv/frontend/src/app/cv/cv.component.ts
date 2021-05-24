import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import CvService from '../services/cv.service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
})
export class CvComponent implements OnInit {
  // cvData:any;

  constructor(private cvService: CvService) { }

  ngOnInit(): void {
    const obs$ = this.cvService.getAllCvs(environment.urlApi).subscribe((res:any) => {
      console.log(res);
    });
  }
}
