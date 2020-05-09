import gql from "graphql-tag";

const typeDefs = gql`
  type User {
    email: String
    token: String
  }
`;

export default typeDefs;
