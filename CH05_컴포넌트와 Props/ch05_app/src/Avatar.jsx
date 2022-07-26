import React from "react";

/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";

const Avatar = ({avatarUrl}) => {
  return (
    <div css={cssWrapper}>
      <img src={avatarUrl} alt="avatar-img" />
    </div>
  );
};

const cssWrapper = css`
  > img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    border: 1px solid black;
    margin-right: 7px;
  }
`;

export default Avatar;
