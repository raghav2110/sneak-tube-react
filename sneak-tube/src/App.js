import { Provider } from "react-redux";
import "./App.css";
import Header from "./components/Header";
import MainComponent from "./components/MainComponent";
import store from "./utils/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Body from "./components/Body";
import WatchPage from "./components/WatchPage";

const appRouter = createBrowserRouter([
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
    ],
  },
]);

function App() {
  return (
    <div>
      <Provider store={store}>
        <Header />
        <RouterProvider router={appRouter} />
      </Provider>
    </div>
  );
}

export default App;
