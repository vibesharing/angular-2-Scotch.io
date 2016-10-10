import { Injectable } from '@angular/core';
import { User } from '../models/userModel';


const usersPromise: Promise<User[]> = Promise.resolve([
  {
    id: 1,
    name:'Judy',
    username: 'Judy the cat',
    avatar: 'https://pbs.twimg.com/profile_images/570520476787560448/8qkUPDSg_400x400.jpeg'
  },
  {
    id: 2,
    name:'Peter',
    username: 'Peter the dog',
    avatar: 'https://pbs.twimg.com/profile_images/728564215229906944/SMlOk7KX_400x400.jpg'
  },
  {
    id: 3,
    name:'Phil',
    username: 'Phil the horse',
    avatar: 'https://pbs.twimg.com/profile_images/728564215229906944/SMlOk7KX_400x400.jpg'
  }
]);

@Injectable()

export class UserService {

  getUsers() {
    return usersPromise
  };
  getUser(username: string) {
    return usersPromise.then(users => users.find(user => user.username === username))
  }
}
