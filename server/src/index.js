const { ApolloServer } = require("@apollo/server");
const { startStandaloneServer } = require("@apollo/server/standalone");
const spaceCats = require('./schema');

async function StartApolloServer() {
    const server = new ApolloServer({ typeDefs: spaceCats });

    const {url} = await startStandaloneServer(server);

    console.log(`Server is up & running, go and check ${url}`);
}

StartApolloServer();