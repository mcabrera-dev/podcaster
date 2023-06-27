import { useRoutes } from "react-router-dom";
import './App.css'


import routes from "./core/routes/routes";
import React from "react";

export default function App() {
  let element = useRoutes(routes);

  return (
    <main className="main">
      <div className="title">Podcaster</div>
      {element}
    </main>
  );
}
