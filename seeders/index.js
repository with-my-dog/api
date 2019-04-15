import { sequelize } from '../models';
import petAttitude from './petattitude';
import petTypes from './pettypes';
import shopAvailable from './shopavailable'
import reservation from './reservation';
import categories from './categories';

const { server, database } = require('../config').default;

export default async () => {
  if (server.production || !database.sync) return {};

  return sequelize.transaction(async transaction => {
    const petAttitudeSeeders = await petAttitude(transaction);
    const petTypeSeeders = await petTypes(transaction);
    const shopAvailableSeeders = await shopAvailable(transaction);
    const reservationSeeders = await reservation(transaction);
    const categorySeeders = await categories(transaction);
    return {
      petAttitudeSeeders, petTypeSeeders, shopAvailableSeeders,
      reservationSeeders, categorySeeders,
    };
  });
}
