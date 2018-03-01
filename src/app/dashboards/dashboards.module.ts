import { NgModule} from '@angular/core';
import { CommonModule} from '@angular/common';
import { RouterModule,Routes} from '@angular/router';
import { DashboardsComponent} from './dashboards.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DasboardTitleComponent} from './dashboard/dasboard-title/dasboard-title.component';
import { DasboardStatComponent} from './dashboard/dasboard-stat/dasboard-stat.component';
import { DasboardMapComponent} from './dashboard/dasboard-map/dasboard-map.component';
import { DashboardTableComponent} from './dashboard/dashboard-table/dashboard-table.component';
import { DashboardListComponent} from './dashboard/dashboard-list/dashboard-list.component';
import { DasboardFormComponent} from './dashboard/dasboard-form/dasboard-form.component';
import { EditFormDialogComponent} from './dashboard/dasboard-form/edit-form-dialog.component';
import { DynamicFormModule} from '../core/dynamic-form/dynamic-form.module';
import { DashboardService, DashboardResolve} from './dashboards.service';
import { MaterialModule} from '../shared/material.module';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import * as L from 'leaflet';
// import { HeaderComponent } from '../header/header.component';
import {HeaderComponent} from '../shared/shared.module';



const routes: Routes =[
	{
		path: '', 
		component: DashboardsComponent, 
		resolve: { dashboards: DashboardService }
	},
	{ 	path: ':id/:uri', 
		component: DashboardComponent, 
		resolve: {dashboard: DashboardResolve}
	},
	{
		path      : '**',
        redirectTo: ''
	}	

]

@NgModule({
	declarations:[
		DashboardsComponent,
		DashboardComponent,
		DasboardTitleComponent,
		DasboardStatComponent,
		DasboardMapComponent,
		DashboardTableComponent,
		DashboardListComponent,
		DasboardFormComponent,
		EditFormDialogComponent,
		HeaderComponent,	
	],
	imports:[
		CommonModule,
		DynamicFormModule,
		RouterModule.forChild(routes),
		LeafletModule.forRoot(),
		MaterialModule,
		ReactiveFormsModule,
		FormsModule,
		
	],
	exports:[],
	providers:[DashboardService,DashboardResolve],
	entryComponents:[EditFormDialogComponent]


})


export class DashboardsModule{}