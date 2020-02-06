import React from "react";
import "./App.css";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { reducer } from "./store/reducers";
import PrivateRoute from "./components/PrivateRoute";
import CatalogContainer from "./components/CatalogContainer";
import News from "./components/News";
import MyProfileContainer from "./components/MyProfileContainer";
import HeaderContainer from "./components/HeaderContainer";
import Footer from "./components/Footer/Footer";

export const store = createStore(reducer, applyMiddleware(thunk));
const auth = () => store.getState().login;

function App() {
  return (
    <div>
      <Provider store={store}>
        <div className="App">
          <div className="wrapper">
            <Router history={createBrowserHistory()}>
              <HeaderContainer />
              <Switch>
                <Route
                  path={["/", "/catalog"]}
                  component={CatalogContainer}
                  exact
                />
                <Route path="/news" component={News} exact />
                <PrivateRoute
                  path="/myprofile"
                  component={MyProfileContainer}
                  auth={auth}
                  exact
                />
              </Switch>
            </Router>
            <Footer />
          </div>
        </div>
      </Provider>
    </div>
  );
}

export default App;
