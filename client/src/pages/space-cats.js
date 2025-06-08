import gql from "graphql-tag";

const LIST_SPACE_CATS = gql`
    query GetSpaceCats {
        spaceCats {
            id
            name
            age
            missions {
            id
            name
            description
            }
        }
    }
`;