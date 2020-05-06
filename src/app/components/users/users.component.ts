import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  users: User[];
  showExtended: boolean = true;
  enableAdd: boolean = true;
  showUserForm: boolean = false;
  constructor() {}

  ngOnInit(): void {
    this.users = [
      {
        firstName: 'John',
        lastName: 'Doe',
        age: 31,
        address: { street: 'neptali', city: 'Manda', region: 'ncr' },
        isActive: false,
        registered: new Date('01/02/2018 08:45:00'),
        hide: false,
      },
      {
        firstName: 'Roman',
        lastName: 'Munar',
        age: 26,
        address: { street: 'neptali', city: 'Manda', region: 'ncr' },
        isActive: true,
        registered: new Date('04/07/2018 08:45:00'),
        hide: false,
      },
      {
        firstName: 'Dohn',
        lastName: 'Joe',
        age: 13,
        address: { street: 'neptali', city: 'Manda', region: 'ncr' },
        isActive: true,
        registered: new Date('01/025/2018 08:45:00'),
        hide: false,
      },
    ];
  }
  addUser(user: User) {
    this.users.push(user);
  }
  onSubmit(e) {
    e.preventDefault();
    console.log(e.target[0].value);
  }
  fireEvent(e) {
    console.log(e.type);
  }
}
