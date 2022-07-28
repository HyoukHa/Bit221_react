import React from "react";

/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";

const Header = () => {
  return (
    <div css={cssWrapper}>
      <h3>Header</h3>
    </div>
  );
};

const cssWrapper = css`
  background-color: yellow;
`;

export default Header;
