import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { createHttpLink } from "apollo-link-http";

import typeDefs from "@/components/user/resolvers";
import config from "@/config";

const httpLink = createHttpLink({
  uri: config.apiUrl,
});

const cache = new InMemoryCache();

cache.writeData({
  data: {
    travels: [],
  },
});

const apolloClient = new ApolloClient({
  link: httpLink,
  cache,
  typeDefs,
});

export default apolloClient;
