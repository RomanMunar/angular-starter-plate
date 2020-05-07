import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { User } from '../models/User';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  users: User[];
  constructor() {
    this.users = [
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'John@yahoo.com',
        isActive: false,
        registered: new Date('01/02/2018 08:45:00'),
        hide: false,
      },
      {
        firstName: 'Roman',
        lastName: 'Munar',
        email: 'RomanMunar@gmail.com',
        isActive: true,
        registered: new Date('04/07/2018 08:45:00'),
        hide: false,
      },
      {
        firstName: 'Dohn',
        lastName: 'Joe',
        email: 'Dohn@eme.er',
        isActive: true,
        registered: new Date('01/025/2018 08:45:00'),
        hide: false,
      },
    ];
  }

  getUsers(): Observable<User[]> {
    return of(this.users);
  }

  addUser(user: User) {
    this.users.unshift(user);
  }
}
