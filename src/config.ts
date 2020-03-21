import { match } from "./fp";

export interface Configurable {
  readonly host: string;
  readonly port?: number;
}

enum ENVIRONMENTS {
  DEV = "development",
  PROD = "production"
}

class Config implements Configurable {
  host = "http://localhost";
  port = 4000;

  public get apiUrl(): string {
    return `${this.host}:${this.port}`;
  }
}

class ProdConfig extends Config {
  host = "https://powertrip-api-gateway.azurewebsites.net/";

  public get apiUrl(): string {
    return this.host;
  }
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
