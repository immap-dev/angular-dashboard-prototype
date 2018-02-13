import {InMemoryDbService} from 'angular-in-memory-web-api';
import {DashboardFakeDB} from './dashboard-fake-db';
import {BoardFakeDB} from './board-db';
import { NavFakeDB} from './navlist';
export class FakeDBService implements InMemoryDbService {
    createDb() {
        return{
            'layouts': DashboardFakeDB.layouts,
            'scrumboard-boards' : BoardFakeDB.boards,
            'navigations' : NavFakeDB.navmodel


        };
    }

}
