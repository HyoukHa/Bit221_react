import React, { useState } from 'react';

const Form = () => {
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    /**
     * form refresh
     * form 안에서 입력값을 전송할 때 페이지가 다시 로드됨
     */

    e.preventDefault();
    setPassword("");
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          className="form-control"
          type="password"
          name="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value)
          }
          } />
        <button type="submit" className="btn btn-primary">hello</button>
      </form>
    </div>
  );
};

export default Form;