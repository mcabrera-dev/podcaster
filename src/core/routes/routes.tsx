import React from "react";
import { RouteObject } from "react-router-dom";
import Home from "../../ui/views/Home";
import PodcastDetail from "../../ui/views/podcast-detail/PodcastDetail";
import Layout from "../../ui/views/Layout";
import NoMatch from "../../ui/views/NoMatch";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "podcast/:podcastId/*",
        element: <PodcastDetail />,
        children: [
          {
            path: "episode/:chapterId",
            element: <PodcastDetail />,
          },
        ],
      },
      { path: "*", element: <NoMatch /> },
    ],
  },
];

export default routes;
