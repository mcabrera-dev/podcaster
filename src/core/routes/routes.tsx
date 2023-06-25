import React from "react";
import { RouteObject } from "react-router-dom";
import Home from "../../ui/views/Home";
import PodcastChapterDetail from "../../ui/views/PodcastChapterDetail";
import PodcastDetail from "../../ui/views/PodcastDetail";
import Layout from "../../ui/views/Layout";
import NoMatch from "../../ui/views/NoMatch";

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
