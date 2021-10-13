import React from "react";
import "./App.css";
import { Button } from "./components/atoms/Button";
import { Input } from "./components/atoms/Input";
import { Header } from "./components/molecules/Header";
import { MainTemplate } from "./components/template/MainTemplate";
import { Login } from "./components/pages/Login";
import { Registration } from "./components/pages/Registration";
import { RegConfirmation } from "./components/pages/RegConfirmation";
import { SuccessRegistration } from "./components/pages/SuccessRegistration";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import { ResetPassword } from "./components/pages/ResetPassword";
import { ResetPasswordConfirm } from "./components/pages/ResetPasswordConfirm";
import { NewPassword } from "./components/pages/NewPassword";
import { SuccessNewPassword } from "./components/pages/SuccessNewPassword";
import { Home } from "./components/pages/Home";
import { PrivateRoute } from "./router/PrivateRoute";
import { PublicRoute } from "./router/PublicRoute";
import { NotFound } from "./components/pages/NotFound";
import { AllPosts } from "./components/pages/AllPosts";
import { MyPosts } from "./components/pages/MyPosts";
import { AddPost } from "./components/pages/AddPost";
import { SelectedPost } from "./components/pages/SelectedPost";

function App() {
  return (
    <div>
      <Switch>
        <PublicRoute component={Home} path="/" exact />
        <PublicRoute component={Login} path="/login" exact />
        <PublicRoute component={Registration} path="/registration" exact />
        <PublicRoute
          component={RegConfirmation}
          path="/reg-confirmation"
          exact
        />
        <PublicRoute
          component={SuccessRegistration}
          path="/activate/:uid/:token"
          exact
        />
        <PublicRoute component={ResetPassword} path="/reset-password" exact />
        <PublicRoute
          component={ResetPasswordConfirm}
          path="/reset-password-confirm"
          exact
        />
        <PublicRoute component={NewPassword} path="/new-password" exact />
        <PublicRoute
          component={SuccessNewPassword}
          path="/success-new-password"
          exact
        />

        <PrivateRoute component={AllPosts} path="/all-posts" exact />
        <PrivateRoute component={MyPosts} path="/my-posts" exact />
        <PrivateRoute component={AddPost} path="/posts/add" exact />
        <PrivateRoute component={SelectedPost} path="/posts/:id" />
        <PublicRoute component={NotFound} exact />
      </Switch>
    </div>
  );
}
/* return (
    <div className="app">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/registration">
            <Registration />
          </Route>
          <Route exact path="/reg-confirmation">
            <RegConfirmation />
          </Route>
          <Route exact path="/success-registration">
            <SuccessRegistration />
          </Route>
          <Route exact path="/reset-password">
            <ResetPassword />
          </Route>
          <Route exact path="/reset-password-confirm">
            <ResetPasswordConfirm />
          </Route>
          <Route exact path="/new-password">
            <NewPassword />
          </Route>
          <Route exact path="/success-new-password">
            <SuccessNewPassword />
          </Route>
        </Switch>
      </Router>
    </div>
  );
} */

export default App;
