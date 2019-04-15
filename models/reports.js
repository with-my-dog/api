export default (sequelize, DataTypes) => sequelize.define('reports', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  updatedAt: DataTypes.DATE,
  deletedAt: DataTypes.DATE,
}, {
  modelName: 'reports',
  timestamps: false,
  freezeTableName: true,
  tableName: 'reports',
  sequelize,
});
