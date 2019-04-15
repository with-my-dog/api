import { Users } from '../../models';

export default async (params) => {
  const {
    id, email, password, name,
  } = params;

  const values = {
    email, password, name, updatedAt: new Date(),
  };

  const result = await Users.update(values, { where: { id } });

  if (!result) return { code: 500, data: 'internal server error' };

  return { code: 200, data: result };
};
