import React from "react";

/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";
import Avatar from "./Avatar";
import Dtime from "./Dtime";

const Comments = ({name, content, avatarUrl}) => {
  return (
    <div css={cssWrapper}>
      <div className="comment">
        <Avatar avatarUrl={avatarUrl} />
        <div className="user-info-name container">
          <h3>{name}</h3>
        </div>
      </div>

      <div className="comment-text container">
        <p>{content}</p>
        <div className="time">
          <Dtime />
        </div>
      </div>
    </div>
  );
};

const cssWrapper = css`
  display: flex;
  margin: 8px;
  padding: 8px;
  justify-content: center;

  > .comment {
    justify-content: center;
    > .user-info-name {
      font-weight: 700;
      color: #111;
      text-align: center;
    }

    > h3 {
      text-align: center;
      width: inherit;
    }
  }

  > .comment-text {
    padding: 15px;
    background-color: rgba(0, 0, 0, 0.7);
    color: white;
    border-radius: 20px;
  }

  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;

    > .time {
      margin-top: 20px;
    }
  }
`;

export default Comments;
