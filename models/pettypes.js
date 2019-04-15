export default (sequelize, DataTypes) => sequelize.define('petTypes', {
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
  modelName: 'petTypes',
  timestamps: false,
  freezeTableName: true,
  tableName: 'pet_types',
  sequelize,
});
