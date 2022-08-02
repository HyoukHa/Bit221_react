import React from 'react';
import styled from 'styled-components';

/**
 * styled-components
 * : CSS 문법을 그대로 사용
 *   결과물을 스타일링된 컴포넌트 형태로 만들어주는 오픈소스 라이브러리.
 */

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const Wrapper = styled.div`
  padding: 1em;
  background: #B3DEE5;
  border-radius: 50%;
  font-family: "YanoljaYacheR";
`;

const MyButton = styled.button`
  background-color: crimson;
  color: #eee;
  padding: 3px;
`

const MainPage = () => {
  return (
    <Wrapper>
      <div>
        hello
      </div>
      <MyButton>
        mybtn
      </MyButton>
    </Wrapper>
  );
};

// const MainPage = () => {
//   return (
//       <div css={cssWrapper}>
//         hello
//       </div>
//   );
// };

const cssWrapper = css`
`

export default MainPage;