import { FieldConfig } from './model/field-config.interface';
import { Component, Input, OnInit,  Output, EventEmitter, OnChanges, ViewChild } from '@angular/core';

import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { MatTableDataSource,MatPaginator, MatSort} from '@angular/material';

@Component({
    exportAs: 'dynamicForm',
    selector : 'dynamic-form',
    templateUrl: './dynamic-form.component.html',
    styleUrls: ['./dynamic-form.component.css']
})


export class DynamicFormComponent implements OnInit, OnChanges {

    @Input() config: FieldConfig[] = [];
    // @Output() submitted: EventEmitter<any> = new EventEmitter<any>();
    @Output() submit: EventEmitter<any> = new EventEmitter<any>();
    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    displayedColumns = ['actions'] //['position', 'name', 'weight', 'symbol'];
    displayedColumnstwo =[];
    element=[];
    dataSource;     
    form: FormGroup;
    pageOptions = [1, 5, 10];


    get controls() { return this.config.filter(({type}) => type !== 'button'); }
    get changes() { return this.form.valueChanges; }
    get value() { return this.form.value; }
    get raw() { return this.form.getRawValue(); }
    

    constructor(private fb: FormBuilder) {
          }


    ngOnInit() {
        // Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        // Add 'implements OnInit' to the class.
        // this.form = this.createGroup();

        //testing form array    
        this.form = this.createGroup();
        console.log(this.form);
        console.log('controls',this.controls)
        this.controls.forEach(control => {this.displayedColumns.push(control.name)})
        this.controls.forEach(control => {this.displayedColumnstwo.push(control.name)})
         console.log('col[]',this.element);


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

    handleSubmit(event: Event) {
        event.preventDefault();
        event.stopPropagation();
        this.submit.emit(this.value);
        console.log(this.value);
        this.element.push(this.value);
        console.log('elemen',this.element);
        this.dataSource = new MatTableDataSource(this.element); 
        this.dataSource.paginator = this.paginator;


    }

    setValue(name: string, value: any) {
        this.form.controls[name].setValue(value, { emitEvent: true });
    }

    onDelete(index:number){
        this.element.splice(index,1);
        console.log('after elemen',this.element);
        this.dataSource = new MatTableDataSource(this.element); 
        console.log('delete',index);
    }


}
