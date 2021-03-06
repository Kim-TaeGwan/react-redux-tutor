import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createStore } from "redux";
import rootReducer from "./modules";
import { composeWithDevTools } from "@redux-devtools/extension";

const store = createStore(rootReducer, composeWithDevTools());
const root = ReactDOM.createRoot(document.getElementById("root"));
// 리액트 컴포넌트에서 스토어를 사용할 수 있도록 App 컴포넌트를 react-redux 에서 제공하는 Provider 컴포넌트로 감싸 준다.
// store 를 props 로 전달해 주어야 한다.
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
