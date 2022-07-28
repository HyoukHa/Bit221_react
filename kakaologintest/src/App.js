import {BrowserRouter, Route, Routes} from "react-router-dom";

/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";

import Main from "./Main";
import KakaoLogin from "./KakaoLogin";
import Login from "./Login";
import Header from "./Header";
import Footer from "./Footer";
import Auth from "./Auth";
import Profile from "./Profile";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/kakaoLogin" element={<KakaoLogin />} />
          <Route path="/oauth/kakao/callback" element={<Auth />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
