import { NextFunction, Request, Response } from 'express';
import User from '../interfaces/User.interface';

const properties = ['username', 'level', 'classe', 'password'];

const LENGTH_MESSAGE = 'length must be at least 3 characters long';

function validateLength(user: User): [boolean, string | null] {
  const entries = Object.entries(user);
  for (let i = 0; i < entries.length; i += 1) {
    const [property, value] = entries[i];
    if (property !== 'level' && property !== 'password' && value.length < 3) {
      return [false, property];
    }
  }
  return [true, null];
}

function validateProperties(user: User): [boolean, string | null] {
  for (let i = 0; i < properties.length; i += 1) {
    if (!Object.prototype.hasOwnProperty.call(user, properties[i])) {
      return [false, properties[i]];
    }
  }
  return [true, null];
}

function validateTypes(user: User): [boolean, string | null] {
  const entries = Object.entries(user);
  for (let i = 0; i < entries.length; i += 1) {
    const [property, value] = entries[i];
    if (property !== 'level' && typeof value !== 'string') {
      return [false, property];
    }
  }
  return [true, null];
}

function validateValues(user: User): [boolean, string | null] {
  const entries = Object.entries(user);
  for (let i = 0; i < entries.length; i += 1) {
    const [property, value] = entries[i];
    if (!value && value !== 0) {
      return [false, property];
    }
  }
  return [true, null];
}

function isLevelNumber(level: number): boolean {
  return typeof level !== 'number';
}

function isLevelBiggerThanOne(level: number): boolean {
  return Number(level) < 1;
}

function isPasswordLength(password: string): boolean {
  return password.length < 8;
}

function validateSpecifics(user: User) {
  if (isLevelNumber(user.level)) {
    return { code: 422, message: '"level" must be a number' };
  }
  if (isLevelBiggerThanOne(user.level)) {
    return { code: 422, message: '"level" must be greater than or equal to 1' };
  }
  if (isPasswordLength(user.password)) {
    return { code: 422, message: '"password" length must be at least 8 characters long' };
  }
  const [valid, property] = validateLength(user);
  if (!valid) {
    return { code: 422, message: `"${property}" ${LENGTH_MESSAGE}` };
  }
  return null;
}

function validationUser(req: Request, res: Response, next: NextFunction) {
  const user: User = req.body;

  let [valid, property] = validateValues(user);

  if (!valid) {
    return res.status(400).json({ message: `"${property}" is required` });
  }
  
  [valid, property] = validateTypes(user);

  if (!valid) {
    return res.status(422).json({ message: `"${property}" must be a string` });
  }
  
  [valid, property] = validateProperties(user);

  if (!valid) {
    return res.status(400).json({ message: `"${property}" is required` });
  }
  const specifcs = validateSpecifics(user);
  if (specifcs) {
    return res.status(specifcs.code).json({ message: specifcs.message });
  }

  next();
}

export default validationUser;