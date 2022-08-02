import React, { useState } from 'react';

const FruitSelect = () => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
    console.log(e.target.value);
  }

  const handleSubmit = (e) => {
    alert("음식: ", value);
    e.preventDefault();
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <span>과일 선택</span>
        <select name="form-select" value={value} onChange={handleChange}>
          <option value="" selected>----</option>
          <option value="apple">🍎</option>
          <option value="grape">🍇</option>
          <option value="watermelon">🍉</option>
          <option value="cherry">🍒</option>
          <option value="coconut">🥥</option>
          <option value="kiwi">🥝</option>
          <option value="meat">🍖</option>
          <option value="pork">🥓</option>
          <option value="pizza">🍕</option>
          <option value="hamburger">🍔</option>
          <option value="popcorn">🍿</option>
          <option value="beer">🍺</option>
          <option value="shampain">🍾</option>
        </select>
        <button type="submit" className="btn btn-success ms-1">submit</button>
      </form>
    </div>
  );
};

export default FruitSelect;