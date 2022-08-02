/**
 * map을 통해 카드 리스트를 생성하는 컴포넌트
 */

import React from 'react';
import Card from './Card';
import ogu1 from './media/img/ogu1.png';

const articles = [
  {
    img: 'baby.jpg',
    title: 'Baby',
    content: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    btn: "next",
  },
  {
    img: 'dog.jpg',
    title: 'My dog',
    content: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    btn: "next",
  },
  {
    img: 'free.jpg',
    title: 'vacation',
    content: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    btn: "next",
  },
  {
    img: 'food.jpg',
    title: 'Food',
    content: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    btn: "next",
  },
  {
    img: 'women.jpg',
    title: 'Blog',
    content: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    btn: "next",
  },
  {
    img: 'flower.jpg',
    title: 'Nature',
    content: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    btn: "next",
  },
];


const CardList = () => {
  return (
    <div className="container d-flex mt-5 flex-wrap justify-content-center gap-5">
      {articles.map((map, idx) => {
        return <Card key={idx} title={map.title} content={map.content} img={map.img} btnText={map.btn} />
      })}
    </div>
  );
};

export default CardList;