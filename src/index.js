import { StrictMode } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BillProvider } from "./context/BillContext";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <BillProvider>
      <App />
    </BillProvider>
  </StrictMode>,
  rootElement
);
