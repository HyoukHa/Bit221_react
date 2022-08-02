/**
 * 카드 하나를 만드는 컴포넌트
 */

import React from 'react';

const styles = {
  card: {
    width: "18rem",
  },

  cardBody: {
    fontFamily: "spoqahansans",
    color: "black",
  }
}

const Card = ({ title, content, img, btnText }) => {
  return (
    <>
      <div className="card" style={styles.card}>
        <img src={`./imgs/${img}`} className="card-img-top" alt="hello" />
        <div className="card-body" style={styles.cardBody}>
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{content}</p>
          <a href="#" className="btn btn-primary">{btnText}</a>
        </div>
      </div>
    </>
  );
};

export default Card;