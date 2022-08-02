import React, { useState } from 'react';

const NameForm = () => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    console.log(value.length)
    if (value.length > 8) {
      alert("8글자 이하만 입력가능");
    }
    e.preventDefault();
  }

  const handleChange = (e) => {
    console.log(e.target.value.length);
    console.log(e.target.value[e.target.value.length]);
    console.log(e.target.value);
    if (e.target.value[e.target.value.length + 1] == " ") {
      alert("공백문자는 입력불가능!");
      return
    }
    setValue(e.target.value);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          <h4>
            <span>Name: </span>
            <input type="text" value={value} className="form-control" placeholder="name" onChange={handleChange} />
          </h4>
        </label>
        <button type="submit" className="btn btn-success ms-1">submit</button>
      </form>

    </>
  );
};

export default NameForm;