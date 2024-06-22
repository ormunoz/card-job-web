
export enum EnvNames {
  PROD = 'production',
  DEV = 'development',
}
type EnvName = EnvNames.PROD | EnvNames.DEV;

export interface EnvConfig {
  apiURL: string;
  env: EnvName;
}

const ENV_CONFIGS: Record<EnvName, EnvConfig> = {
    production: {
      apiURL: process.env.MEDI_APP_BACKEND_URL || 'https://medi-app-backend-production.up.railway.app',
      env: EnvNames.PROD,
    },
    development: {
      apiURL: process.env.MEDI_APP_BACKEND_URL || 'https://medi-app-backend-production.up.railway.app',
      env: EnvNames.DEV,
    },
  };

export function getEnvConfig(): EnvConfig {
  const nodeEnv = process.env.NODE_ENV as EnvName;
  return ENV_CONFIGS[nodeEnv];
}
