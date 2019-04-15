import { Op } from 'sequelize';
import { Shops } from '../../models';

export default async (params) => {
  const { sw, ne } = params;


  const data = await Shops.findAll({
    where: {
      longitude: { [Op.between]: [sw.longitude, ne.longitude] },
      latitude: { [Op.between]: [sw.latitude, ne.latitude] },
      deletedAt: null,
    },
  });

  if (!data) return { code: 500, data: 'internal server error' };

  return { code: 200, data };
};
