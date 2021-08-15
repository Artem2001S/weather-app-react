import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import styles from './Title.module.scss';

const Title = ({
  centered,
  children,
  medium,
  className,
  large,
  small,
  white,
}) => {
  return (
    <div
      className={classNames(
        { [styles.centered]: centered },
        { [styles.medium]: medium },
        { [styles.large]: large },
        { [styles.white]: white },
        { [styles.small]: small },
        className,
        styles.Title
      )}
    >
      {children}
    </div>
  );
};

Title.propTypes = {
  centered: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  large: PropTypes.bool,
  small: PropTypes.bool,
  white: PropTypes.bool,
  medium: PropTypes.bool,
};

export default React.memo(Title);
