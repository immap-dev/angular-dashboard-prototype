import { FormSelectComponent } from './../form-select/form-select.component';
import { FormInputComponent } from './../form-input/form-input.component';
import { FormButtonComponent } from './../form-button/form-button.component';
import { FormTextAreaComponent } from './../form-textarea/form-textarea.component';
import { FormRadioButtonComponent } from './../form-radiobutton/form-radiobutton.component';
import {ComponentFactoryResolver,
     ComponentRef,
     Directive, Type, Input, OnChanges, OnInit, ViewContainerRef} from '@angular/core';
import {FormGroup} from '@angular/forms';
import { FieldConfig } from '../../models/field-config.interface';
import { Field } from '../../models/field.interface';



const components = {
    button: FormButtonComponent,
    input: FormInputComponent,
    select: FormSelectComponent,
    textarea: FormTextAreaComponent,
    radio: FormRadioButtonComponent

};


@Directive({
    selector: '[dynamicField]',
})

export class DynamicFieldDirective implements OnInit {
    @Input()
    config: FieldConfig;

    @Input()
    group: FormGroup;

    component: ComponentRef<Field>;

    constructor(private resolver: ComponentFactoryResolver,
        private container: ViewContainerRef) {}

    ngOnInit() {
        const component = components[this.config.type];
        const factory  = this.resolver.resolveComponentFactory<any>(component);
        this.component = this.container.createComponent(factory);
        this.component.instance.config = this.config;
        this.component.instance.group = this.group;
    }

}
