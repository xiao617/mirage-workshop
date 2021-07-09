import React, { useState, useEffect } from "react";
import "./index.css";
import "primeicons/primeicons.css";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.css";
import "primeflex/primeflex.css";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { NodeService, todoObject } from "./service/nodeService";
import * as TE from "fp-ts/TaskEither";
import { zero } from "fp-ts/Array";

export default function App() {
  const [todolist, setTodolist] = useState<Array<todoObject>>([]);
  const [selectTodo, setSelectTodo] = useState<todoObject>();
  const [addTodo, setAddTodo] = useState<string>("");
  const nodeService = new NodeService();
  /*
  async function getData() {
    const data = await TE.match<Error, Array<todoObject>, Array<todoObject>>(
      (e) => {
        console.error(`GET todo list data error: ${e}`);
        return zero<todoObject>();
      },
      (r) => {
        setTodolist(r);
        return r;
      }
    )(nodeService.getTodoData())();
  }
  async function postData() {
    const data = await TE.match<Error, todoObject, todoObject>(
      (e) => {
        console.error(`POST todo item error: ${e}`);
        return {} as todoObject;
      },
      (r) => {
        console.log(`POST Success`);
        return r;
      }
    )(nodeService.postTodoData(addTodo))();
  }
  async function deleteData() {
    if(selectTodo !== undefined)
    {
      const data = await TE.match<Error, void, void>(
        (e) => {
          console.error(`DELETE todo item error: ${e}`);
          return;
        },
        (r) => {
          console.log(`DELETE Success`);
          return;
        }
      )(nodeService.delTodoData(selectTodo))();
    }
  }*/
  useEffect(() => {
    //getData();
    nodeService.getTodoData().then((data) => setTodolist(data));
  }, []);
  async function sendAddTodo() {
    //await postData();
    //getData();
    await nodeService.postTodoData(addTodo);
    nodeService.getTodoData().then((data) => setTodolist(data));
  }
  async function delSelectTodo() {
    //await deleteData();
    //console.log("dele");
    //getData();
    if(selectTodo!== undefined)
    {
      await nodeService.delTodoData(selectTodo.id);
      nodeService.getTodoData().then((data) => setTodolist(data));
    }
    
  }
  return (
    <div className="App">
      <div>
        <h5>Add todo item</h5>
        <InputText id="inputArea"
          value={addTodo}
          onChange={(e) => setAddTodo(e.target.value)}
        />
        <Button id="subBtn" label="submit" onClick={sendAddTodo} />
      </div>
      <div className="card">
        <DataTable
          value={todolist}
          selection={selectTodo}
          onSelectionChange={(e) => setSelectTodo(e.value)}
          dataKey="id"
        >
          <Column selectionMode="single"></Column>
          <Column field="name" header="Name"></Column>
        </DataTable>
        <Button
        id="subDel"
          className="p-button-secondary"
          label="Delete"
          onClick={delSelectTodo}
        />
      </div>
    </div>
  );
}
