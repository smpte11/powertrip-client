import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { createHttpLink } from "apollo-link-http";

import typeDefs from "@/components/user/resolvers";
import config from "@/config";

const httpLink = createHttpLink({
  uri: config.apiUrl,
});

const cache = new InMemoryCache();

const apolloClient = new ApolloClient({
  cache,
  link: httpLink,
  typeDefs,
  resolvers: {},
  connectToDevTools: true,
});

apolloClient.writeData({
  data: {
    travels: [],
  },
});

export default apolloClient;
