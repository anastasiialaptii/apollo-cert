const { ApolloServer } = require("@apollo/server");
const { startStandaloneServer } = require("@apollo/server/standalone");
const { addMocksToSchema } = require("@graphql-tools/mock");
const { makeExecutableSchema } = require("@graphql-tools/schema");
const spaceCats = require('./schemas/cats');
const catSchema = require('./schemas/cats');
// const tracks = require('./mocks/tracks');
// const trackSchema = require('./schemas/tracks');

async function StartApolloServer() {
    const server = new ApolloServer({
        schema: addMocksToSchema({ 
            schema: makeExecutableSchema({ typeDefs: catSchema}),
            mocks: spaceCats
        })
    });

    const {url} = await startStandaloneServer(server);

    console.log(`Server is up & running, go and check ${url}`);
}

StartApolloServer();