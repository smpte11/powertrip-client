import * as firebase from "firebase/app";
import { match } from "./fp";

import "firebase/auth";

export interface Configurable {
  readonly apiUrl: string;
}

enum ENVIRONMENTS {
  DEV = "development",
  PROD = "production",
}

class Config implements Configurable {
  apiUrl = "http://localhost:7071/graphql";

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
