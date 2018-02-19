import { DashboardService, DashboardResolve  } from './dashboards/dashboards.service';
import { FakeDBService } from './fake-db/fake-db.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule} from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import 'hammerjs';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { DynamicFormModule} from './core/dynamic-form/dynamic-form.module';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { NavListComponent } from './core/nav-list/nav-list.component';
import { NavService } from './core/nav-list/nav.service';
import { AuthComponent } from './auth/auth.component';


const appRoutes: Routes = [
  { path: '',  redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path:'login', component: AuthComponent},
  { path: 'register', component: AuthComponent},
  { path:'dashboard', loadChildren:'./dashboards/dashboards.module#DashboardsModule'}, 
  // { path: '**', component: DashboardsComponent}
];

@NgModule({
  declarations: [
    AppComponent,    
    HeaderComponent,    
    HomeComponent,
    NavListComponent,
    AuthComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DynamicFormModule,
    HttpModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(FakeDBService), // , for a while using firebase   
    RouterModule.forRoot(appRoutes),
    SharedModule
  ],
  providers: [NavService],
  bootstrap: [AppComponent]
})
export class AppModule { }
