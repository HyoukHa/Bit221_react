import React from "react";
import Comments from "./Comments";
import ogu1 from "./media/img/ogu1.png";
import ogu2 from "./media/img/ogu2.png";
import ogu3 from "./media/img/ogu3.png";
import background from "./media/img/background.jpeg";

/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";

const CommentList = () => {
  const list = [
    {
      name: "이창주",
      content: "예비군 가야지~",
      avatarUrl: ogu1,
    },
    {name: "조주현", content: "주말에 알바가고싶다!!", avatarUrl: ogu2},
    {name: "박찬호", content: "낚씌~~", avatarUrl: ogu3},
  ];

  return (
    <div css={cssWrapper}>
      <img src={background} />
      {list.map((e, i) => (
        <Comments name={e.name} content={e.content} avatarUrl={e.avatarUrl} />
      ))}
    </div>
  );
};

const cssWrapper = css`
  > img {
    width: 60vw;
    left: 20vw;
    top: 0;
    position: absolute;
    opacity: 0.2;
  }
`;

export default CommentList;
