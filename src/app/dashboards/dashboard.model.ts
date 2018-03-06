import {Utilites} from './../core/utilities';
import {FieldConfig} from './dashboard/dasboard-form/models/field-config.interface';

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
                	'type':'form',
                	'style': {
                        'gridtile': {
                            'cols': 4, rows: 8 //2
                        }
                    },
                    'config':
                        [
                            {
                                type: 'input',
                                label: 'star',
                                name: 'star',
                                placeholder: 'Star',
                                value: 4
                                // for input we need to spesific the input or not??? like numbe or text
                            },                            
                            {
                                type: 'input',
                                label: 'number',
                                name: 'number',
                                placeholder: 'Enter Number',
                                value: 4
                                // for input we need to spesific the input or not??? like numbe or text
                            },
                            {
                                type: 'select',
                                label: 'Location',
                                name: 'location',
                                options: ['City A', 'City B', ' City C', 'City D'],
                                placeholder: 'Select location',
                                value: 'City A'
                            },
                            {
                                type: 'select',
                                label: 'facility',
                                name: 'facility',
                                options: ['City A', 'City B', ' City C', 'City D'],
                                placeholder: 'Select location',
                                value: 'City A'
                            },
                            {
                                label: 'Save',
                                name: 'submit',
                                type: 'button',
                            },
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
		config?:FieldConfig[];
		}
	};
	maplocation:{
		name:string;
		point:any[]
	}




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