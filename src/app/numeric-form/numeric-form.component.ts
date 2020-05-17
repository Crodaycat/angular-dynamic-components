import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-numeric-form',
  templateUrl: './numeric-form.component.html',
  styleUrls: ['./numeric-form.component.css'],
})
export class NumericFormComponent implements OnInit {
  controlLabel: string;
  control: FormControl;
  controlHit: string;

  constructor() {}
  ngOnInit() {}
}
