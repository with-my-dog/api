import { Shops } from '../../models';

export default async (params) => {
  const { id } = params;

  const data = params;

  delete data.id;

  const result = await Shops.update(params, { where: { id } });

  if (!result) return { code: 500, data: 'internal server error' };

  return { code: 200, data: result };
};
