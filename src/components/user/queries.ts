import gql from "graphql-tag";

export const IS_LOGGED_IN = gql`
  query IsUserLoggedIn {
    isLoggedIn @client
  }
`;

export const GET_USER = gql`
  query GetUser {
    user @client {
      id
      email
    }
  }
`;
