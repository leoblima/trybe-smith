import connection from '../models/connection';
import User from '../interfaces/User.interface';
import UserModel from '../models/User.model';

class UserService {
  public model: UserModel;

  constructor() {
    this.model = new UserModel(connection);
  }

  public create(user: User): Promise<User> {
    return this.model.create(user);
  }
}

export default UserService;