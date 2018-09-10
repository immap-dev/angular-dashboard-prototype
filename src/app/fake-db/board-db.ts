import { FieldConfig} from '../dashboards/dashboard/dasboard-form/models/field-config.interface';
import { Validators,ValidatorFn } from '@angular/forms';

export class DashboardModel{
    id: number;
    uri:string;
    date?:Date;
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
    download?:{}[];
    widget: {
        type:string;
        style:{
            gridtile:{
                cols:number;
                rows:number;
            },
            display?:string,
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
            checked?:boolean;
            data?:{}[];

            


        }[];
        // list?:{}[];
        //coba
        childForm?:{
                name:string;
                hidden:boolean;                
                configChildform:{
                    disabled?: boolean ;
                    label?: string ;
                    name: string ;
                    options?: string[] ;
                    placeholder?: string;
                    type: string;
                    validation?: string[],                
                    value?: any;
                    cols?: number;
                    rows?: number;
                    cascade?: {}[];
                    field?: string;           
                    inputType?:string;}[]

        }[];
        //coba-end        
        dataraw?:{}[];
        cascadeRef?:{}[];
        list?:{
             
            search?:boolean;
            draft?:{}[];

        };
        table?:{
            tableConfig?:{}[];
            tableData?:{}[];
        }
    }[];
    maplocation:{
        name:string;
        point:any[]
    };
}


