import { createBrowserRouter } from "react-router-dom";
import Root from "@pages/Root";
import Timer from "@pages/Timer";


const c = () => {
  return <> TESTSET </>
}
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "timer",
        element: <Timer />,
      },
    ]
  },
]);

export default router;