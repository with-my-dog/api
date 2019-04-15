import { Reviews } from '../../models';

export default async (params) => {
  const { id, userId } = params;

  const result = await Reviews.update({
    deletedAt: null,
  }, {
    where: { id, userId, deletedAt: null },
  });

  if (!result) return { code: 500, data: 'internal server error' };

  if (result[0] === 0) return { code: 404, data: 'not found' };

  return { code: 200, data: result };
};
