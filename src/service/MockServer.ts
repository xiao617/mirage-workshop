/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { createServer, Factory, Model } from "miragejs";
import { TodoObject } from "../types/TodoObject";
import faker from "faker";

export function MockServer({ environment = "development" }) {
  return createServer({
    environment,
    models: {
      todo: Model.extend<Partial<TodoObject>>({})
    },
    factories: {
      todo: Factory.extend<Partial<TodoObject>>({
        get name() {
          //console.log(this.id)
          //faker.seed(Number(this.id))
          return `Listen to ${faker.music.genre()}`;
        }
      })
    },
    seeds(server) {
      //server.schema.create('todo',{ name: "Go to Market" });
      //server.create("todo", { name: "Buy Cookies" });
      server.createList("todo", 3);
    },
    routes() {
      //this.urlPrefix = "https://sd8zp.csb.app/";
      this.get("/todos", (schema, request) => {
        //return {"todos": [{"name":"Buy Drink", "id":"1"}]}
        return schema.all("todo");
      });
      this.post("/todos", (schema, request) => {
        //debugger;
        let attrs = JSON.parse(request.requestBody);
        schema.create("todo", attrs);
        return schema.all("todo");
      });
      this.del("/todos/:key", (schema, request) => {
        let keyid = request.params.key;
        let post = schema.findBy("todo", {id: keyid})
        if(post !== null)
          post.destroy();
       //schema.find("todo", keyid).destroy();
        return schema.all("todo");
      });
    }
  });
}
