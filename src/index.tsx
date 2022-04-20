import React from "react";
import ReactDOM from "react-dom";
import { createServer } from "miragejs";
import { App } from "./App";

createServer({
  routes() {
    this.namespace = "api";
    this.get("/transactions", () => {
      return [
        {
          id: 1,
          title: "Salary",
          amount: 1000,
          created_at: new Date(),
          type: "deposit",
          category: "salary",
        },
        {
          id: 2,
          title: "Gift",
          amount: -200,
          created_at: new Date(),
          type: "withdraw",
          category: "gift",
        },
        {
          id: 3,
          title: "Book",
          amount: -10,
          created_at: new Date(),
          type: "withdraw",
          category: "education",
        },
      ];
    });
  },
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
