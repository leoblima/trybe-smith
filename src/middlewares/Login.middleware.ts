import { NextFunction, Request, Response } from 'express';
import UserService from '../services/User.service';
import User from '../interfaces/User.interface';

function isEmpty(value: string): boolean {
  return !value;
}

async function isValid(username: string, password: string): Promise<boolean> {
  const userService = new UserService();
  const user: User = await userService.getByUsername(username);

  if (!user || user.password !== password) {
    return true;
  }

  return false;
}

async function validationLogin(req: Request, res: Response, next: NextFunction) {
  const { username, password } = req.body;
  switch (true) {
    case isEmpty(username): return res.send(400).json({ message: '"username" is required' });
    case isEmpty(password): return res.send(400).json({ message: '"password" is required' });
    case await isValid(username, password): 
      return res.send(401).json({ message: 'Username or password invalid' });
    default:
      break;
  }

  next();
}

export default validationLogin;
