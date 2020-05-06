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
  loading: boolean = false;
  constructor() {}

  ngOnInit(): void {
    this.users = [
      {
        firstName: 'John',
        lastName: 'Doe',
        age: 31,
        address: { street: 'neptali', city: 'Manda', region: 'ncr' },
      },
      {
        firstName: 'Roman',
        lastName: 'Munar',
        age: 26,
        address: { street: 'neptali', city: 'Manda', region: 'ncr' },
      },
      {
        firstName: 'Dohn',
        lastName: 'Joe',
        age: 13,
        address: { street: 'neptali', city: 'Manda', region: 'ncr' },
      },
    ];
    this.loading = true;
    this.addUser({
      firstName: 'Test',
      lastName: 'lastname',
      age: 17,
      address: { street: 'neptali', city: 'Manda', region: 'ncr' },
    });

    this.showExtended = false;
  }
  addUser(user: User) {
    this.users.push(user);
  }
}
