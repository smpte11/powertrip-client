import gql from "graphql-tag";

const DayQuery = gql`
  query DayQuery($lat: Float!, $long: Float!) {
    day {
      weather(lat: $lat, long: $long) {
        icon
        summary
      }
    }
  }
`;

export default DayQuery;
