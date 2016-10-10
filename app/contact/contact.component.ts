import { Component, OnInit } from '@angular/core';
import { User } from '../models/userModel'

import { UserService } from '../services/userService.service'


@Component({
  selector: 'contact',
  templateUrl: '../../app/contact/contact.html',
})

export class ContactComponent implements OnInit {
  private _userService : UserService;
  private users: User[];

  constructor(userService: UserService){
    this._userService = userService;
    this.users = [];
  }

  ngOnInit() {
    this._userService.getUsers().then(users => this.users = users).then(()=> {    console.log(this.users);
    });
  }
};
