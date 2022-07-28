import React, {useState, useEffect} from "react";
import {useNavigate} from "react-router";

const Main = () => {
  const navigate = useNavigate();

  return (
    <div>
      <button
        onClick={() => {
          navigate("/login");
        }}
      >
        Login
      </button>
      <button
        onClick={() => {
          navigate("/kakaoLogin");
        }}
      >
        Kakao Login
      </button>
    </div>
  );
};

export default Main;
