import gql from "graphql-tag";

const typeDefs = gql`
  type User {
    id: ID!
    email: String!
    token: String!
    displayName: String
  }

  extend type Query {
    user: User
  }
`;

export default typeDefs;
