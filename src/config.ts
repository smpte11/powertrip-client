import { match } from "./fp";

export interface Configurable {
  readonly apiUrl: string;
}

enum ENVIRONMENTS {
  DEV = "development",
  PROD = "production",
}

class Config implements Configurable {
  apiUrl = "http://localhost:7071/graphql";
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

export default buildConfig;
