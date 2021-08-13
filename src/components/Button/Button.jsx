import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './Button.module.scss';

const Button = ({ className, type, children, onClick }) => {
  return (
    <button className={classNames(styles.Button, className)} onClick={onClick}>
      {children}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
  children: PropTypes.node,
  onClick: PropTypes.func,
};

export default React.memo(Button);
