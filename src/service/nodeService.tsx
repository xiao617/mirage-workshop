import axios, { AxiosResponse } from "axios";
import * as A from "fp-ts/Array";
import * as TE from "fp-ts/TaskEither";
import * as O from "fp-ts/lib/Option";
import * as E from "fp-ts/Either";
import { of } from "fp-ts/Identity";
import { zero } from "fp-ts/Array";
import { pipe } from "fp-ts/lib/function";

export class NodeService {
    /*
  getTodoData(): TE.TaskEither<Error, Array<todoObject>> {
    return pipe(
      TE.tryCatch<Error, AxiosResponse<Array<todoObject>>>(
        () => axios.get<Array<todoObject>>("/todos"),
        (err) => new Error(`GET Todos Error: ${err}`)
      ),
      TE.map<AxiosResponse<Array<todoObject>>, Array<todoObject>>(
        (res) => res.data
      )
    );
  }
  postTodoData(data: string): TE.TaskEither<Error, todoObject> {
    return pipe(
      TE.tryCatch<Error, AxiosResponse<todoObject>>(
        () =>
          axios.post<todoObject>("/todos", {
            name: data,
            key: data
          }),
        (err) => new Error(`POST New Todos Error: ${err}`)
      ),
      TE.map<AxiosResponse<todoObject>, todoObject>((res) => res.data)
    );
  }
  delTodoData(data: todoObject): TE.TaskEither<Error, void> {
    //console.log(`/todos/${data.key}`);
    return pipe(
      TE.tryCatch<Error, AxiosResponse<void>>(
        () => axios.delete(`/todos/${data.key}`),
        (err) => new Error(`DELETE Todo Error: ${err}`)
      ),
      TE.map<AxiosResponse<void>, void>((res) => res.data)
    );
  }*/
  
  async getTodoData() {
    try {
      const res = await axios.get("/todos");
      return res.data.todos;
    } catch (e) {
      console.error(e);
    }
  }
  async postTodoData(data: string) {
    try {
      const res = await axios.post("/todos", {
        name: data
      });
      return res.data.todos;
    } catch (e) {
      console.error(e);
    }
  }
  async delTodoData(data: string) {
    try {
      const res = await axios.delete(`/todos/${data}`);
      return res.data.todos;
    } catch (e) {
      console.error(e);
    }
  }
}
