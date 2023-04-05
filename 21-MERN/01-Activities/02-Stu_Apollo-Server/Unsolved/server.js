const express = require('express');
// import ApolloServer class
const { ApolloServer } = require('apollo-server-express');

//import the two part of a graphql schema
const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');

const PORT = process.env.PORT || 3001;
//set up our server with our schemas
const server = new ApolloServer({
  typeDefs,
  resolvers
});

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// create a new instance of apollo server
//set up the Apollo server, use middleware to connect it to express server
const startApolloServer = async (typeDefs, resolvers) => {
await server.start();
server.applyMiddleware({ app });

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
    console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
  })
})
};

// TODO: Add a comment describing this functionality
startApolloServer(typeDefs, resolvers);
