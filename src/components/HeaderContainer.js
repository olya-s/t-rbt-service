import React from "react";
import { connect } from "react-redux";
import Header from "./Header/Header";
import {
  authorize,
  logout,
  resetMesForm,
  searchContent
} from "../store/actions";

const mapStateToProps = state => ({
  login: state.login,
  message: state.message,
  error: state.error,
  content: state.content,
  path: state.path
});

const mapDispatchToProps = {
  authorize,
  logout,
  resetMesForm,
  searchContent
};

const HeaderContainer = props => {
  return (
    <div>
      <Header
        login={props.login}
        message={props.message}
        error={props.error}
        authorize={props.authorize}
        logout={props.logout}
        resetMesForm={props.resetMesForm}
        searchContent={props.searchContent}
      />
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
