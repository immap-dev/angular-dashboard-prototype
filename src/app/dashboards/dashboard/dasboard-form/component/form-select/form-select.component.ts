import { Component, ViewContainerRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FieldConfig } from '../../models/field-config.interface';
import { Field } from '../../models/field.interface';

@Component({
    selector: 'form-select',
    styleUrls: ['form-select.component.css'],
    template: `
    <div
      [formGroup]="group">
      <mat-form-field class="full-width">
        <mat-select placeholder="{{ config.label }}" [formControlName]="config.name" >
          <mat-option *ngFor="let option of config.options" [value]="option">
            {{ option }}
          </mat-option>
        </mat-select>
      </mat-form-field>
    </div>
  `,
})

export class FormSelectComponent implements Field {
    config: FieldConfig;
    group: FormGroup;

//     <select[formControlName]="config.name" >
//   <option value="" > {{ config.placeholder }}</option>
//     < option * ngFor="let option of config.options" >
//       {{ option }}
// </option>
//   < /select>
}
