import Sequelize from 'sequelize';
import sequelize from './sequelize';

import users from './users';
import shops from './shops';
import reviews from './reviews';
import bookmarks from './bookmarks';
import categories from './categories';
import petTypes from './pettypes';
import pets from './pets';
import reports from './reports';
import footPrints from './footprints';
import petAttitude from './petattitude';
import shopAvailable from './shopavailable';
import reservation from './reservation';

const Users = users(sequelize, Sequelize);
const Shops = shops(sequelize, Sequelize);
const Reviews = reviews(sequelize, Sequelize);
const Bookmarks = bookmarks(sequelize, Sequelize);
const Categories = categories(sequelize, Sequelize);
const PetTypes = petTypes(sequelize, Sequelize);
const Pets = pets(sequelize, Sequelize);
const Reports = reports(sequelize, Sequelize);
const FootPrints = footPrints(sequelize, Sequelize);
const PetAttitude = petAttitude(sequelize, Sequelize);
const ShopAvailable = shopAvailable(sequelize, Sequelize);
const Reservation = reservation(sequelize, Sequelize);

Users.hasMany(Reviews);
Users.hasMany(Bookmarks);
Users.hasMany(Reports);
Users.hasMany(FootPrints);
Users.hasMany(Pets);
Shops.hasMany(Reviews);
Shops.hasMany(Bookmarks);
Shops.hasMany(Reports);
Shops.hasMany(FootPrints);
Categories.hasMany(Shops);
Categories.hasMany(Reviews);
PetTypes.hasMany(Pets);
PetTypes.hasMany(Shops);
PetTypes.hasMany(Reviews);
PetAttitude.hasMany(Reviews);
ShopAvailable.hasMany(Reviews);
Reservation.hasMany(Reviews);

export {
  sequelize, Users, Shops, Reviews, Bookmarks, Categories, PetTypes, Pets, Reports,
  PetAttitude, ShopAvailable, Reservation,
};
