import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { store } from "./core";
import { AuthService } from "./services/AuthService";
import { PostsService } from "./services/PostsService";
import { BrowserRouter } from "react-router-dom";

AuthService.setCredentials({
  URL: "https://studapi.teachmeskills.by",
});
AuthService.prefix = "auth";

PostsService.setCredentials({
  URL: "https://studapi.teachmeskills.by",
});
PostsService.prefix = "blog/posts";

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
