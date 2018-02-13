import { Component, ViewContainerRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FieldConfig } from '../../models/field-config.interface';
import { Field } from '../../models/field.interface';

@Component({
    selector: 'form-button',
    styleUrls: ['form-button.component.css'],
    template:
    `<div class="dynamic-field form-button"
      [formGroup] = "group" >
        <button type="submit" mat-raised-button color="primary">
            {{ config.label }}
        </button>
    </div>
  `,
})

export class FormButtonComponent implements Field {
    config: FieldConfig;
    group: FormGroup;
}
