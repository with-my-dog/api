import crypto from 'crypto';
import jwt from 'jsonwebtoken';
import { Users } from '../../models';

const config = require('../../config').default.auth;

export default async (params) => {
  const { email, password } = params;

  const account = await Users.findOne({ where: { email, deletedAt: null } });

  if (!account) return 404;

  const hash = await crypto.createHash('sha512').update(password).digest('hex');

  const matched = hash === account.password;

  if (!matched) return 404;

  const payload = { id: account.id, email: account.email };

  const options = { algorithm: config.algorithm, expiresIn: config.expiresIn };

  const access = jwt.sign(payload, config.secret, options);

  const refeshPayload = { access };

  const refreshOptions = { algorithm: config.algorithm, expiresIn: config.refreshExpiresIn };

  const refresh = jwt.sign(refeshPayload, config.refreshSecret, refreshOptions);

  return { access, refresh };
};
