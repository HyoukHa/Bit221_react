import React from "react";
import {useNavigate} from "react-router";
import KAKAO_LOGIN from "./media/img/kakao_login.png";

/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";

const KakaoLogin = () => {
  const REST_API_KEY = "09a98e92900d20878612b7c4f41272d5";
  const REDIRECT_URI = "http://localhost:3000/oauth/kakao/callback";
  const CLIENT_SECRET = "pklDNk8W6J4BYHG4663MHcjwWF2SUB7R";
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code&state=${CLIENT_SECRET}`;

  const navigate = useNavigate();
  return (
    <div css={cssWrapper}>
      <a href={KAKAO_AUTH_URL}>
        <img src={KAKAO_LOGIN} />
      </a>
      <div>
        <button
          onClick={() => {
            navigate(-1);
          }}
        >
          back
        </button>
      </div>
    </div>
  );
};

const cssWrapper = css`
  /* img {
    border: 1px solid gray;
    border-radius: 10px;
  } */
`;

export default KakaoLogin;
