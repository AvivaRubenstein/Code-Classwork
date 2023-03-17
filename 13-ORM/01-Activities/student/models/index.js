const Traveller = require('./Traveller');
const Location = require('./Location');
const Trip = require('./Trip');

// TODO: Impliment belongsToMany
// The solved solution is below but you will only benefit if you google and check sequalize documentation
// learn what belongsToMany, as well as the general concept of what a many to many database relationships is
// also lookup keywords like "through" and "as" etc and understand the code

// Traveller.belongsToMany(Location, {
//   // Define the third table needed to store the foreign keys
//   through: {
//     model: Trip,
//     unique: false
//   },
//   // Define an alias for when data is retrieved
//   as: 'planned_trips'
// });

// Location.belongsToMany(Traveller, {
//   // Define the third table needed to store the foreign keys
//   through: {
//     model: Trip,
//     unique: false
//   },
//   // Define an alias for when data is retrieved
//   as: 'location_travellers'
// });

module.exports = { Traveller, Location, Trip };
