import React, { useEffect } from "react";
import { connect } from "react-redux";
import { authorize } from "../store/actions";
import MyProfile from "./MyProfile/MyProfile";

const mapStateToProps = state => ({
  login: state.login,
  passw: state.passw
});

const mapDispatchToProps = {
  authorize
};

let MyProfileContainer = props => {
  const { authorize, login, passw } = { ...props };

  useEffect(() => {
    authorize(login.subscriber.subsIdent, passw);
  }, [authorize, login.subscriber.subsIdent, passw]);

  return (
    <div>
      {props.login && <MyProfile login={props.login} path={props.match.path} />}
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(MyProfileContainer);
