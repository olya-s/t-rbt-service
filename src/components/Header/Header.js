import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import SearchPanel from "../SearchPanel/SearchPanel";
import AuthForm from "../AuthForm/AuthForm";
import MessageForm from "../MessageForm/MessageForm";
import "../../App.css";
import "./style.css";

const Header = props => {
  const [openAuth, setOpenAuth] = useState(false);
  const [openMes, setOpenMes] = useState(false);

  const handleAuthOpen = () => {
    setOpenAuth(true);
  };

  const checkLogin = () => {
    if (!props.login) {
      setOpenAuth(true);
    }
  };

  const handleClose = () => {
    setOpenMes(false);
    props.resetMesForm();
  };

  useEffect(() => {
    if (props.message || props.error) {
      setOpenMes(true);
    }
  }, [props.message, props.error]);

  return (
    <header className="header">
      <div className="layout-row">
        <Link to="/" className="logo">
          <div>T-RBT Service</div>
        </Link>
        <ul className="layout-row li-links lang-links">
          <li>EN</li>
          <li>|</li>
          <li>RU</li>
        </ul>
      </div>
      <div className="layout-row">
        <nav>
          <ul className="layout-row li-links nav-menu">
            <li>
              <NavLink to="/catalog" className="nav-link">
                Catalog
              </NavLink>
            </li>
            <li>
              <NavLink to="/news" className="nav-link">
                News
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/myprofile"
                className="nav-link"
                onClick={checkLogin}
              >
                My profile
              </NavLink>
            </li>
          </ul>
        </nav>
        {!props.login && (
          <Link
            to="/"
            onClick={() => {
              handleAuthOpen();
            }}
          >
            Login
          </Link>
        )}
        {!!props.login && (
          <div>
            <span>You entered as {props.login.subscriber.subsIdent} -> </span>
            <Link
              to="/"
              onClick={() => {
                props.logout();
              }}
            >
              Logout
            </Link>
          </div>
        )}
        <AuthForm
          open={openAuth}
          handleClose={() => setOpenAuth(false)}
          authorize={props.authorize}
        />
      </div>
      <SearchPanel searchContent={props.searchContent} />
      <MessageForm
        open={openMes}
        handleClose={handleClose}
        message={props.message}
        error={props.error}
        resetMesForm={props.resetMesForm}
      />
    </header>
  );
};

export default Header;
