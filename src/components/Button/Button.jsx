import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './Button.module.scss';
import { useHistory } from 'react-router-dom';

const Button = ({ className, to, type, children, onClick }) => {
  const history = useHistory();

  return (
    <button
      className={classNames(styles.Button, className)}
      onClick={to ? () => history.push(to) : onClick}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
  to: PropTypes.string,
  children: PropTypes.node,
  onClick: PropTypes.func,
};

export default React.memo(Button);
