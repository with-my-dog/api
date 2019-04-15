import { Users } from '../../models';

export default async (id) => {
  const data = await Users.findOne({
    where: { id, deletedAt: null },
    attributes: ['id', 'email', 'name', 'exp', 'createdAt', 'updatedAt'],
  });

  if (!data) {
    return { code: 404, data: 'not found' };
  }

  return { code: 200, data };
};
