import React from "react";

/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";

const Footer = () => {
  return (
    <div css={cssWrapper}>
      <h3>Footer</h3>
    </div>
  );
};

const cssWrapper = css`
  background-color: lightblue;
`;

export default Footer;
