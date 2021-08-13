import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import styles from './Message.module.scss';

const Message = ({ children, className }) => {
  return (
    <div className={classNames(styles.Message, className)}>{children}</div>
  );
};

Message.propTypes = {
  children: PropTypes.node,
  classNames: PropTypes.string,
};

export default React.memo(Message);
