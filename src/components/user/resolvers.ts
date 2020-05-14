import gql from "graphql-tag";

const typeDefs = gql`
  type User {
    id: ID!
    email: String!
    displayName: String
  }

  extend type Query {
    user: User
    isLoggedIn: Boolean!
  }
`;

export default typeDefs;
