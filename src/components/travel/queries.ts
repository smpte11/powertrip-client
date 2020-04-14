import gql from "graphql-tag";

export const TRAVELS_QUERY = gql`
  {
    travels {
      id
      name
      destination
      start
      end
    }
  }
`;
