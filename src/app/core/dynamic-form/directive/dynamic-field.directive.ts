import { FormTextAreaComponent } from './../component/text-area/form-textarea.component';
import { FormSelectComponent } from './../component/select/form-select.component';
import { FormInputComponent } from './../component/input/form-input.component';
import { FormButtonComponent } from './../component/button/form-button.component';
import {
    ComponentFactoryResolver,
    ComponentRef,
    Directive, Type, Input, OnChanges, OnInit, ViewContainerRef, group
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FieldConfig } from '../model/field-config.interface';
import { Field } from '../model/field.interface';

const components = {
    button: FormButtonComponent,
    input: FormInputComponent,
    select: FormSelectComponent,
    textarea: FormTextAreaComponent,
};

@Directive({
    selector: '[dynamicField]',
})



export class DynamicFieldDirective implements OnInit {
    @Input() config: FieldConfig;
    @Input() group: FormGroup;

    component: ComponentRef<Field>;

    constructor(private resolver: ComponentFactoryResolver, private container: ViewContainerRef) {}

    ngOnInit() {
        // Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        // Add 'implements OnInit' to the class.

        const component = components[this.config.type];
        const factory = this.resolver.resolveComponentFactory<any>(component);
        this.component = this.container.createComponent(factory);
        this.component.instance.config = this.config;
        this.component.instance.group = this.group;

    }
}
