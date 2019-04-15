import { Reservation } from '../models';

export default async (transaction) => {
  const data = [
    { name: 'not need' },
    { name: 'need' },
  ];

  const values = data.map(item => ({ ...item, createdAt: new Date() }));

  return Reservation.bulkCreate(values, { transaction });
};
