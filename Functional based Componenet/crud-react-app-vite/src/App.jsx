import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./pages/Layout";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import CreateCourse from "./components/courses/CreateCourse";
import AllCourses from "./components/courses/AllCourses";
import CourseDetails from "./components/courses/CourseDetails";
import EditCourse from "./components/courses/EditCourse";
import AllUsers from "./components/users/Allusers";
import SingleUser from "./components/users/SingleUser";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import PrivateRoute from "./helpers/PrivateRoute";
import PublicRoute from "./helpers/PublicRoute";
import Modal from "./modals/Modal";
import FetchGitUsers from "./FetchGitUsers";
import axios from "axios";
import CreateProduct from "./components/CreateProduct";

let router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
        children: [
          {
            path: "/",
            element: <AllCourses />,
          },
          {
            path: "create-course",
            element: (
              <PrivateRoute>
                <CreateCourse />
              </PrivateRoute>
            ),
          },
          {
            path: "git-users",
            element: (
              <FetchGitUsers>
                <CreateCourse />
              </FetchGitUsers>
            ),
            loader: async () => {
              let { data } = await axios.get("https://api.github.com/users");
              return data;
            },
          },
          {
            path: "create-product",
            element: <CreateProduct></CreateProduct>,
            action: async ({ request }) => {
              let payload = request.formData();
              await axios.post(
                "http://https//api.escuelajs.co/api/v1/products/",
                payload
              );
              return data;
            },
          },
          {
            path: ":id",
            element: <CourseDetails />,
          },
          {
            path: "edit/:id",
            element: (
              <PrivateRoute>
                <EditCourse />
              </PrivateRoute>
            ),
          },
          {
            path: "users",
            element: (
              <PrivateRoute>
                <AllUsers />
              </PrivateRoute>
            ),
          },
          {
            path: "/users/:id",
            element: (
              <PrivateRoute>
                <SingleUser />
              </PrivateRoute>
            ),
          },
        ],
      },
      {
        path: "/signup",
        element: (
          <PublicRoute>
           <Register />
          </PublicRoute>
        ),
      },
      {
        path: "/login",
        element: (
          <PublicRoute>
            <Modal>
              <Login />
            </Modal>
          </PublicRoute>
        ),
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
