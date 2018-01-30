
import { DynamicFormComponent } from './dynamic-form.component';
import { DynamicFieldDirective } from './directive/dynamic-field.directive';
import { FormButtonComponent } from './component/button/form-button.component';
import { FormTextAreaComponent } from './component/text-area/form-textarea.component';
import { FormSelectComponent } from './component/select/form-select.component';
import { FormInputComponent } from './component/input/form-input.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule} from '@angular/forms';
import {MaterialModule} from '../../shared/material.module';

@NgModule({
    declarations: [
        DynamicFormComponent,
        FormInputComponent,
        FormSelectComponent,
        FormTextAreaComponent,
        FormButtonComponent,
        DynamicFieldDirective
    ],
    imports: [ CommonModule, ReactiveFormsModule, MaterialModule],
    exports: [DynamicFormComponent],
    providers: [],
    entryComponents: [
        FormInputComponent,
        FormSelectComponent,
        FormTextAreaComponent,
        FormButtonComponent,
    ]
})
export class DynamicFormModule {}
