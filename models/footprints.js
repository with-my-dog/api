export default (sequelize, DataTypes) => sequelize.define('footprints', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  deletedAt: DataTypes.DATE,
}, {
  modelName: 'footprints',
  timestamps: false,
  freezeTableName: true,
  tableName: 'footprints',
  sequelize,
});
