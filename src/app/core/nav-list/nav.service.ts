import{Injectable} from '@angular/core';
import{BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Subject} from 'rxjs/Subject';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class NavService {

	navmodel = [
			{
				'url':'/home',
				'title': 'homesi',

			},
			{
				'url':'/dashboard',
				'title': 'dashboard',
			},

		]
	navigations:any[];

	
	onNavigationModelChanged: BehaviorSubject<any> = new BehaviorSubject([]);
	onSubject: Subject<any> = new Subject();

	

	constructor(private http: HttpClient){}

	getNavigations(){
		return this.http.get('api/navigations');
			
	}
	



           
                  


}