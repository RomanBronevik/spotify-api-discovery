export const environment = {
  spotify: {
    clientId: '62f94c492ce24a70a444a4a73cea2eaa',
    clientSecret: 'd2d35b220a4e4b6f815853c9e8bc1089',
    accountsBaseURL: 'https://accounts.spotify.com',
    apiBaseURL: 'https://api.spotify.com/v1',
    authorizeEndpoint: '/authorize',
    tokenEndpoint: '/api/token'
  },
  server: {
    host: 'localhost',
    port: '3000',
    get url() {
      return `http://${this.host}:${this.port}`;
    }
  },
  front: {
    host: '192.168.99.100',
    port: '3000',
    get url() {
      return `http://${this.host}:${this.port}`;
    }
  },
  database: {
    host: '192.168.99.100',
    port: '27017',
    get url() {
      return `http://${this.host}:${this.port}`;
    }
  }
};
