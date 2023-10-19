import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "../../Layout/Main";
import Blog from "../Blog/Blog";
import Home from "../Home/Home";
import AllProjects from "../Projects/AllProjects";
import ProjectDetails from "../Projects/ProjectDetails";
import ProjectMedia from "../Projects/ProjectMedia";

const Route = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        {
          path: "/home",
          element: <Home />,
        },
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/blog",
          element: <Blog />,
        },
        {
          path: "/projects",
          element: <AllProjects />,
        },
        {
          path: "/projects/:projectID/:websiteName",
          loader: async ({ params }) => {
            return fetch(
              `https://zayed-fahim-portfolio.vercel.app/projects/${params.projectID}/${params.websiteName}`
            );
          },
          element: <ProjectDetails />,
        },
        {
          path: "/projects/:projectID/:websiteName/media",
          loader: async ({ params }) => {
            return fetch(
              `https://zayed-fahim-portfolio.vercel.app/projects/${params.projectID}/${params.websiteName}/media`
            );
          },
          element: <ProjectMedia />,
        },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
};

export default Route;
