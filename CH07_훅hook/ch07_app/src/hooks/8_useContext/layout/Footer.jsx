/**
 * 
 * 
 */

import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const styles = {
  footer: {
    backgroundColor: '#eee',
    height: 100,
    display: 'flex',
    // flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#111',

  },

  contain: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'center',    
  }
};

const Footer = () => {
  const { isDark, setIsDark } = useContext(ThemeContext);

  const convertDark = () => {
    return { ...styles.footer, backgroundColor: '#333', color: '#eee' }
  }

  const toggle = () => {
    setIsDark(!isDark);
    console.log(isDark);
  }
  return (
    <>
      <footer style={isDark ? convertDark() : styles.footer}>
        <div style={styles.contain}>
          v0.0.2, Code Licensed HHDev
          <button className="btn btn-warning ms-5" onClick={toggle}>{isDark ? "light" : "dark"}</button>
        </div>
      </footer>

    </>
  );
};

export default Footer;