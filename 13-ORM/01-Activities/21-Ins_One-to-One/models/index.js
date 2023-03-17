const Driver = require('./Driver');
const License = require('./License');

// Define a Driver as having one License to create a foreign key in the `license` table
//we are defining the relationship btwn driver and license
//we are setting up a 1 to 1 relationship: for every license, there will be one and only one driver
//Driver.hasOne(License, {foreign key: "driver_id, onDelete: 'cascade' "})
//when a driver gets deleted, we will cascade it and delete the associated license
Driver.hasOne(License, {
  foreignKey: 'driver_id',
  // When we delete a Driver, make sure to also delete the associated License.
  onDelete: 'CASCADE',
});

// We can also define the association starting with License
//and license belongs to driver
//again, define the foreign key
//license.driver_id creates a relationship to driver.id
License.belongsTo(Driver, {
  foreignKey: 'driver_id',
});

// We package our two models and export them as an object so we can import them together and use their proper names
module.exports = { Driver, License };
