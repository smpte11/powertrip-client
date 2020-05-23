import { ApolloCache } from "apollo-cache";
import gql from "graphql-tag";
import { Resolvers } from "apollo-client";

export const typeDefs = gql`
  type User {
    id: ID!
    email: String!
    displayName: String
    travels: [Travel]
  }

  extend type Query {
    me: User
    isLoggedIn: Boolean!
  }
`;

type ResolverFn = (
  parent: any,
  args: any,
  { cache }: { cache: ApolloCache<any> },
  info: any
) => any;

interface ResolverMap {
  [field: string]: ResolverFn;
}

interface AppResolvers extends Resolvers {
  Query: ResolverMap;
  User: ResolverMap;
}

const resolvers = {};

export default resolvers;
