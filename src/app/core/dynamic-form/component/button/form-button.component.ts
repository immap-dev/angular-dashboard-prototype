import { FieldConfig } from './../../model/field-config.interface';
import { Field } from './../../model/field.interface';
import { FormGroup } from '@angular/forms';
import { Component, ViewContainerRef } from '@angular/core';

@Component({
    selector: 'form-button',
    styleUrls: ['form-button.component.css'],
    template :
    `<div class="dynamic-field form-button"
      [formGroup] = "group" >
        <button type="submit" mat-raised-button color="primary">
            {{ config.label }}
        </button>
    </div>`
})
export class FormButtonComponent implements Field {
    config: FieldConfig;
    group: FormGroup;
}
