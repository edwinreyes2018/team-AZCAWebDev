import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const CHATS = [
    { id: 11, name: 'Judy86', topic: 'Lefty', email: 'judy86@gmail.com', message: '48 and still driving the ball 300 yards!' },
    { id: 12, name: 'George143', topic: 'Lefty', email: 'george143@outlook.com', message: 'Yeah - Lefty can drive the ball!.'},
    { id: 13, name: 'WMO19', topic: 'MEAN Stack', email: 'wmo19@cox.net', message: '40 gallons'},
    { id: 14, name: 'JohnS', topic: 'Lefty', email: 'johns@cox.net', message: 'Lefty...maybe a back 9 charge at the leaders?'},
    { id: 15, name: 'Meddi', topic: 'Weather', email: 'meddi@uscellular.com', message: 'Trying to stay warm - it is freezing here!'},
    { id: 16, name: '1956JCS', topic: 'Travel', email: '1956jcs@yahoo.com', message: 'Need to Book a Get-away!'},
    ];
    return {CHATS};
  }
}
