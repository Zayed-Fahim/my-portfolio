import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "../../Layout/Main";
import Blog from "../Blog/Blog";
import Home from "../Home/Home";
import AllProjects from "../Projects/AllProjects";
import ProjectDetails from "../Projects/ProjectDetails";
import ProjectMedia from "../Projects/ProjectMedia";

const Route = ({ setIsLoading, isLoading }) => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        {
          path: "/",
          element: <Home setIsLoading={setIsLoading} isLoading={isLoading} />,
        },
        {
          path: "/blog",
          element: <Blog setIsLoading={setIsLoading} isLoading={isLoading} />,
        },
        {
          path: "/projects",
          element: (
            <AllProjects setIsLoading={setIsLoading} isLoading={isLoading} />
          ),
        },
        {
          path: "/projects/:projectID/:websiteName",
          loader: async ({ params }) => {
            return fetch(
              `https://zayed-fahim-portfolio.vercel.app/projects/${params.projectID}/${params.websiteName}`
            );
          },
          element: (
            <ProjectDetails setIsLoading={setIsLoading} isLoading={isLoading} />
          ),
        },
        {
          path: "/projects/:projectID/:websiteName/media",
          loader: async ({ params }) => {
            return fetch(
              `https://zayed-fahim-portfolio.vercel.app/projects/${params.projectID}/${params.websiteName}/media`
            );
          },
          element: (
            <ProjectMedia setIsLoading={setIsLoading} isLoading={isLoading} />
          ),
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
