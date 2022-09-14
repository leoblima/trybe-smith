import { Pool, ResultSetHeader } from 'mysql2/promise';
import User from '../interfaces/User.interface';

class UserModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getByUsername(username: string): Promise<User[]> {
    const result = await this.connection.execute(
      'SELECT * FROM Trybesmith.Users WHERE username = ?;',
      [username],
    );

    const [data] = result;
    return data as User[];
  }

  public async create(user: User): Promise<User> {
    const { username, classe, level, password } = user;
    const result = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Users (username, classe, level, password) VALUES (?, ?, ?, ?);',
      [username, classe, level, password],
    );
    const [dataInserted] = result;
    const { insertId } = dataInserted;
    return { id: insertId, ...user };
  }
}

export default UserModel;