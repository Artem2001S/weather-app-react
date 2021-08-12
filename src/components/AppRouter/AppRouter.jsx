import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import PropTypes from 'prop-types';

const AppRouter = ({ routes }) => {
  return (
    <Router>
      <Switch>
        {routes.map(({ path, exact, component: Component }) => (
          <Route path={path} exact={exact} component={Component} />
        ))}
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};

AppRouter.propTypes = {
  routes: PropTypes.array.isRequired,
};

export default React.memo(AppRouter);
