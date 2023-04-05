//using our Mongoose schemas/models
const { School, Class, Professor } = require('../models');

const resolvers = {
  //when the graphql query comes in for each of these, mongoose will execute a .find on the server
  //apolloserver will remove all the data we didn't request, based on what we specify with the graphql query
  //server sends back only the data we want to the client
  Query: {
    schools: async () => {
      // Populate the classes and professor subdocuments when querying for schools
      //our mongoose schema has a reference to classes, so we populate classes to make sure the class data is avail when we resolve
      //class references professor --- so we have to populate the data for professor
      return await School.find({}).populate('classes').populate({
        //classes references professor, schools references classes
        //if we tried to directly populate professors to School, which would not work
        //since we want to populate professor to classes, classes is the "path" to populate professors
        path: 'classes',
        populate: 'professor'
      });
    },
    classes: async () => {
      // Populate the professor subdocument when querying for classes
      return await Class.find({}).populate('professor');
    },
    //find and return all of the professors
    professors: async () => {
      return await Professor.find({});
    }
  }
};

module.exports = resolvers;
