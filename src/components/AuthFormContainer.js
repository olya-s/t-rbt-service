import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { authorize } from "../store/actions";
import AuthForm from "./AuthForm/AuthForm";

const mapStateToProps = state => ({
  login: state.login
});

const mapDispatchToProps = {
  authorize
};

const AuthFormContainer = props => {
  return (
    <div className="auth">
      {!props.login && (
        <AuthForm login={props.login} authorize={props.authorize} />
      )}
      {!!props.login && <Redirect to="/" />}
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthFormContainer);
