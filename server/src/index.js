const { ApolloServer } = require("@apollo/server");
const { startStandaloneServer } = require("@apollo/server/standalone");
const { addMocksToSchema } = require("@graphql-tools/mock");
const { makeExecutableSchema } = require("@graphql-tools/schema");
const spaceCats = require('./schema');
const spaceMocks = require("./mocks");

async function StartApolloServer() {
    const server = new ApolloServer({
        schema: addMocksToSchema({ 
            schema: makeExecutableSchema({ typeDefs: spaceCats}),
            mocks: spaceMocks
        })
    });

    const {url} = await startStandaloneServer(server);

    console.log(`Server is up & running, go and check ${url}`);
}

StartApolloServer();