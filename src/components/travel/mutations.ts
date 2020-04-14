import gql from "graphql-tag";

export const ADD_TRAVEL = gql`
  mutation CreateTravel(
    $name: String!
    $destination: String!
    $start: DateTime!
    $end: DateTime!
  ) {
    createTravel(
      travel: {
        name: $name
        destination: $destination
        start: $start
        end: $end
      }
    ) {
      id
      name
      destination
      start
      end
    }
  }
`;
