import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';

const AppRouter = ({ routes }) => {
  return (
    <Switch>
      {routes.map(({ path, exact, component: Component }) => (
        <Route key={path} path={path} exact={exact} component={Component} />
      ))}
      <Redirect to="/" />
    </Switch>
  );
};

AppRouter.propTypes = {
  routes: PropTypes.array.isRequired,
};

export default React.memo(AppRouter);
