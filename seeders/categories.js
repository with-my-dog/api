import { Categories } from '../models';

export default async (transaction) => {
  const data = [
    { name: 'cafeteria' },
    { name: 'cafe' },
    { name: 'restaurant' },
    { name: 'pub' },
  ];

  const values = data.map(item => ({ ...item, createdAt: new Date() }));

  return Categories.bulkCreate(values, { transaction });
}
