import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from '../../models/User';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  user: User = {
    firstName: '',
    lastName: '',
    email: '',
  };

  users: User[];
  showExtended: boolean = true;
  enableAdd: boolean = true;
  showUserForm: boolean = false;
  @ViewChild('userForm') form: any;
  constructor() {}

  ngOnInit(): void {
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
  // addUser() {
  //   this.user.isActive = true;
  //   this.user.registered = new Date();

  //   this.users.unshift(this.user);
  //   this.user = {
  //     firstName: '',
  //     lastName: '',
  //     email: '',
  //   };
  // }
  onSubmit({ value, valid }: { value: User; valid: boolean }) {
    if (!valid) {
      console.log('Form is not valid');
    } else {
      value.isActive = true;
      value.registered = new Date();
      this.users.unshift(value);
      this.form.reset();
    }
  }
}
