import { ValidatorFn } from '@angular/forms';

export interface FieldConfig {
    disabled?: boolean ;
    label?: string ;
    name: string ;
    options?: string[] ;
    placeholder?: string;
    type: string;
    // validation?: ValidatorFn[];
    validation?: string[];
    value?: any;
    cols?: number;
    rows?: number;
    data?: {}[];
}
