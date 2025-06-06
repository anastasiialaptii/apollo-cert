const gql = require("graphql-tag");

const spaceCats = gql`
    type Query {
    spaceCats: [SpaceCat]
    }

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
`;

module.exports = spaceCats;