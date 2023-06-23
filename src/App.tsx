import { useRoutes } from "react-router-dom";

import routes from "./core/routes/routes";

export default function App() {
  let element = useRoutes(routes);

  return (
    <main>
      <div className="title">Podcaster</div>
      {element}
    </main>
  );
}
