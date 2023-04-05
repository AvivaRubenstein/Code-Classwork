const { gql } = require('apollo-server-express');

const typeDefs = gql`
  # Define which fields are accessible from the Class model
  type Class {
    _id: ID
    name: String
    building: String
    creditHours: Int
  }

  # TODO: define which queries the frontend is allowed to make and what data is returned 
  type Query {
    classes: [Class]
  }
`;

module.exports = typeDefs;
