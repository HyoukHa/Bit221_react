import React from "react";
import ogu from "./media/img/ogu.png";

/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";

const Comments = () => {
  return (
    <div css={cssWrapper}>
      <div className="comment">
        <img src={ogu} alt="custom_img" />
        <div className="user-info-name container">Tom</div>
      </div>

      <div className="comment-text container">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit, optio
        illo qui repellat eveniet, earum impedit veniam porro, nobis neque
        aliquam maxime reprehenderit dignissimos sed quibusdam voluptates.
        Repellendus, tempora ratione.
        <div className="time">2022.7.25 4:38 PM</div>
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
    > img {
      width: 70px;
      height: 70px;
      border-radius: 35px;
      border: 1px solid black;
    }

    > .user-info-name {
      font-weight: 700;
      color: #111;
      text-align: center;
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
    margin-left: 8px;

    > .time {
      margin-top: 20px;
    }
  }
`;

export default Comments;