export class BoardFakeDB {
    public static boards:DashboardModel[] = [
        {
            'id': 1,
            'date': new Date('11/17/18'),
            'uri': 'operationxt',
            'typepage': 'dashboard',
            'image': 'https://cdn2.iconfinder.com/data/icons/perfect-flat-icons-2/512/Create_with_plus_mail_layer_add_vector_stock.png',
            'title': {
                'name': 'Operation X-Man',
                'facility': 'Army',
                'city': 'Etiopia'
            },
            'case': 1011,
            'locations': ['city A', 'city B', 'city C'],
            'maplocation': {
                'name': 'Seoul-jong',
                'point': [56.879966, -121.726909],
            },
            'gridlist': {
                cols: 4
            },
            download:[
                      {
                        icon:'group',
                        tooltip:'Organization',
                        action:'reset'
                      },
                      {
                        icon:'show_chart',
                        tooltip:'Chart',
                        action:'button'
                      },
                      {
                        icon:'attach_money',
                        tooltip:'Finance',
                        action:'button'
                      },
                      {
                        icon:'attach_file',
                        tooltip:'Download Beneficiaries CSV',
                        action:'button'
                      },
                      {
                        icon:'assignment',
                        tooltip:'Assignment',
                        action:'button'
                      },
                      {
                        icon:'assignment_late',
                        tooltip:'Assignment Late',
                        action:'button'
                      },
                      {
                        icon:'assignment_turned_in',
                        tooltip:'Assignment In',
                        action:'button'
                      },
                      {
                        icon:'picture_as_pdf',
                        tooltip:'Download PDF',
                        action:'button'
                      },
                    ],
             // download:true,
            'widget': [
                {
                    type: 'title',
                    style: {
                        gridtile: {
                            cols: 2, rows: 2
                        }
                    }
                },
                {
                    type: 'stat',
                    style: {
                        gridtile: {
                            cols: 2, rows: 2
                        }
                    }
                },
                {
                    type: 'form',
                    style: {
                        gridtile: {
                            cols: 4, rows: 7 //2
                        },
                    display:'table',
                     // display:'comma',
                    },
                    config:
                        [
                            // {
                            //     type: 'input',
                            //     label: 'star',
                            //     name: 'star',                                
                            //     inputType: 'number',
                            //     placeholder: 'Star',
                            //     'validation': ['required',],
                            //     value: 4,
                            //      // disabled: true
                            //     // for input we need to spesific the input or not??? like numbe or text
                            // },                            
                            // {
                            //     type: 'input',
                            //     label: 'number',
                            //     name: 'number',                                
                            //     inputType: 'number',
                            //     placeholder: 'Enter Number',
                            //     validation: ['required']
                            //     // value: 4
                            //     // for input we need to spesific the input or not??? like numbe or text
                            // },
                            // {
                            //     type: 'select',
                            //     label: 'facility',
                            //     name: 'facility',
                            //     // options: ['City A', 'City B', ' City C', 'City D'],
                            //     placeholder: 'Select location',
                            //     // validation: [Validators.required]
                            //     // value: 'City A',
                            //     data: [
                            //             {  location: 'city A',facility: 'SmallWidget1', food:"Apple"   },
                            //             {  location: 'city A',facility: 'SmallWidget2', food:"Biscuit" },
                            //             {  location: 'city A',facility: 'SmallWidget3', food:"Candy"   },
                            //             {  location: 'city A',facility: 'SmallWidget4', food:"Eel"     },
                            //             {  location: 'city F',facility: 'SmallWidget5', food:"Fries"   },
                            //             {  location: 'city B',facility: 'SmallWidget6', food:"Gethuk"  },
                            //             {  location: 'city B',facility: 'LargeWidget1', food:"Ham"     },
                            //             {  location: 'city C',facility: 'LargeWidget2', food:"Ikan"    },
                            //             {  location: 'city C',facility: 'LargeWidget3', food:"Jelly"   },
                            //             {  location: 'city C',facility: 'LargeWidget4', food:"Lemon"   },
                            //             {  location: 'city D',facility: 'LargeWidget5', food:"Meat"    },
                            //             {  location: 'city E',facility: 'LargeWidget6', food:"Nectar"  },
                            //             // {  facility: 'SmallWidget1',location: 'city A', food:"Apple"   },
                            //             // {  facility: 'SmallWidget2',location: 'city A', food:"Biscuit" },
                            //             // {  facility: 'SmallWidget3',location: 'city A', food:"Candy"   },
                            //             // {  facility: 'SmallWidget4',location: 'city A', food:"Eel"     },
                            //             // {  facility: 'SmallWidget5',location: 'city F', food:"Fries"   },
                            //             // {  facility: 'SmallWidget6',location: 'city B', food:"Gethuk"  },
                            //             // {  facility: 'LargeWidget1',location: 'city B', food:"Ham"     },
                            //             // {  facility: 'LargeWidget2',location: 'city C', food:"Ikan"    },
                            //             // {  facility: 'LargeWidget3',location: 'city C', food:"Jelly"   },
                            //             // {  facility: 'LargeWidget4',location: 'city C', food:"Lemon"   },
                            //             // {  facility: 'LargeWidget5',location: 'city D', food:"Meat"    },
                            //             // {  facility: 'LargeWidget6',location: 'city E', food:"Nectar"  },
                            //           ]

                                
                            // },
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
                                        // {  location: 'city A',facility: 'SmallWidget1', food:"Apple"   },
                                        // {  location: 'city A',facility: 'SmallWidget2', food:"Biscuit" },
                                        // {  location: 'city A',facility: 'SmallWidget3', food:"Candy"   },
                                        // {  location: 'city A',facility: 'SmallWidget4', food:"Eel"     },
                                        // {  location: 'city F',facility: 'SmallWidget5', food:"Fries"   },
                                        // {  location: 'city B',facility: 'SmallWidget1', food:"Gethuk"  },
                                        // {  location: 'city B',facility: 'LargeWidget1', food:"Ham"     },
                                        // {  location: 'city C',facility: 'LargeWidget2', food:"Ikan"    },
                                        // {  location: 'city C',facility: 'LargeWidget3', food:"Jelly"   },
                                        // {  location: 'city C',facility: 'LargeWidget4', food:"Lemon"   },
                                        // {  location: 'city D',facility: 'LargeWidget5', food:"Meat"    },
                                        // {  location: 'city E',facility: 'LargeWidget6', food:"Nectar"  },
                                        // {  facility: 'SmallWidget1',location: 'city A', food:"Apple"   },
                                        // {  facility: 'SmallWidget2',location: 'city A', food:"Biscuit" },
                                        // {  facility: 'SmallWidget3',location: 'city A', food:"Candy"   },
                                        // {  facility: 'SmallWidget4',location: 'city A', food:"Eel"     },
                                        // {  facility: 'SmallWidget5',location: 'city F', food:"Fries"   },
                                        // {  facility: 'SmallWidget6',location: 'city B', food:"Gethuk"  },
                                        // {  facility: 'LargeWidget1',location: 'city B', food:"Ham"     },
                                        // {  facility: 'LargeWidget2',location: 'city C', food:"Ikan"    },
                                        // {  facility: 'LargeWidget3',location: 'city C', food:"Jelly"   },
                                        // {  facility: 'LargeWidget4',location: 'city C', food:"Lemon"   },
                                        // {  facility: 'LargeWidget5',location: 'city D', food:"Meat"    },
                                        // {  facility: 'LargeWidget6',location: 'city E', food:"Nectar"  },
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
                                        // {  location: 'city A',facility: 'SmallWidget1', food:"Apple"   },
                                        // {  location: 'city A',facility: 'SmallWidget2', food:"Biscuit" },
                                        // {  location: 'city A',facility: 'SmallWidget3', food:"Candy"   },
                                        // {  location: 'city A',facility: 'SmallWidget4', food:"Eel"     },
                                        // {  location: 'city F',facility: 'SmallWidget5', food:"Fries"   },
                                        // {  location: 'city B',facility: 'SmallWidget1', food:"Gethuk"  },
                                        // {  location: 'city B',facility: 'LargeWidget1', food:"Ham"     },
                                        // {  location: 'city C',facility: 'LargeWidget2', food:"Ikan"    },
                                        // {  location: 'city C',facility: 'LargeWidget3', food:"Jelly"   },
                                        // {  location: 'city C',facility: 'LargeWidget4', food:"Lemon"   },
                                        // {  location: 'city D',facility: 'LargeWidget5', food:"Meat"    },
                                        // {  location: 'city E',facility: 'LargeWidget6', food:"Nectar"  },
                                        // {  facility: 'SmallWidget1',location: 'city A', food:"Apple"   },
                                        // {  facility: 'SmallWidget2',location: 'city A', food:"Biscuit" },
                                        // {  facility: 'SmallWidget3',location: 'city A', food:"Candy"   },
                                        // {  facility: 'SmallWidget4',location: 'city A', food:"Eel"     },
                                        // {  facility: 'SmallWidget5',location: 'city F', food:"Fries"   },
                                        // {  facility: 'SmallWidget6',location: 'city B', food:"Gethuk"  },
                                        // {  facility: 'LargeWidget1',location: 'city B', food:"Ham"     },
                                        // {  facility: 'LargeWidget2',location: 'city C', food:"Ikan"    },
                                        // {  facility: 'LargeWidget3',location: 'city C', food:"Jelly"   },
                                        // {  facility: 'LargeWidget4',location: 'city C', food:"Lemon"   },
                                        // {  facility: 'LargeWidget5',location: 'city D', food:"Meat"    },
                                        // {  facility: 'LargeWidget6',location: 'city E', food:"Nectar"  },
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
                                        // {  location: 'city A',facility: 'SmallWidget1', food:"Apple"   },
                                        // {  location: 'city A',facility: 'SmallWidget2', food:"Biscuit" },
                                        // {  location: 'city A',facility: 'SmallWidget3', food:"Candy"   },
                                        // {  location: 'city A',facility: 'SmallWidget4', food:"Eel"     },
                                        // {  location: 'city F',facility: 'SmallWidget5', food:"Fries"   },
                                        // {  location: 'city B',facility: 'SmallWidget1', food:"Gethuk"  },
                                        // {  location: 'city B',facility: 'LargeWidget1', food:"Ham"     },
                                        // {  location: 'city C',facility: 'LargeWidget2', food:"Ikan"    },
                                        // {  location: 'city C',facility: 'LargeWidget3', food:"Jelly"   },
                                        // {  location: 'city C',facility: 'LargeWidget4', food:"Lemon"   },
                                        // {  location: 'city D',facility: 'LargeWidget5', food:"Meat"    },
                                        // {  location: 'city E',facility: 'LargeWidget6', food:"Nectar"  },
                                        // {  facility: 'SmallWidget1',location: 'city A', food:"Apple"   },
                                        // {  facility: 'SmallWidget2',location: 'city A', food:"Biscuit" },
                                        // {  facility: 'SmallWidget3',location: 'city A', food:"Candy"   },
                                        // {  facility: 'SmallWidget4',location: 'city A', food:"Eel"     },
                                        // {  facility: 'SmallWidget5',location: 'city F', food:"Fries"   },
                                        // {  facility: 'SmallWidget6',location: 'city B', food:"Gethuk"  },
                                        // {  facility: 'LargeWidget1',location: 'city B', food:"Ham"     },
                                        // {  facility: 'LargeWidget2',location: 'city C', food:"Ikan"    },
                                        // {  facility: 'LargeWidget3',location: 'city C', food:"Jelly"   },
                                        // {  facility: 'LargeWidget4',location: 'city C', food:"Lemon"   },
                                        // {  facility: 'LargeWidget5',location: 'city D', food:"Meat"    },
                                        // {  facility: 'LargeWidget6',location: 'city E', food:"Nectar"  },
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
                                type:'checkbox',
                                label:'tes',
                                name:'tes',
                                // value:'tes',
                                checked: false,
                            },
                            {
                                type:'multi-checkbox',
                                label:'tes',
                                name:'tesmulti',
                                // value:'tes',
                                checked: false,
                                validation:['required'],
                                data:[
                                {name:'Orgnisasi A'},
                                {name:'Orgnisasi B'},
                                {name:'Orgnisasi C'},
                                {name:'Orgnisasi D'},
                                ]
                            },
                            {
                                type:'multi-checkbox',
                                label:'tes',
                                name:'tesmulti2',
                                // value:'tes',
                                checked: false,
                                data:[
                                {name:'Orgnisasi E'},
                                {name:'Orgnisasi F'},
                                {name:'Orgnisasi G'},
                                {name:'Orgnisasi H'},
                                ]
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
                                      ],
                        cascadeRef: [
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
                                        {  location: 'city E',facility: 'LargeWidget6', food:"Nectar"  },]
                },
                {
                    type: 'map',
                    style: {
                        gridtile: {
                            cols: 4, rows: 7
                        }
                    }
                },
                {
                    type: 'table',
                    style: {
                        gridtile: {
                            cols: 4, rows: 6
                        },
                    },
                    table:{
                        tableConfig:[
                          {name :'cluster', type:'text'},
                          {name :'organization', type:'textLink'},
                          {name :'user', type:'text'},
                          {name :'contact', type:'text'},
                          {name :'title', type:'textLink'},
                          {name :'goto', type:'iconLink'},
                          {name :'status', type:'icon'},
                        ],
                        tableData:[
                          { 
                           cluster:{val:'Health1'}, 
                           organization: {val:'Hydrogen',link:'https://material.angular.io/components/icon/api'},
                           user: {val:'HealthTPO'},
                           contact: {val:'Health@health.com'},
                           title: {val:'Hydrogen one of element in this world',link:'https://material.angular.io/components/icon/api'}, 
                           goto:{link: 'https://material.angular.io/components/icon/api',icon:'launch'}, 
                           status: {color:'warn',icon:'query_builder',type:'icon'}
                          },
                          {
                            cluster:{val:'Health2'}, 
                           organization: {val:'Hydrogen',link:'https://material.angular.io/components/icon/api'},
                           user: {val:'HealthTPO'},
                           contact: {val:'Health@health.com'},
                           title: {val:'Hydrogen one of element in this world',link:'https://material.angular.io/components/icon/api'}, 
                           goto:{link: 'https://material.angular.io/components/icon/api',icon:'launch'}, 
                           status: {color:'accent',icon:'query_builder',type:'icon'}
                          },
                          { 
                           cluster:{val:'Health3'}, 
                           organization: {val:'Hydrogen',link:'https://material.angular.io/components/icon/api'},
                           user: {val:'HealthTPO'},
                           contact: {val:'Health@health.com'},
                           title: {val:'Hydrogen one of element in this world',link:'https://material.angular.io/components/icon/api'}, 
                           goto:{link: 'https://material.angular.io/components/icon/api',icon:'launch'}, 
                           status: {color:'primary',icon:'query_builder',type:'icon'}},
                          { 
                           cluster:{val:'Health4'}, 
                           organization: {val:'Hydrogen',link:'https://material.angular.io/components/icon/api'},
                           user: {val:'HealthTPO'},
                           contact: {val:'Health@health.com'},
                           title: {val:'Hydrogen one of element in this world',link:'https://material.angular.io/components/icon/api'}, 
                           goto:{link: 'https://material.angular.io/components/icon/api',icon:'launch'}, 
                           status: {color:'primary',icon:'query_builder',type:'icon'}
                          },
                          { 
                           cluster:{val:'Health5'}, 
                           organization: {val:'Hydrogen',link:'https://material.angular.io/components/icon/api'},
                           user: {val:'HealthTPO'},
                           contact: {val:'Health@health.com'},
                           title: {val:'Hydrogen one of element in this world',link:'https://material.angular.io/components/icon/api'}, 
                           goto:{link: 'https://material.angular.io/components/icon/api',icon:'launch'}, 
                           status: {color:'primary',icon:'query_builder',type:'icon'}
                          },
                          { 
                            cluster: {val:'Health6'}, 
                            organization: {val:'Hydrogen',link:'https://material.angular.io/components/icon/api'},
                            user: {val:'HealthTPO'},
                            contact: {val:'Health@health.com'},
                            title: {val:'Hydrogen one of element in this world',link:'https://material.angular.io/components/icon/apk'}, 
                            goto:{link: 'https://material.angular.io/components/icon/api',icon:'launch'}, 
                            status: {color:'primary',icon:'query_builder',type:'icon'}
                          },
                          {
                           cluster:{val:'Health7'}, 
                           organization: {val:'Hydrogen',link:'https://material.angular.io/components/icon/api'},
                           user: {val:'HealthTPO'},
                           contact: {val:'Health@health.com'},
                           title: {val:'Hydrogen one of element in this world',link:'https://material.angular.io/components/icon/api'}, 
                           goto:{link: 'https://material.angular.io/components/icon/api',icon:'launch'}, 
                           status: {color:'primary',icon:'query_builder',type:'icon'}
                          },
                          {
                           cluster:{val:'Health8'}, 
                           organization: {val:'Hydrogen',link:'https://material.angular.io/components/icon/api'},
                           user: {val:'HealthTPO'},
                           contact: {val:'Health@health.com'},
                           title: {val:'Hydrogen one of element in this world',link:'https://material.angular.io/components/icon/api'}, 
                           goto:{link: 'https://material.angular.io/components/icon/api',icon:'launch'}, 
                           status: {color:'primary',icon:'query_builder',type:'icon'}
                          },
                          {
                           cluster:{val:'Health9'}, 
                           organization: {val:'Hydrogen',link:'https://material.angular.io/components/icon/api'},
                           user: {val:'HealthTPO'},
                           contact: {val:'Health@health.com'},
                           title: {val:'Hydrogen one of element in this world',link:'https://material.angular.io/components/icon/api'}, 
                           goto:{link: 'https://material.angular.io/components/icon/api',icon:'launch'}, 
                           status: {color:'primary',icon:'query_builder',type:'icon'}
                          },
                          {
                           cluster:{val:'Health10'}, 
                           organization: {val:'Hydrogen',link:'https://material.angular.io/components/icon/api'},
                           user: {val:'HealthTPO'},
                           contact: {val:'Health@health.com'},
                           title: {val:'Hydrogen one of element in this world Hydrogen one of element in this world Hydrogen one of element in this world Hydrogen',link:'https://material.angular.io/components/icon/api'}, 
                           goto:{link: 'https://material.angular.io/components/icon/api',icon:'launch'}, 
                           status: {color:'primary',icon:'query_builder',type:'icon'}
                          },

                        ]
                    }
                    
                },
                {
                    type: 'list',
                    style: {
                        gridtile: {
                            cols: 4, rows: 2
                        },
                    },
                    // list: [
                    //     {
                    //         name: 'Photos1',
                    //         text: 'This establishes the main-axis, thus defining the direction flex items are placed in the flex container', 
                    //         updated: new Date(),
                    //         link: 'dashboard'   
                    //         // updated: new Date('1/1/16'),
                    //     },
                    //     {
                    //         name: 'Recipes1',
                    //         text: 'This establishes the main-axis, This establishes the main-axisThis establishes theisThis establishes his establishes the main-axisThis establishes the main-axisThis establishes the flex items are placed in the flex container. By default, flex items will all try to fit onto one line. You can change that and allow the items to wrap as needed with this property',
                    //         updated: new Date('1/17/16'),
                    //         link: 'home'
                    //     },
                    //     {
                    //         name: 'Work1',
                    //         text: 'This establishes the main-axis, thus defining the direction flex items are placed in the flex container. By default, flex items will all try to fit onto one line. You can change that and allow the items to wrap as needed with this property',
                    //         updated: new Date(),//('1/28/16'),
                    //         link: 'home'
                    //     }
                    // ],

                    list:{
                        search:true,
                        draft:[
                            {
                                name: 'Photos1',
                                text: 'This establishes the main-axis, thus defining the direction flex items are placed in the flex container', 
                                updated: new Date(),
                                link: 'dashboard'   
                                // updated: new Date('1/1/16'),
                            },
                            {
                                name: 'Recipes1',
                                text: 'This establishes the main-axis, This establishes the main-axisThis establishes theisThis establishes his establishes the main-axisThis establishes the main-axisThis establishes the flex items are placed in the flex container. By default, flex items will all try to fit onto one line. You can change that and allow the items to wrap as needed with this property',
                                updated: new Date('1/17/16'),
                                link: 'home'
                            },
                            {
                                name: 'Work1',
                                text: 'This establishes the main-axis, thus defining the direction flex items are placed in the flex container. By default, flex items will all try to fit onto one line. You can change that and allow the items to wrap as needed with this property',
                                updated: new Date(),//('1/28/16'),
                                link: 'home'
                            }
                        ]

                    }

                }

            ]

            // coba: [
            //     { "location": "City A", "facility": "hospital", "number": 4 }
            // ]

        },
        {
            'id': 2,
            'date': new Date('11/18/18'),
            'uri': 'operationy',
            'typepage': 'dashboard',
            'image': '/assets/hush-naidoo-382152.jpg',
            'title': {
                'name': 'Operation Y',
                'facility': 'Army2',
                'city': 'Etiopia2'
            },
            'case': 102,
            'locations': ['city E', 'city F', 'city G'],
            'maplocation': {
                'name': 'Seoul2',
                'point': [56.879966, -121.726909],
            },
            'gridlist': {
                cols: 4
            },
            'widget': [
                {
                    type: 'title',
                    style: {
                        gridtile: {
                            cols: 2, rows: 2
                        }
                    }
                },
                {
                    type: 'stat',
                    style: {
                        gridtile: {
                            cols: 2, rows: 2
                        }
                    }
                },               
                {
                    type: 'form',
                    style: {
                        gridtile: {
                            cols: 4, rows: 4
                        },
                        display:'comma',
                    },
                    config:
                        [
                            
                            {
                                type: 'select',
                                label: 'Location',
                                name: 'location',
                                // options: ['City A', 'City B', ' City C', 'City D'],
                                placeholder: 'Select location',
                                
                                // validation: [Validators.required],                                
                                // value: 'City A',
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
                                
                            },
                            {
                                type: 'input',
                                label: 'star',
                                name: 'star',                                
                                inputType: 'number',
                                placeholder: 'Star',
                                'validation': ['required',],
                                value: 4,
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
                                value: 4
                                // for input we need to spesific the input or not??? like numbe or text
                            },
                            {
                                type: 'date',
                                label: 'Start Date',
                                name: 'start',                    
                               
                                placeholder: 'Start Date *',
                                validation: ['required']
                                // value: 4
                                // for input we need to spesific the input or not??? like numbe or text
                            },
                            {
                                label: 'Save',
                                name: 'submit',
                                type: 'button',
                            },
                        ],
                        childForm:[
                                {
                                    name:'beneficiary',
                                    hidden:true,                                   
                                    configChildform:[
                                        {
                                            type: 'input',
                                            label: 'people',
                                            name: 'people',                                
                                            inputType: 'text',
                                            placeholder: 'Enter people',
                                            validation: ['required'],
                                             value: 0,
                                        },
                                    ]
                                },
                                // {
                                //     name:'beneficiary2',
                                //     hidden:true,    
                                //     configChildform:[
                                //         {
                                //             type: 'input',
                                //             label: 'people',
                                //             name: 'people',                                
                                //             inputType: 'text',
                                //             placeholder: 'Enter people',
                                //             validation: ['required'],
                                //              value: 0,
                                //         },
                                //         {
                                //             type: 'input',
                                //             label: 'people2',
                                //             name: 'people2',                                
                                //             inputType: 'number',
                                //             placeholder: 'Enter people',
                                //             validation: ['required'],
                                //              value: 0,
                                //         },
                                //     ]
                                // }
                        ],
                        dataraw: [
                                        {  location: 'city A',facility: 'SmallWidget1', food:"Apple"   , place:'City A', star:4, number:5, start: new Date()},
                                        {  location: 'city A',facility: 'SmallWidget2', food:"Biscuit" , place:'City A', star:4, number:5},
                                        {  location: 'city A',facility: 'SmallWidget3', food:"Candy"   , place:'City A', star:4, number:5},
                                        {  location: 'city A',facility: 'SmallWidget4', food:"Eel"     , place:'City A', star:4, number:5},
                                        {  location: 'city F',facility: 'SmallWidget5', food:"Fries"   , place:'City A', star:4, number:5},
                                        {  location: 'city B',facility: 'SmallWidget1', food:"Gethuk"  , place:'City A', star:4, number:5},
                                        {  location: 'city C',facility: 'LargeWidget2', food:"Ikan"    , place:'City A', star:4, number:5},
                                        {  location: 'city C',facility: 'LargeWidget3', food:"Jelly"   , place:'City A', star:4, number:5},
                                        {  location: 'city C',facility: 'LargeWidget4', food:"Lemon"   , place:'City A', star:4, number:5},
                                        {  location: 'city D',facility: 'LargeWidget5', food:"Meat"    , place:'City A', star:4, number:5},
                                        {  location: 'city E',facility: 'LargeWidget6', food:"Nectar"  , place:'City A', star:4, number:5},
                                      ],
                        cascadeRef: [
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
                                        {  location: 'city E',facility: 'LargeWidget6', food:"Nectar"  },]
                },
                {
                    type: 'map',
                    style: {
                        gridtile: {
                            cols: 4, rows: 10
                        }
                    }
                },
                {
                    type: 'table',
                    style: {
                        gridtile: {
                            cols: 4, rows: 4
                        },
                    },
                    table:{
                        tableConfig:[
                          {name :'cluster', type:'text'},
                          {name :'organization', type:'textLink'},
                          {name :'user', type:'text'},
                          {name :'contact', type:'text'},
                          {name :'title', type:'textLink'},
                          {name :'goto', type:'iconLink'},
                          {name :'status', type:'icon'},
                        ],
                        tableData:[
                          { 
                           cluster:{val:'Health1'}, 
                           organization: {val:'Hydrogen',link:'https://material.angular.io/components/icon/api'},
                           user: {val:'HealthTPO'},
                           contact: {val:'Health@health.com'},
                           title: {val:'Hydrogen one of element in this world',link:'https://material.angular.io/components/icon/api'}, 
                           goto:{link: 'https://material.angular.io/components/icon/api',icon:'launch'}, 
                           status: {color:'warn',icon:'query_builder',type:'icon'}
                          },
                          {
                            cluster:{val:'Health2'}, 
                           organization: {val:'Hydrogen',link:'https://material.angular.io/components/icon/api'},
                           user: {val:'HealthTPO'},
                           contact: {val:'Health@health.com'},
                           title: {val:'Hydrogen one of element in this world',link:'https://material.angular.io/components/icon/api'}, 
                           goto:{link: 'https://material.angular.io/components/icon/api',icon:'launch'}, 
                           status: {color:'accent',icon:'query_builder',type:'icon'}
                          },
                          { 
                           cluster:{val:'Health3'}, 
                           organization: {val:'Hydrogen',link:'https://material.angular.io/components/icon/api'},
                           user: {val:'HealthTPO'},
                           contact: {val:'Health@health.com'},
                           title: {val:'Hydrogen one of element in this world',link:'https://material.angular.io/components/icon/api'}, 
                           goto:{link: 'https://material.angular.io/components/icon/api',icon:'launch'}, 
                           status: {color:'primary',icon:'query_builder',type:'icon'}},
                          { 
                           cluster:{val:'Health4'}, 
                           organization: {val:'Hydrogen',link:'https://material.angular.io/components/icon/api'},
                           user: {val:'HealthTPO'},
                           contact: {val:'Health@health.com'},
                           title: {val:'Hydrogen one of element in this world',link:'https://material.angular.io/components/icon/api'}, 
                           goto:{link: 'https://material.angular.io/components/icon/api',icon:'launch'}, 
                           status: {color:'primary',icon:'query_builder',type:'icon'}
                          },
                          { 
                           cluster:{val:'Health5'}, 
                           organization: {val:'Hydrogen',link:'https://material.angular.io/components/icon/api'},
                           user: {val:'HealthTPO'},
                           contact: {val:'Health@health.com'},
                           title: {val:'Hydrogen one of element in this world',link:'https://material.angular.io/components/icon/api'}, 
                           goto:{link: 'https://material.angular.io/components/icon/api',icon:'launch'}, 
                           status: {color:'primary',icon:'query_builder',type:'icon'}
                          },
                          { 
                            cluster: {val:'Health6'}, 
                            organization: {val:'Hydrogen',link:'https://material.angular.io/components/icon/api'},
                            user: {val:'HealthTPO'},
                            contact: {val:'Health@health.com'},
                            title: {val:'Hydrogen one of element in this world',link:'https://material.angular.io/components/icon/apk'}, 
                            goto:{link: 'https://material.angular.io/components/icon/api',icon:'launch'}, 
                            status: {color:'primary',icon:'query_builder',type:'icon'}
                          },
                          {
                           cluster:{val:'Health7'}, 
                           organization: {val:'Hydrogen',link:'https://material.angular.io/components/icon/api'},
                           user: {val:'HealthTPO'},
                           contact: {val:'Health@health.com'},
                           title: {val:'Hydrogen one of element in this world',link:'https://material.angular.io/components/icon/api'}, 
                           goto:{link: 'https://material.angular.io/components/icon/api',icon:'launch'}, 
                           status: {color:'primary',icon:'query_builder',type:'icon'}
                          },
                          {
                           cluster:{val:'Health8'}, 
                           organization: {val:'Hydrogen',link:'https://material.angular.io/components/icon/api'},
                           user: {val:'HealthTPO'},
                           contact: {val:'Health@health.com'},
                           title: {val:'Hydrogen one of element in this world',link:'https://material.angular.io/components/icon/api'}, 
                           goto:{link: 'https://material.angular.io/components/icon/api',icon:'launch'}, 
                           status: {color:'primary',icon:'query_builder',type:'icon'}
                          },
                          {
                           cluster:{val:'Health9'}, 
                           organization: {val:'Hydrogen',link:'https://material.angular.io/components/icon/api'},
                           user: {val:'HealthTPO'},
                           contact: {val:'Health@health.com'},
                           title: {val:'Hydrogen one of element in this world',link:'https://material.angular.io/components/icon/api'}, 
                           goto:{link: 'https://material.angular.io/components/icon/api',icon:'launch'}, 
                           status: {color:'primary',icon:'query_builder',type:'icon'}
                          },
                          {
                           cluster:{val:'Health10'}, 
                           organization: {val:'Hydrogen',link:'https://material.angular.io/components/icon/api'},
                           user: {val:'HealthTPO'},
                           contact: {val:'Health@health.com'},
                           title: {val:'Hydrogen one of element in this world Hydrogen one of element in this world Hydrogen one of element in this world Hydrogen',link:'https://material.angular.io/components/icon/api'}, 
                           goto:{link: 'https://material.angular.io/components/icon/api',icon:'launch'}, 
                           status: {color:'primary',icon:'query_builder',type:'icon'}
                          },

                        ]
                    }
                    // header: ['position', 'name', 'weight', 'symbol', 'quantity'],
                    // datatable: [
                    //     { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', quantity: 10 },
                    //     { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He', quantity: 10 },
                    //     { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li', quantity: 10 },
                    //     { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be', quantity: 10 },
                    //     { position: 5, name: 'Boron', weight: 10.811, symbol: 'B', quantity: 10 },
                    //     { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C', quantity: 10 },
                    //     { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N', quantity: 10 },
                    //     { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O', quantity: 10 },
                    //     { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F', quantity: 10 },
                    //     { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne', quantity: 10 },
                    //     { position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na' },
                    //     { position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg' },
                    //     { position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al' },
                    //     { position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si' },
                    //     { position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P' },
                    //     { position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S' },
                    //     { position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl' },
                    //     { position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar' },
                    //     { position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K' },
                    //     { position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca' },
                    // ]
                },
                {
                    type: 'list',
                    style: {
                        gridtile: {
                            cols: 4, rows: 4
                        },
                    },
                    // list: [
                    //     {
                    //         name: 'Photos1',
                    //         updated: new Date('1/1/16'),

                    //     },
                    //     {
                    //         name: 'Recipes1',
                    //         updated: new Date('1/17/16'),
                    //     },
                    //     {
                    //         name: 'Work1',
                    //         updated: new Date('1/28/16'),
                    //     }
                    // ]
                    list:{
                        search:true,
                        draft:[
                            {
                                name: 'Photos1',
                                text: 'This establishes the main-axis, thus defining the direction flex items are placed in the flex container', 
                                updated: new Date(),
                                link: 'dashboard'   
                                // updated: new Date('1/1/16'),
                            },
                            {
                                name: 'Recipes1',
                                text: 'This establishes the main-axis, This establishes the main-axisThis establishes theisThis establishes his establishes the main-axisThis establishes the main-axisThis establishes the flex items are placed in the flex container. By default, flex items will all try to fit onto one line. You can change that and allow the items to wrap as needed with this property',
                                updated: new Date('1/17/16'),
                                link: 'home'
                            },
                            {
                                name: 'Work1',
                                text: 'This establishes the main-axis, thus defining the direction flex items are placed in the flex container. By default, flex items will all try to fit onto one line. You can change that and allow the items to wrap as needed with this property',
                                updated: new Date(),//('1/28/16'),
                                link: 'home'
                            }
                        ]

                    }
                }

            ]
        },
    ];

}
