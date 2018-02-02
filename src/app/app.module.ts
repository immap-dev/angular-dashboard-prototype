import { DashboardService } from './dashboards/dashboards.service';
import { FakeDBService } from './fake-db/fake-db.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule} from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import 'hammerjs';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import * as L from 'leaflet';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import {DynamicFormModule} from './core/dynamic-form/dynamic-form.module';
import { DashboardsComponent } from './dashboards/dashboards.component';
import { DashboardComponent } from './dashboards/dashboard/dashboard.component';
import { DasboardTitleComponent } from './dashboards/dashboard/dasboard-title/dasboard-title.component';
import { DasboardStatComponent } from './dashboards/dashboard/dasboard-stat/dasboard-stat.component';
import { DasboardFormComponent } from './dashboards/dashboard/dasboard-form/dasboard-form.component';
import { DasboardMapComponent } from './dashboards/dashboard/dasboard-map/dasboard-map.component';
import { HeaderComponent } from './header/header.component';
import { DashboardTableComponent } from './dashboards/dashboard/dashboard-table/dashboard-table.component';
import { DashboardListComponent } from './dashboards/dashboard/dashboard-list/dashboard-list.component';



const appRoutes: Routes = [
  {path: '', component: DashboardsComponent},
  {path: 'dashboard', component: DashboardComponent},
  { path: 'dashboard/:id/:uri', component: DashboardComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    DashboardsComponent,
    DashboardComponent,
    DasboardTitleComponent,
    DasboardStatComponent,
    DasboardFormComponent,
    DasboardMapComponent,
    HeaderComponent,
    DashboardTableComponent,
    DashboardListComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DynamicFormModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(FakeDBService),
    LeafletModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    SharedModule
  ],
  providers: [DashboardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
