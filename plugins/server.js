import { createServer, Model } from 'miragejs';

function makeServer({ environment = 'development' } = {}) {
  const server = createServer({
    environment,

    models: {
      pair: Model,
    },

    seeds(server) {
      for (let i = 1; i <= 5; i++) {
        server.create('pair', {
          name: 'Распределенные операционные системы',
          number: i,
          type: 'Lecture',
          teacher: 'Беленькая М.Н.',
          cabinet: 'А-204',
        });
      }
    },

    routes() {
      this.urlPrefix = 'http://localhost:3333';
      this.namespace = 'api';

      this.get('/schedule', (schema) => schema.pairs.all());
    },
  });

  return server;
}

export default makeServer();
