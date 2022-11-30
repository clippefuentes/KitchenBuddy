import { createBrowserRouter } from "react-router-dom";
import Root from "@pages/Root";
import Timer from "@pages/Timer";

export const routes = [
  {
    path: "/",
    element: <Root />,
    // children: [
    //   {
    //     path: "timer",
    //     element: <Timer />,
    //   },
    // ]
  }, {
    path: "timer",
    element: <Timer />,
  }
]

const router = createBrowserRouter(routes);

export default router;