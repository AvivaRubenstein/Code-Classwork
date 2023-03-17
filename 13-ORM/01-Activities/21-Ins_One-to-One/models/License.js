const { UUIDV4, Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class License extends Model {}

License.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    // Use Sequelize's UUID functionality to generate a unique number for the license instead of making us do it ourselves
    license_number: {
      type: DataTypes.UUID,
      defaultValue: UUIDV4,
    },
    is_donor: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
    // This column will store a reference of the `id` of the `Driver` that owns this License
    driver_id: {
      type: DataTypes.INTEGER,
      references: {
        // This references the `driver` model, which we set in `Driver.js` as its `modelName` property
            //we are creating a column in the license table which references the driver model (the driver's model name is "driver")
    //we are tying the two tables together on this
    //creating a foreign key
        model: 'driver',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'license',
  }
);

module.exports = License;
