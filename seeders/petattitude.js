import { PetAttitude } from '../models';

export default async (transaction) => {
  const data = [
    { name: 'off leash' },
    { name: 'in seat' },
    { name: 'in bagpack' },
    { name: 'in cage'}
  ];

  const values = data.map(item => ({ ...item, createdAt: new Date() }));

  return PetAttitude.bulkCreate(values, { transaction });
};
