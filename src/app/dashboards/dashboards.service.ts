import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Observable} from 'rxjs/Observable';


@Injectable()
export class DashboardService {
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

    // constructor(private http: Http) { }
    constructor(private http: HttpClient) { }

    getBoard(id: number) {
        return this.dummy.find(dummy => dummy.id === id);
    }


    getOnLayout() {
        return this.http.get('api/layouts');
    }

    updateLayout() {
        return this.http.put('api/layouts', {
            widget: [{
                type: 'input',
                label: 'number',
                name: 'number',
                placeholder: 'Enter Number',
                value: 3
            }, ] }
        );
    }



}
