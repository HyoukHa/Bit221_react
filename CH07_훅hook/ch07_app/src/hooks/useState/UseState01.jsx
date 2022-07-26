import React from "react";

/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";

const UseState01 = () => {
  return (
    <div className="container" css={cssWrapper}>
      hello
    </div>
  );
};

const cssWrapper = css`
  color: white;
  background-color: crimson;
`;

export default UseState01;
