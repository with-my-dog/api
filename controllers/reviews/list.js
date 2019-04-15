import { Reviews } from '../../models';

export default async (params) => {
  const { shopId } = params;

  const result = await Reviews.findAll({ where: { shopId } });

  if (!result) return { code: 500, data: 'internal server error' };

  return { code: 200, data: result };
};
