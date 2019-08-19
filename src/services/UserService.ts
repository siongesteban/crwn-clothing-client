import { User } from 'types';
import { FirestoreService } from 'services';

export class UserService extends FirestoreService<User> {
  private static instance: UserService;

  constructor() {
    super('users');
  }

  static getInstance(): UserService {
    if (!UserService.instance) {
      UserService.instance = new UserService();
    }

    return UserService.instance;
  }
}
