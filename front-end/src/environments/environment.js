export default {
  server: {
    host: 'localhost',
    port: '3000',
    get baseURL() {
      return `http://${this.host}:${this.port}`;
    },
    authPath: '/auth/spotify'
  }
};
