import { Request, Response } from 'express';
import createJWT from '../auth/createJWT';
import UserService from '../services/User.service';

class UserController {
  constructor(private userService = new UserService()) { }

  public create = async (req: Request, res: Response) => {
    try {
      const user = req.body;
      const userCreated = await this.userService.create(user);
      const token = createJWT(userCreated.username);
      return res.status(201).json({ token });
    } catch (error) {
      return res.status(500).json({ message: 'Something went wrong!' });
    }
  };

  public login = async (req: Request, res: Response) => {
    try {
      const { username } = req.body;
      const token = createJWT(username);
      return res.status(200).json({ token });
    } catch (error) {
      return res.status(500).json({ message: 'Something went wrong!' });
    }
  };
}

export default UserController;