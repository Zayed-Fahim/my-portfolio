import React, { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "../../Layout/Main";
import Blog from "../Blog/Blog";
import Home from "../Home/Home";
import AllProjects from "../Projects/AllProjects";
import ProjectDetails from "../Projects/ProjectDetails";

const Route = () => {
  const [projects, setProjects] = useState([]);
  console.log(projects);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        {
          path: "/home",
          element: <Home projects={projects} setProjects={setProjects} />,
        },
        {
          path: "/",
          element: <Home projects={projects} setProjects={setProjects} />,
        },
        {
          path: "/blog",
          element: <Blog />,
        },
        {
          path: "/projects",
          element: (
            <AllProjects projects={projects} setProjects={setProjects} />
          ),
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
