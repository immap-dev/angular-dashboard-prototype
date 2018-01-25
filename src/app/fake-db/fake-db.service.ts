import {InMemoryDbService} from 'angular-in-memory-web-api';
import {DashboardFakeDB} from './dashboard-fake-db';
export class FakeDBService implements InMemoryDbService {
    createDb() {
        return{
            'dashboard-cards': DashboardFakeDB.cards
        };
    }

}
