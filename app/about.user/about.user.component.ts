import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { User } from '../models/userModel'

import { UserService } from '../services/userService.service'


@Component({
  templateUrl: '../../app/about.user/about.user.html',
})

export class AboutUserComponent implements OnInit{
  private _userService: UserService;
  private _router: Router;
  private route: ActivatedRoute;
  private _user: User;

  constructor( _activatedRoute:ActivatedRoute, userService: UserService, router: Router ){
    this._userService = userService;
    this.route = _activatedRoute
    this._router = router;
  }

  public ngOnInit(): void {
    let username = this.route.snapshot.params['username'];

    this._userService.getUser(username).then(user => this._user = user);
  }

  private goBack(): void {
    this._router.navigate(['/contact']);
  }
}
