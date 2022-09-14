import jwt, { SignOptions } from 'jsonwebtoken';

function createJWT(dataInput: string) {
  const secret = 'trybeSmith';

  const jwtConfig: SignOptions = {
    expiresIn: '7d',
    algorithm: 'HS256',
  };

  const token = jwt.sign({ data: { username: dataInput } }, secret, jwtConfig);

  return token;
}

export default createJWT;