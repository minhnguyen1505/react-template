import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import AuthTemplate from './AuthTemplate/AuthTemplate';
import PublicTemplate from './PublicTemplate/PublicTemplate';
import authRoutes from '../router/authRoutes';
import publicRoutes from '../router/publicRoutes';
import history from '../router/history';
import { checkCookie } from '../common/helpers/cookies';

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
  }
  render() {
    return (
      <BrowserRouter>
        <Switch>
          {checkCookie() === null ? (
            <React.Fragment>
              <Redirect to="/login" />
              <PublicTemplate>
                {publicRoutes.map((route, index) => {
                  return (
                    <Route
                      exact={route.exact}
                      key={index}
                      path={route.path}
                      history={history}
                      component={route.component}
                    />
                  );
                })}
              </PublicTemplate>
            </React.Fragment>
          ) : (
            <AuthTemplate>
              {authRoutes.map((route, index) => {
                return (
                  <Route
                    exact={route.exact}
                    key={index}
                    path={route.path}
                    history={history}
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

export default Template;
