import type { RouteObject } from "react-router-dom";
import { Outlet, Link, useRoutes, useParams } from "react-router-dom";
import Home from "./features/podcast/ui/views/Home";
import PodcastDetail from "./features/podcast/ui/views/PodcastDetail";
import PodcastChapterDetail from "./features/podcast/ui/views/PodcastChapterDetail";
import routes from "./core/routes/routes";

export default function App() {
  let element = useRoutes(routes);

  return (
    <div>
      <h1>Podcaster</h1>

      {element}
    </div>
  );
}