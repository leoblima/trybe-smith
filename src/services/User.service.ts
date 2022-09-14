import connection from '../models/connection';
import User from '../interfaces/User.interface';
import UserModel from '../models/User.model';

class UserService {
  public model: UserModel;

  constructor() {
    this.model = new UserModel(connection);
  }

  public async getByUsername(username: string): Promise<User[]> {
    const user = await this.model.getByUsername(username);

    return user;
  }

  public create(user: User): Promise<User> {
    return this.model.create(user);
  }
}

export default UserService;