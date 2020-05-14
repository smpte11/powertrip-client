import * as firebase from "firebase/app";
import ApolloClient from "apollo-client";

import { InMemoryCache, NormalizedCacheObject } from "apollo-cache-inmemory";
import { createHttpLink } from "apollo-link-http";
import { setContext } from "apollo-link-context";
import { typeDefs } from "./components/user";

import { match } from "./fp";

import "firebase/auth";

export interface Configurable {
  apolloClient: ApolloClient<NormalizedCacheObject>;
  readonly apiUrl: string;
}

enum ENVIRONMENTS {
  DEV = "development",
  PROD = "production",
}

export const TOKEN_KEY = "apollo-token";

class Config implements Configurable {
  apiUrl = "http://localhost:7071/graphql";
  apolloClient: ApolloClient<NormalizedCacheObject>;

  constructor() {
    const firebaseConfig = {
      apiKey: "AIzaSyBoO8AIJSOaMBP7i4MTfcfuIz8QflJaEgg",
      authDomain: "powertrip-7ba34.firebaseapp.com",
      databaseURL: "https://powertrip-7ba34.firebaseio.com",
      projectId: "powertrip-7ba34",
      storageBucket: "powertrip-7ba34.appspot.com",
      messagingSenderId: "176571279324",
      appId: "1:176571279324:web:7725fdfea0973a4c995119",
      measurementId: "G-105H5NF50P",
    };
    firebase.initializeApp(firebaseConfig);

    const authLink = setContext((_, { headers }) => {
      const token = localStorage.getItem(TOKEN_KEY);
      return {
        headers: {
          ...headers,
          Authorization: token ? `Bearer ${token}` : "",
        },
      };
    });

    this.apolloClient = new ApolloClient({
      cache: new InMemoryCache(),
      link: authLink.concat(
        createHttpLink({
          uri: this.apiUrl,
        })
      ),
      typeDefs: typeDefs,
      resolvers: {},
      connectToDevTools: process.env.NODE_ENV !== ENVIRONMENTS.PROD,
    });

    this.apolloClient.cache.writeData({
      data: {
        isLoggedIn: !!localStorage.getItem(TOKEN_KEY),
        travels: [],
      },
    });
  }
}

class ProdConfig extends Config {
  apiUrl = "https://powertrip-api-gateway.azurewebsites.net/graphql";
}

function buildConfig(): Config {
  const env = process.env.NODE_ENV;
  return match(env)
    .on(
      () => env === ENVIRONMENTS.PROD,
      () => new ProdConfig()
    )
    .otherwise(() => new Config());
}

export default buildConfig();
