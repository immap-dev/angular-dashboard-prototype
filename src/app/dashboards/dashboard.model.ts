import {Utilites} from './../core/utilities';
import {FieldConfig} from './dashboard/dasboard-form/models/field-config.interface';
import { Validators } from '@angular/forms';

const sampleTitle = {
	'name': 'untitled-dashboard',
	'facility': 'none',
	'city' : 'none'
}
const sampleGridlist ={
	'cols': 4
}

const sampleWidget = [
				{

                    'type': 'title',
                    'style': {
                        'gridtile': {
                            'cols': 2, 'rows': 2
                        }
                    }
                },
                {
                    'type': 'stat',
                    'style': {
                        'gridtile': {
                            'cols': 2, 'rows': 2
                        }
                    }
                },
               {
                    type: 'form',
                    style: {
                        gridtile: {
                            cols: 4, rows: 10 //2
                        }
                    },
                    config:
                        [
                           
                            {
                                type: 'select',
                                label: 'Location',
                                name: 'location',
                                // options: ['City A', 'City B', ' City C', 'City D'],
                                placeholder: 'Select location',
                                validation: ['required'],
                                // validation: [Validators.required],                                
                                 value: '',
                                cascade: [
                                        {  location: 'city A',facility: 'SmallWidget1', food:"Apple"   },
                                        {  location: 'city A',facility: 'SmallWidget2', food:"Biscuit" },
                                        {  location: 'city A',facility: 'SmallWidget3', food:"Candy"   },
                                        {  location: 'city A',facility: 'SmallWidget4', food:"Eel"     },
                                        {  location: 'city F',facility: 'SmallWidget5', food:"Fries"   },
                                        {  location: 'city B',facility: 'SmallWidget1', food:"Gethuk"  },
                                        {  location: 'city B',facility: 'LargeWidget1', food:"Ham"     },
                                        {  location: 'city C',facility: 'LargeWidget2', food:"Ikan"    },
                                        {  location: 'city C',facility: 'LargeWidget3', food:"Jelly"   },
                                        {  location: 'city C',facility: 'LargeWidget4', food:"Lemon"   },
                                        {  location: 'city D',facility: 'LargeWidget5', food:"Meat"    },
                                        {  location: 'city E',facility: 'LargeWidget6', food:"Nectar"  },
                                        
                                      ]
                            },
                            {
                                type: 'select',
                                label: 'facility',
                                name: 'facility',
                                // options: ['City A', 'City B', ' City C', 'City D'],
                                placeholder: 'Select location',
                                 disabled: true,
                                  // validation: ['required'],
                                // validation: [Validators.required]
                                // value: 'City A',
                                cascade: [
                                        
                                      ]

                                
                            },
                            {
                                type: 'select',
                                label: 'food',
                                name: 'food',
                                // options: ['City A', 'City B', ' City C', 'City D'],
                                placeholder: 'Select location',
                                disabled: true,
                                 // validation: ['required'],
                                // validation: [Validators.required]
                                // value: 'City A',
                                cascade: [
                                        
                                      ]

                                
                            },
                            {
                                type: 'select',
                                label: 'place',
                                name: 'place',
                                options: ['City A', 'City B', ' City C', 'City D'],
                                placeholder: 'Select',
                                // validation: [Validators.required],
                                // data: [
                                //         { name: 'SmallWidget1', type: 'city A' },
                                //         { name: 'SmallWidget2', type: 'city A' },
                                //         { name: 'SmallWidget3', type: 'city A' },
                                //         { name: 'SmallWidget4', type: 'city A' },
                                //         { name: 'SmallWidget5', type: 'city F' },
                                //         { name: 'SmallWidget6', type: 'city B' },
                                //         { name: 'LargeWidget1', type: 'city B' },
                                //         { name: 'LargeWidget2', type: 'city C' },
                                //         { name: 'LargeWidget3', type: 'city C' },
                                //         { name: 'LargeWidget4', type: 'city C' },
                                //         { name: 'LargeWidget5', type: 'city D' },
                                //         { name: 'LargeWidget6', type: 'city E' },
                                //       ]
                                // value: 'City A'
                            },
                            {
                                type: 'input',
                                label: 'star',
                                name: 'star',                                
                                inputType: 'number',
                                placeholder: 'Star',
                                validation: ['required'],
                                 value: 0,
                                 // disabled: true
                                // for input we need to spesific the input or not??? like numbe or text
                            },                            
                            {
                                type: 'input',
                                label: 'number',
                                name: 'number',                                
                                inputType: 'number',
                                placeholder: 'Enter Number',
                                validation: ['required'],
                                 value: 0,
                                // for input we need to spesific the input or not??? like numbe or text
                            },
                            {
                                type: 'input',
                                label: 'people',
                                name: 'people',                                
                                inputType: 'number',
                                placeholder: 'Enter people',
                                validation: ['required'],
                                 value: 0,
                                // for input we need to spesific the input or not??? like numbe or text
                            },
                            {
                                label: 'Save',
                                name: 'submit',
                                type: 'button',
                            },
                        ],
                        dataraw: [
                                        {  location: 'city A',facility: 'SmallWidget1', food:"Apple"   , place:'City A', star:4, number:5,people:100},
                                        {  location: 'city A',facility: 'SmallWidget2', food:"Biscuit" , place:'City A', star:4, number:5,people:100},
                                        {  location: 'city A',facility: 'SmallWidget3', food:"Candy"   , place:'City A', star:4, number:5,people:100},
                                        {  location: 'city A',facility: 'SmallWidget4', food:"Eel"     , place:'City A', star:4, number:5,people:100},
                                        {  location: 'city F',facility: 'SmallWidget5', food:"Fries"   , place:'City A', star:4, number:5,people:100},
                                        {  location: 'city B',facility: 'SmallWidget1', food:"Gethuk"  , place:'City A', star:4, number:5,people:100},
                                        {  location: 'city C',facility: 'LargeWidget2', food:"Ikan"    , place:'City A', star:4, number:5,people:100},
                                        {  location: 'city C',facility: 'LargeWidget3', food:"Jelly"   , place:'City A', star:4, number:5,people:100},
                                        {  location: 'city C',facility: 'LargeWidget4', food:"Lemon"   , place:'City A', star:4, number:5,people:100},
                                        {  location: 'city D',facility: 'LargeWidget5', food:"Meat"    , place:'City A', star:4, number:5,people:100},
                                        {  location: 'city E',facility: 'LargeWidget6', food:"Nectar"  , place:'City A', star:4, number:5,people:100},
                                      ]
                },
                {
                    type: 'map',
                    style: {
                        gridtile: {
                            cols: 4, rows: 10
                        }
                    }
                },
];

