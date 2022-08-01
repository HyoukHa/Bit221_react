/**
 * 
 * 
 */

import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import Slider from '../ui/Slider';

const styles = {
  h5: {
    paddingTop: 100,
  },

  main: {
    height: 850,
    color: 'gray',
    backgroundColor: 'white',
  }
}

const Content = () => {
  const { isDark } = useContext(ThemeContext);

  const convertDark = () => {
    return { ...styles.main, backgroundColor: '#222', color: '#eee' }
  }


  return (
    <main style={isDark ? convertDark() : styles.main}>
      <div className="container text-center">
        <h5 style={styles.h5}></h5>
        <Slider />
      </div>
    </main>
  );
};

export default Content;