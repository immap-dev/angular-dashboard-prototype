import { FieldConfig } from './../../model/field-config.interface';
import { Field } from './../../model/field.interface';
import { FormGroup } from '@angular/forms';
import { Component, ViewContainerRef } from '@angular/core';

@Component({
    selector: 'form-select',
    styleUrls: ['form-select.component.css'],
    template:
    `<div
      [formGroup]="group">
      <mat-form-field class="full-width">
        <mat-select placeholder="{{ config.label }}" [formControlName]="config.name" >
          <mat-option *ngFor="let option of config.options" [value]="option">
            {{ option }}
          </mat-option>
        </mat-select>
      </mat-form-field>
    </div>`
})

export class FormSelectComponent implements Field {
    config: FieldConfig;
    group: FormGroup;
}
