import jwt, { SignOptions } from 'jsonwebtoken';

function createJWT(username: string, id: number) {
  const secret = 'trybeSmith';

  const jwtConfig: SignOptions = {
    expiresIn: '7d',
    algorithm: 'HS256',
  };

  const token = jwt.sign({ data: { userId: id, username } }, secret, jwtConfig);

  return token;
}

export default createJWT;