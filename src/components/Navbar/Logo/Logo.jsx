import React from 'react';
import logoImg from './cloudy.svg';
import styles from './Logo.module.scss';

const Logo = () => {
  return <img className={styles.Logo} src={logoImg} alt="Logo" />;
};

export default React.memo(Logo);
