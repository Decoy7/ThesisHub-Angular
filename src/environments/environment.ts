export const environment = {
  production: false,
  serverUrl: '/api',
  keycloak: {
    issuer: 'http://localhost:8080/auth/',
    realm: 'ThesisHub',
    clientId: 'frontend',
  },
};
