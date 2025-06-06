const gql = require("graphql-tag");

const typeDefs = gql`
    type SpaceCat {
    id: ID!
    name: String!
    age: Int
    missions: [Mission]
    }
    type Mission {
    id: ID!
    name: String!
    description: String!
    }
    type Query {
    spaceCats: [SpaceCat]
    }
`;

module.export = typeDefs;