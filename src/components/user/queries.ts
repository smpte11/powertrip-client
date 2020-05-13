import gql from "graphql-tag";

export const GET_USER = gql`
  query GetUser {
    user @client {
      id
      token
      email
    }
  }
`;