const sampleMap ={
                'name': 'Seoul-jong',
                'point': [56.879966, -121.726909],
            }
const imageInit = '/assets/proto.png';
const rc ={
	cols: 4, rows:2
}

export class DashboardModel{
	id: number;
    uri:string;
    typepage: string;
    image:string;
    title:{
        name:string;
        facility: string;
        city:string;
    }
    locations:string[];
    case: number;
    gridlist:{
        cols:number;

    };
    widget: {
        type:string;
        style:{
            gridtile:{
                cols:number;
                rows:number;
            },        
        },
        config?:{
            disabled?: boolean ;
            label?: string ;
            name: string ;
            options?: string[] ;
            placeholder?: string;
            type: string;
            validation?: string[],
            // validation?: ValidatorFn[];
            // validation?: ValidatorFn[];
            value?: any;
            cols?: number;
            rows?: number;
            cascade?: {}[];
            field?: string;           
            inputType?:string;

        }[];
        list?:{}[];
        dataraw?:{}[];
        cascadeRef?:{}[];
    }[];
    maplocation:{
        name:string;
        point:any[]
    };




	constructor(dashboard){
		this.id = dashboard.id || Utilites.GenerateID();
		this.uri = dashboard.uri || 'untitled-dashboard';
		this.typepage = dashboard.typepage || 'default';
		this.image = dashboard.image || imageInit;
		this.title = dashboard.title || sampleTitle;
		this.case = dashboard.case || 0;
		this.gridlist = dashboard.gridlist || sampleGridlist;
		this.widget = dashboard.widget || sampleWidget;		
		this.maplocation = dashboard.maplocation || sampleMap;

	}


}