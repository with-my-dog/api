import { Reviews } from '../../models';

export default async (params) => {
  const result = await Reviews.create(params);

  if (!result) return { code: 500, data: 'internal server error' };

  return { code: 201, data: result };
};
