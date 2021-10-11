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
import { PublicService } from "./services/PublicService";
import { UserService } from "./services/UserService";

AuthService.setCredentials({
  URL: "https://studapi.teachmeskills.by",
});
AuthService.prefix = "auth";

PostsService.setCredentials({
  URL: "https://studapi.teachmeskills.by",
});

PostsService.prefix = "blog/posts";

PublicService.setCredentials({
  URL: "https://studapi.teachmeskills.by",
});
PublicService.prefix = "blog/";

UserService.setCredentials({
  URL: "https://studapi.teachmeskills.by",
});
UserService.prefix = "auth/users";

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
