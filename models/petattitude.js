export default (sequelize, DataTypes) => sequelize.define('petAttitude', {
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
  modelName: 'petAttitude',
  timestamps: false,
  freezeTableName: true,
  tableName: 'pet_attitude',
  sequelize,
});
