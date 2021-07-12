import { createServer, Factory, Model } from "miragejs";
import { todoObject } from "./nodeService";


export function MockServer({ environment = "development" }) {
  return createServer({
    environment,
    models: {
      todo: Model.extend<Partial<todoObject>>({})
    },
    factories: {
      todo: Factory.extend<Partial<todoObject>>({
        get name(i) {
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
        return schema.all('todo');
      });
      this.post("/todos", (schema, request) => {
        //debugger;
        let attrs = JSON.parse(request.requestBody);
        return schema.create('todo',attrs);
      });
      this.del("/todos/:key", (schema, request) => {
        let keyid = request.params.key;
        schema.todos.findBy({ id: keyid }).destroy();
      });
    }
  });
}
