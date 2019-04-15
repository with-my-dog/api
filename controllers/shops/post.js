import { Shops } from '../../models';

export default async (params) => {
  const result = await Shops.create({ ...params, createdAt: new Date() });

  if (!result) return { code: 500, data: 'internal server error' };

  return { code: 201, data: result };
};
