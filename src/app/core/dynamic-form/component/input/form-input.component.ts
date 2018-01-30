import { FieldConfig } from './../../model/field-config.interface';
import { Field } from './../../model/field.interface';
import { FormGroup } from '@angular/forms';
import { Component, ViewContainerRef } from '@angular/core';

@Component({
    selector: 'form-input',
    styleUrls: ['form-input.component.css'],
    template:
    `<div [formGroup]="group">
        <mat-form-field class="full-width">
          <input matInput placeholder="{{config.placeholder}}" [formControlName]="config.name" value="" >
        </mat-form-field>
    </div>`
})

export class FormInputComponent implements Field {
    config: FieldConfig;
    group: FormGroup;

}
