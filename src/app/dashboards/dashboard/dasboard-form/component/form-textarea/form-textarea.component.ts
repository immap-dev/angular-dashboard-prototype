import { Component, ViewContainerRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FieldConfig } from '../../models/field-config.interface';
import { Field } from '../../models/field.interface';

@Component({
    selector: 'form-text-area',
    styleUrls: ['form-texarea.component.css'],
    template: `
    <div [formGroup]="group">
        <mat-form-field class="full-width" >
            <textarea [formControlName] = "config.name" matInput  placeholder = "Kenapa Anda suka makanan itu? Jelaskan"></textarea>
        </mat-form-field>
    </div>
  `,
})

export class FormTextAreaComponent implements Field {
    config: FieldConfig;
    group: FormGroup;

}
