import React, {useState, useEffect} from "react";
import ogu from "./media/img/ogu.png";

/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";

const Book = ({title, pages}) => {
  return (
    <div css={cssWrapper}>
      <img src={ogu} />
      <div className="hello">
        <h2>이 책의 제목은 {title} 입니다.</h2>
        <h4>이 책은 총 {pages} 페이지 입니다.</h4>
      </div>
    </div>
  );
};

const cssWrapper = css`
  display: flex;
  background-color: yellow;
  color: blue;
  margin: 10px;
  gap: 50px;

  > img {
    width: 100px;
    border-radius: 50px;
  }
`;

export default Book;
