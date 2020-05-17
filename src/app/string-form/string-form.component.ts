import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: "app-string-form",
  templateUrl: "./string-form.component.html",
  styleUrls: ["./string-form.component.css"],
})
export class StringFormComponent implements OnInit {
  controlLabel: string;
  control: FormControl;
  controlHit: string;

  constructor(private formBuilder: FormBuilder) {
    this.controlLabel = "Label de prueba";
    this.control = this.formBuilder.control("hola", []);
    this.controlHit = "Hint de prueba";
  }

  ngOnInit() {}
}
