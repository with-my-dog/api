export default (sequelize, DataTypes) => sequelize.define('bookmarks', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  updatedAt: DataTypes.DATE,
  deletedAt: DataTypes.DATE,
}, {
  modelName: 'bookmarks',
  timestamps: false,
  freezeTableName: true,
  tableName: 'bookmarks',
  sequelize,
});
