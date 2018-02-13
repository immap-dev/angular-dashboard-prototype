import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Observable} from 'rxjs/Observable';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';



@Injectable()
export class DashboardService implements Resolve<any> {
    dummy = [
        {
            'id': 1,
            'uri': 'operationx',
            'image': 'https://cdn2.iconfinder.com/data/icons/perfect-flat-icons-2/512/Create_with_plus_mail_layer_add_vector_stock.png',
            'title': {
                'name': 'Operation X',
                'facility': 'Army',
                'city': 'Etiopia'
            },
            'case': 101,
            'locations': ['city A', 'city B', 'city C'],
            'maplocation': {
                'name': 'Seoul',
                'point': [56.879966, -121.726909],
            }
        },
        {
            'id': 2,
            'uri': 'operationy',
            'image': 'https://cdn2.iconfinder.com/data/icons/perfect-flat-icons-2/512/Create_with_plus_mail_layer_add_vector_stock.png',
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
            }
        }
    ];

    routeParams: any;
    dashboards: any[];
    dashboard: any;

    onDashboardsChange: BehaviorSubject<any> = new BehaviorSubject([]);
    onDashboardChanged: BehaviorSubject<any> = new BehaviorSubject([]);
    onTableChanged: BehaviorSubject<any> = new BehaviorSubject([]);
    

    // constructor(private http: Http) { }
    constructor(private http: HttpClient) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {

        this.routeParams = route.params;
        return new Promise((resolve, reject) => {
            Promise.all([
                this.getDashboards()
            ]).then(
                () => {
                    resolve();
                },
                reject
            );
        });

    }

    // using in memory web api

    getDashboards(): Promise <any> {
        return new Promise((resolve, reject) => {
            this.http.get('api/scrumboard-boards')
                .subscribe((response: any) => {
                    this.dashboards = response;
                    this.onDashboardsChange.next(this.dashboards);
                    resolve(this.dashboards);
                }, reject);
        });
    }

    getDashboard(id): Promise<any> {
        return new Promise((resolve, reject) => {
            this.http.get('api/scrumboard-boards/' + id)
                .subscribe((response: any) => {
                    this.dashboard = response;
                    this.onDashboardChanged.next(this.dashboard);
                    resolve(this.dashboard);
                }, reject);
        });
    }

    // using fire base

    // getDashboards(): Promise<any> {
    //     return new Promise((resolve, reject) => {
    //         this.http.get('https://dashboard-1e975.firebaseio.com/.json')
    //             .subscribe((response: any) => {
    //                 console.log('firebase');
    //                 this.dashboards = response;
    //                 this.onDashboardsChange.next(this.dashboards);
    //                 resolve(this.dashboards);
    //             }, reject);
    //     });
    // }

    // getDashboard(id): Promise<any> {
    //     return new Promise((resolve, reject) => {
    //         this.http.get('https://dashboard-1e975.firebaseio.com/')
    //             .subscribe((response: any) => {
    //                 this.dashboard = response;
    //                 this.onDashboardChanged.next(this.dashboard);
    //                 resolve(this.dashboard);
    //             }, reject);
    //     });
    // }



    postValue() {
        return new Promise((resolve, reject) => {
            this.http.put('api/scrumboard-boards/' + this.dashboard.id, this.dashboard)
                     .subscribe(response => {
                         this.onDashboardChanged.next(this.dashboard);
                         console.log(this.dashboard);
                         resolve(this.dashboard);
                     }, reject);

        });
    }

    // postTitle(title) {
    //     return new Promise((resolve, reject) => {
    //         this.http.put('api/scrumboard-boards/'+ this.dashboard.id, title)
    //             .subscribe(response => {
    //                 this.onDashboardChanged.next(title);
    //                 console.log(title);
    //                 resolve(title);
    //             }, reject);

    //     });
    // }

    // Still using dummy
    // getBoard(id: number) {
    //     return this.dummy.find(dummy => dummy.id === id);
    // }

    // getOnLayout() {
    //     return this.http.get('api/layouts');
    // }

    // updateLayout() {
    //     return this.http.put('api/layouts', {
    //         widget: [{
    //             type: 'input',
    //             label: 'number',
    //             name: 'number',
    //             placeholder: 'Enter Number',
    //             value: 3
    //         }, ] }
    //     );
    // }

    createNewDashboard(dashboard){
        return new Promise ((resolve, reject) => {
            this.http.post('api/scrumboard-boards/' + dashboard.id, dashboard)
                .subscribe(response => {
                    resolve(dashboard);
                },reject);
        });
    }



}

@Injectable()
export class DashboardResolve implements Resolve<any> {
    constructor (private dashboardService: DashboardService) {}

    resolve(route: ActivatedRouteSnapshot) {
        return this.dashboardService.getDashboard(route.paramMap.get('id'));
    }
}
