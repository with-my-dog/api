import { Users } from '../../models';

export default async (id) => {
  const result = await Users.update({ deletedAt: new Date() }, { where: { id } });

  if (!result) {
    return { code: 500, data: 'internal server error' };
  }

  return { code: 200, data: result };
};
