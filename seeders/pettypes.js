import { PetTypes } from '../models';

export default async (transaction) => {
  const data = [
    { name: 'small' },
    { name: 'normal' },
    { name: 'big' },
  ];

  const values = data.map(item => ({ ...item, createdAt: new Date() }));

  return PetTypes.bulkCreate(values, { transaction });
}
