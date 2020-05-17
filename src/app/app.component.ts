import {
  Component,
  ComponentFactoryResolver,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { FormArray, FormBuilder } from '@angular/forms';

import { NumericFormComponent } from './numeric-form/numeric-form.component';
import { StringFormComponent } from './string-form/string-form.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  @ViewChild('dynamicCompLoader', { static: true, read: ViewContainerRef })
  inputsLoader: ViewContainerRef;

  title = 'angular-dynamic-components';

  value = [
    {
      type: 1,
      label: 'String input label',
      hint: 'String input hint',
    },
    {
      type: 2,
      label: 'Numeric input label',
      hint: 'Numeric input hint',
    },
  ];

  forms: FormArray;

  constructor(
    private formBuilder: FormBuilder,
    private compFactResolver: ComponentFactoryResolver
  ) {
    this.forms = this.formBuilder.array([], []);
  }

  ngOnInit() {
    this.createForms();
  }

  createForms() {
    this.inputsLoader.clear();

    this.value.forEach((item) => {
      let factory;

      const control = this.formBuilder.control('', []);

      if (item.type === 1) {
        factory = this.compFactResolver.resolveComponentFactory(
          StringFormComponent
        );
      } else if (item.type === 2) {
        factory = this.compFactResolver.resolveComponentFactory(
          NumericFormComponent
        );
      }

      const componentRef = this.inputsLoader.createComponent<
        StringFormComponent | NumericFormComponent
      >(factory);

      componentRef.instance.controlLabel = item.label;
      componentRef.instance.control = control;
      componentRef.instance.controlHit = item.hint;

      this.forms.push(control);
    });
  }

}
