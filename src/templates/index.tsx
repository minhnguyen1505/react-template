import React, { Component } from "react";
import {
  BrowserRouter,
  Route,
  Switch
  // Redirect
} from "react-router-dom";
import AuthTemplate from "./AuthTemplate/AuthTemplate";
import PublicTemplate from "./PublicTemplate/PublicTemplate";
import authRoutes from "../router/authRoutes";
import publicRoutes from "../router/publicRoutes";
import history from "../router/history";
import { checkCookie } from "../common/helpers/cookies";

// import { connect } from 'react-redux';
// import NotFound from './public/NotFound';

interface TemplateProps {
  history?: any;
}
interface TemplateState {
  isLoggedIn: boolean;
}

class Template extends Component<TemplateProps, TemplateState> {
  constructor(props: TemplateProps) {
    super(props);
    this.state = { isLoggedIn: false };
    // this.userActions = new UserActions(this.props.dispatch);
  }
  render() {
    // const user = this.props.user;
    // if (!user.verified) { return (<div>Loading...</div>); }
    return (
      <BrowserRouter>
        <Switch>
          {checkCookie() === null ? (
            <PublicTemplate>
              {publicRoutes.map((route, index) => {
                return (
                  <Route
                    exact={route.exact}
                    key={index}
                    path={route.path}
                    component={route.component}
                  />
                );
              })}
            </PublicTemplate>
          ) : (
            <AuthTemplate>
              {authRoutes.map((route, index) => {
                return (
                  <Route
                    key={index}
                    path={route.path}
                    component={route.component}
                  />
                );
              })}
            </AuthTemplate>
          )}
          {/* <Route component={NotFound} /> */} */}
        </Switch>
      </BrowserRouter>
    );
  }
}

// function mapStateToProps(state, props) { return { user: state } }
// function mapDispatchToProps(dispatch) { return { dispatch }; }

export default // connect(
//     mapStateToProps,
//     mapDispatchToProps
// )
Template;
