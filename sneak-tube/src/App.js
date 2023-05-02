import { Provider } from "react-redux";
import "./App.css";
import Header from "./components/Header";
import store from "./utils/store";
import { Outlet } from "react-router";

function App() {
  return (
    <div>
      <Provider store={store}>
        <Header />
        <Outlet />
      </Provider>
    </div>
  );
}

export default App;
