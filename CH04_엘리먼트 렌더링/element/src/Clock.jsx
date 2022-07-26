import React, {useEffect, useState} from "react";

const Clock = () => {
  let now1 = new Date().toLocaleDateString();
  let now2 = new Date().toLocaleTimeString();

  return (
    <div>
      <h1>hello</h1>
      <span>{now1 + "   " + now2}</span>
    </div>
  );
};

export default Clock;
