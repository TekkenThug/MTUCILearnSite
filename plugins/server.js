import { createServer, Model } from "miragejs";

function makeServer({ environment = "development" } = {}) {
  let server = createServer({
    environment,

    models: {
      pair: Model,
    },

    seeds(server) {
      for (let i = 0; i < 5; i++) {
        server.create("pair", {
          name: "Распределенные операционные системы",
          type: "Lecture",
          teacher: "Беленькая М.Н.",
          place: "А-204",
        });
      }
    },

    routes() {
      this.namespace = "api";

      this.get("/schedule", (schema) => {
        return schema.pairs.all();
      });
    },
  });

  return server;
};

export default makeServer();
