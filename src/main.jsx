import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
// import { Provider } from "react-redux";
// import { PersistGate } from "redux-persist/integration/react";
import { BrowserRouter } from "react-router-dom";
// import { store, persistor } from "./redux/store.js";
import App from "./App.jsx";
import "./index.css";
import "modern-normalize/modern-normalize.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <Provider store={store}> */}
    {/* <PersistGate loading={null} persistor={persistor}> */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
    {/* </PersistGate> */}
    {/* </Provider> */}
  </StrictMode>
);
