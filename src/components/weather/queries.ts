import gql from "graphql-tag";

const WeatherQuery = gql`
  query WeatherQuery($lat: Float!, $long: Float!) {
    weather(lat: $lat, long: $long) {
      icon
      summary
    }
  }
`;

export default WeatherQuery;
