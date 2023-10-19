import { EnvironmentInterface } from "src/environments/environment.interface";

export const environment: EnvironmentInterface = {
  production: true,
  // baseApiUrl: 'https://localhost:44358',
  // deliveryApiUrl: 'https://localhost:44358/umbraco/delivery/api/v1/content',
  baseApiUrl: 'BASE_API_URL',
  deliveryApiUrl: 'DELIVERY_API_URL',
};
