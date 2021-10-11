import * as React from "react";
import { useEffect, memo } from "react";
import { MainTemplate } from "../template/MainTemplate";
import { Title } from "../atoms/Title/Title";
import { Input } from "../atoms/Input";
import { Button } from "../atoms/Button";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useParams,
} from "react-router-dom";
import { useDispatch } from "react-redux";
import { sendRegistrationConfirmationAction } from "../../core/actions/registrationActions";

export const SuccessRegistration = memo(() => {
  const history = useHistory();
  const handlerChangePage = () => {
    history.push("/login");
  };
  const params = useParams() as any;
  const dispatch = useDispatch();
  console.log(`params#####`, params);

  useEffect(() => {
    if (params?.uid && params?.token) {
      dispatch(sendRegistrationConfirmationAction(params));
    }
  }, [dispatch, params, params?.token, params?.uid]);

  return (
    <div className="">
      <MainTemplate
        titleBlock={<Title title={"Success"} isActive={true} />}
        mainBlock={
          <div>
            <div className="inputs-wrapper">
              <div className="page-text">
                <p>Email confirmed.</p>
                <p>Your registration is now completed </p>
              </div>
              <Button
                text={"Login"}
                onClick={handlerChangePage}
                isValid={true}
              />
            </div>
          </div>
        }
      />
    </div>
  );
});
