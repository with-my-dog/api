export default (sequelize, DataTypes) => sequelize.define('shopCategories', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
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
  modelName: 'shopCategories',
  timestamps: false,
  freezeTableName: true,
  tableName: 'shop_categories',
  sequelize,
});
