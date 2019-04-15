import { ShopAvailable } from '../models';

export default async (transaction) => {
  const data = [
    { name: 'partial' },
    { name: 'no conditons' },
  ];

  const values = data.map(item => ({ ...item, createdAt: new Date() }));

  return ShopAvailable.bulkCreate(values, { transaction });
}
