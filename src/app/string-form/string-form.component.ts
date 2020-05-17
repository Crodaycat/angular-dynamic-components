import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-string-form',
  templateUrl: './string-form.component.html',
  styleUrls: ['./string-form.component.css'],
})
export class StringFormComponent implements OnInit {
  controlLabel: string;
  control: FormControl;
  controlHit: string;

  constructor() {}

  ngOnInit() {}
}
