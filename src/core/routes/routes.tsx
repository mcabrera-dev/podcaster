import React from "react";
import { RouteObject } from "react-router-dom";
import Home from "../../features/podcast/ui/views/Home";
import PodcastChapterDetail from "../../features/podcast/ui/views/PodcastChapterDetail";
import PodcastDetail from "../../features/podcast/ui/views/PodcastDetail";
import Layout from "../../features/podcast/ui/views/Layout";
import NoMatch from "../../features/podcast/ui/views/NoMatch";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "/podcast/:podcastId",
        element: <PodcastDetail />,
      },
      {
        path: "/podcast/:podcastId/episode/:chapterId",
        element: <PodcastChapterDetail />,
      },
      { path: "*", element: <NoMatch /> },
    ],
  },
];

export default routes;
