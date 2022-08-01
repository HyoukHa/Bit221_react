import React, {useState, useEffect, useRef} from "react";
import ogu from "../../media/img/ogu1.png";
/**
 * useRef()
 * 참조(Reference)를 사용하기 위한 훅
 * 반환값 : 레퍼런스 객체(ref obj)
 * const ref = useRef(value) == {current : value}
 * ref.current
 *
 * ref 객체는 컴포넌트의 전 생애주기 전체에 걸쳐서 유지
 *
 * 1. DOM 요소에 접근할 때(document.getElementById() / document.querySelect())
 * 2. 저장공간으로 사용
 */

/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";

const UseRef01 = () => {
  const [controllStyle, setControllStyle] = useState(false);
  const nameRef = useRef();
  const imgRef = useRef();

  const onBtnClick = () => {
    console.log("1", imgRef.current);
    console.log("2", nameRef.current.value);
    imgRef.current.style.visibility = "visible";
  };

  useEffect(() => {
    nameRef.current.focus();
  }, []);

  return (
    <div className="container" css={cssWrapper}>
      <img ref={imgRef} src={ogu} alt="" />
      <div className="d-flex">
        <input
          ref={nameRef}
          className="form-controll w-auto"
          type="text"
          placeholder="username"
        />
        <button className="btn btn-primary ms-1" onClick={onBtnClick}>
          로그인
        </button>
      </div>
    </div>
  );
};

const cssWrapper = css`
  > img {
    width: 100px;
    margin-bottom: 100px;
    visibility: hidden;
  }
`;

export default UseRef01;
