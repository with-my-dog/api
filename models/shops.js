export default (sequelize, DataTypes) => sequelize.define('shops', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  latitude: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  longitude: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  open: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  close: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  updatedAt: DataTypes.DATE,
  deletedAt: DataTypes.DATE,
}, {
  modelName: 'shops',
  timestamps: false,
  freezeTableName: true,
  tableName: 'shops',
  sequelize,
});
