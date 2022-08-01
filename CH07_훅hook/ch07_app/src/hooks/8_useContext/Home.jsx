/**
 * 전체 페이지의 메인이 되는 페이지
 */

import React, { useState } from 'react';
import { ThemeContext } from './context/ThemeContext';
import Content from './layout/Content';
import Footer from './layout/Footer';
import Header from './layout/Header';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Java from './pages/Java';
import JavaScript from './pages/JavaScript';
import Reacts from './pages/Reacts';
import SpringBoot from './pages/SpringBoot';

const Home = () => {
  // isDark 전역변수
  const [isDark, setIsDark] = useState(true);

  return (
    <div>

      <ThemeContext.Provider value={{ isDark, setIsDark }}>
        <Header />
        <Routes>
          <Route path="/" element={<Content />} exact />
          <Route path="/java" element={<Java />} exact />
          <Route path="/javascript" element={<JavaScript />} exact />
          <Route path="/react" element={<Reacts />} exact />
          <Route path="/react" element={<SpringBoot />} exact />
        </Routes>
        <Footer />
      </ThemeContext.Provider>
    </div>
  );
};

export default Home;