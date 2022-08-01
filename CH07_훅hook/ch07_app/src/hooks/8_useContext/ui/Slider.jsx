import React from 'react';
import ogu1 from "../../../media/img/ogu1.png"
import ogu2 from "../../../media/img/ogu2.png"
import ogu3 from "../../../media/img/ogu3.png"

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const Slider = () => {
  return (
    <>
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true" css={cssWarpper}>
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner m-auto">
          <div className="carousel-item active">
            <img src={ogu1} className="d-block w-50 mx-auto" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={ogu2} className="d-block w-50  mx-auto" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={ogu3} className="d-block w-50  mx-auto" alt="..." />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

const cssWarpper = css`
  img {
    width: 100px,
    height: 100px,
  }
`

export default Slider;