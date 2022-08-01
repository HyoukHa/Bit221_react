/**
 * 
 * 
 */

import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { NavLink } from 'react-router-dom';
import ogu from "../../../media/img/ogu1.png";
import { ThemeContext } from '../context/ThemeContext';
import "./layout.css";

const styles = {
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    color: '#111',
    backgroundColor: '#eee',
    justifyContent: 'center',
  },
  h4: {
    marginLeft: 10,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },

  ul: {
    width: 400,
    listStyle: 'none',
    display: 'flex',
    justifyContent: 'space-between',
    cursor: 'pointer',
  },
};


const Header = () => {
  const { isDark } = useContext(ThemeContext);
  const navigate = useNavigate();

  const convertDark = () => {
    return { ...styles.header, backgroundColor: '#333', color: '#eee' }
  }

  return (
    <>
      <header style={isDark ? convertDark() : styles.header}>
        <img src={ogu} alt="" style={styles.avatar} />
        <h4 style={styles.h4}><i className="fa-solid fa-house-user"></i>title</h4>


        <nav>

          <NavLink to="/" >Home</NavLink>
          <NavLink to="/javascript" >JavaScript</NavLink>
          <NavLink to="/react" >React</NavLink>
          <NavLink to="/java" >Java</NavLink>
          <NavLink to="/springboot" >Springboot</NavLink>

          {/* <a onClick={() => { navigate("/") }}>Home</a>
          <a onClick={() => { navigate("/javascript") }}>JavaScript</a>
          <a onClick={() => { navigate("/react") }}>React</a>
          <a onClick={() => { navigate("/java") }}>Java</a>
          <a onClick={() => { navigate("/springboot") }}>SpringBoot</a> */}

        </nav>

      </header>
    </>
  );
};

export default Header;