import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Body from "../components/Body";
import MainComponent from "../components/MainComponent";
import SearchVideoList from "../components/SearchVideoList";
import WatchPage from "../components/WatchPage";

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
        children: [
          {
            path: "/",
            element: <MainComponent />,
          },
          {
            path: "watch",
            element: <WatchPage />,
          },
          {
            path: "results",
            element: <SearchVideoList />,
          },
        ],
      },
    ],
  },
]);
