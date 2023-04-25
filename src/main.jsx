import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";

// import App from "./App";
import "./index.css";
import { Provider } from "react-redux";
import store from "./slice/store";
import Loading from "./components/Loading";

const App = lazy(() => import("./App"));

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <Provider store={store}>
    <Suspense fallback={<Loading />}>
      <App />
    </Suspense>
  </Provider>
  // </React.StrictMode>
);
