import React, {useEffect} from "react";
import axios from "axios";
import qs from "qs";
import {useNavigate} from "react-router-dom";

const Auth = () => {
  const REST_API_KEY = "09a98e92900d20878612b7c4f41272d5";
  const REDIRECT_URI = "http://localhost:3000/oauth/kakao/callback";
  const CLIENT_SECRET = "pklDNk8W6J4BYHG4663MHcjwWF2SUB7R";

  const code = new URL(window.location.href).searchParams.get("code");

  const navigate = useNavigate();

  const getToken = async () => {
    const payload = qs.stringify({
      grant_type: "authorization_code",
      client_id: REST_API_KEY,
      redirect_uri: REDIRECT_URI,
      code: code,
      client_secret: CLIENT_SECRET,
    });

    try {
      const res = await axios.post(
        "https://kauth.kakao.com/oauth/token",
        payload
      );

      // Kakao js sdk 초기화
      window.Kakao.init(REST_API_KEY);

      // access token 설정
      window.Kakao.Auth.setAccessToken(res.data.access_token);
      navigate("/profile");
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getToken();
  }, []);

  return null;
};

export default Auth;
