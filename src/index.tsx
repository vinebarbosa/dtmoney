import React from "react";
import ReactDOM from "react-dom";
import { createServer, Model } from "miragejs";
import { App } from "./App";

createServer({
  models: {
    transaction: Model,
  },
  routes() {
    this.namespace = "api";
    this.get("/transactions", () => {
      return this.schema.all("transaction");
    });
    this.post("/transactions", (schema, request) => {
      const { title, amount, type, category } = JSON.parse(request.requestBody);
      return this.schema.create("transaction", {
        id: String(new Date().getTime()),
        title,
        amount,
        type,
        category,
        created_at: new Date("2022-04-20"),
      });
    });
  },
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
