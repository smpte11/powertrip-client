import gql from "graphql-tag";

export const TRAVELS_QUERY = gql`
  query getTravels {
    travels {
      id
      name
      destination
      start
      end
    }
  }
`;
