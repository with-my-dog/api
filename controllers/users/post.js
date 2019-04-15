import jwt from 'jsonwebtoken';
import { Users } from '../../models';

const config = require('../../config').default.auth;

export default async (params) => {
  const { email } = params;

  const query = { where: { email, deletedAt: null } };

  const duplicated = await Users.findOne(query);

  if (duplicated) return { code: 409, data: 'conflict' };

  const data = { ...params, createdAt: new Date() };

  const result = await Users.create(data);

  if (!result) {
    return { code: 500, data: 'internal server error' };
  }

  const payload = { id: result.id, email: result.email };

  const options = { algorithm: config.algorithm, expiresIn: config.expiresIn };

  const access = jwt.sign(payload, config.secret, options);

  const refreshPayload = { access, ...payload };

  const refreshOptions = { algorithm: config.algorithm, expiresIn: config.refreshExpiresIn };

  const refresh = jwt.sign(refreshPayload, config.refreshSecret, refreshOptions);

  return { code: 201, data: { access, refresh } };
};
