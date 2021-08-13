import React from 'react';
import classNames from 'classnames';
import styles from './Container.module.scss';

const Container = ({ className, children }) => (
  <div className={classNames(styles.Container, className)}>{children}</div>
);

export default React.memo(Container);
