import { FieldConfig } from './model/field-config.interface';
import { Component, Input, OnInit,  Output, EventEmitter, OnChanges } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';


@Component({
    exportAs: 'dynamicForm',
    selector : 'dynamic-form',
    templateUrl: './dynamic-form.component.html',
    styleUrls: ['./dynamic-form.component.css']
})


export class DynamicFormComponent implements OnInit, OnChanges {

    @Input() config: FieldConfig[] = [];
    @Output() submitted: EventEmitter<any> = new EventEmitter<any>();

    form: FormGroup;


    get controls() { return this.config.filter(({type}) => type !== 'button'); }
    // get changes() { return this.form.valueChanges; }

    constructor(private fb: FormBuilder) {
          }


    ngOnInit() {
        // Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        // Add 'implements OnInit' to the class.
        this.form = this.createGroup();
    }

    ngOnChanges() {
        // Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
        // Add '${implements OnChanges}' to the class.

    }



    createGroup() {
        const group = this.fb.group({});
        this.controls.forEach( control => group.addControl(control.name, this.createControl(control)));
        return group;
    }

    createControl(config: FieldConfig) {
        const { disabled, validation, value } = config;
        return this.fb.control({disabled, value}, validation);
    }

    setValue(name: string, value: any) {
        this.form.controls[name].setValue(value, { emitEvent: true });
    }


}
