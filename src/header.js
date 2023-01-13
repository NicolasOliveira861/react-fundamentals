import React from 'react';
import PropTypes from 'prop-types';
import { useThemeContext } from './context';

import styles from './Header.scss';

export default function Header({ title, children }) {
  const { handleChangeTheme } = useThemeContext();

  return (
    <>
      <h1 className={styles.title}>{title}</h1>
      {children}
      <button onClick={handleChangeTheme}>Dark/Light</button>
    </>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};

Header.defaultProps = {
  title: `JStack's Blog`,
};
