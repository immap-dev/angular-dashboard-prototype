import { FieldConfig } from './../../model/field-config.interface';
import { Field } from './../../model/field.interface';
import { FormGroup } from '@angular/forms';
import { Component, ViewContainerRef } from '@angular/core';

@Component({
    selector: 'form-text-area',
    styleUrls: ['form-textarea.component.css'],
    template:
    `<div [formGroup]="group">
        <mat-form-field class="full-width" >
            <textarea [formControlName] = "config.name" matInput  placeholder = "Kenapa Anda suka makanan itu? Jelaskan"></textarea>
        </mat-form-field>
    </div>`
})


export class FormTextAreaComponent implements Field {
    config: FieldConfig;
    group: FormGroup;
}
