import gql from "graphql-tag";

export const SIGNUP = gql`
  mutation Signup($user: CredentialInput!) {
    signup(newUser: $user) {
      email
      isLogged
    }
  }
`;
