import {Utilites} from './../core/utilities';

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
			}
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