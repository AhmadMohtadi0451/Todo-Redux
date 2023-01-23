import React from "react";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import Router from "./Router/Router";

function App() {
  return (
    <React.Fragment>
      <RouterProvider router={Router} />
    </React.Fragment>
  );
}

export default App;
