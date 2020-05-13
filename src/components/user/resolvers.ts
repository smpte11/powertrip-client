import gql from "graphql-tag";

const typeDefs = gql`
  type User {
    id: ID!
    email: String!
    token: String!
  }

  type Query {
    user: User
  }
`;

export default typeDefs;
