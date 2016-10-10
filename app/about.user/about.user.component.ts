import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { User } from '../models/userModel'

import { UserService } from '../services/userService.service'


@Component({
  templateUrl: '../../app/about.user/about.user.html',
})

export class AboutUserComponent implements OnInit{
  private _userService: UserService;
  private route: ActivatedRoute;
  private _user: User;

  constructor( _activatedRoute:ActivatedRoute, userService: UserService ){
    this._userService = userService;
    this.route = _activatedRoute
  }

  public ngOnInit(): void {
    let username = this.route.snapshot.params['username'];

    this._userService.getUser(username).then(user => this._user = user);
  }
}
