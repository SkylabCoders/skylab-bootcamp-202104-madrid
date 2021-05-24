import {
  Component, OnInit, EventEmitter, Input, Output,
} from '@angular/core';
import { User } from '../../models/user';

@Component({
  selector: 'app-funcionality',
  templateUrl: './funcionality.component.html',
  styleUrls: ['./funcionality.component.scss'],
})
export class FuncionalityComponent implements OnInit {
  @Input() user!: User;

  @Output() deleteChange = new EventEmitter();

  @Output() updateChange = new EventEmitter();
}
