import { createServer, Factory, Model } from "miragejs";

export function MockServer({ environment = "development" }) {
  return createServer({
    environment,
    models: {
      todo: Model
    },
    factories: {
      todo: Factory.extend({
        name(i) {
          return `Todo Nothing ${i}`;
        }
      })
    },
    seeds(server) {
      server.schema.todos.create({ name: "Go to Market" });
      server.create("todo", { name: "Buy Cookies" });
      server.createList("todo", 3);
    },
    routes() {
      //this.urlPrefix = "https://sd8zp.csb.app/";
      this.get("/todos", (schema, request) => {
        return schema.todos.all();
      });
      this.post("/todos", (schema, request) => {
        //debugger;
        let attrs = JSON.parse(request.requestBody);
        return schema.todos.create(attrs);
      });
      this.del("/todos/:key", (schema, request) => {
        let keyid = request.params.key;
        schema.todos.findBy({ id: keyid }).destroy();
      });
    }
  });
}
