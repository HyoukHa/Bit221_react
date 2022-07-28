import React, {useEffect, useState} from "react";

const Profile = () => {
  const [userId, setUserId] = useState();
  const [nickname, setNickname] = useState();
  const [profileImg, setProfileImg] = useState();

  const getProfile = async () => {
    try {
      let data = await window.Kakao.API.request({
        url: "/v2/user/me",
      });

      setUserId(data.id);
      setNickname(data.properties.nickname);
      setProfileImg(data.properties.profile_image);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getProfile();
  }, []);

  return (
    <div>
      <h2>{userId}</h2>
      <h2>{nickname}</h2>
      <img src={profileImg} />
    </div>
  );
};

export default Profile;
