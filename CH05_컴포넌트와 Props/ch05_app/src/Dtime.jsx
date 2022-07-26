import React from "react";

const Dtime = () => {
  let dd = new Date().toLocaleDateString();
  let tt = new Date().toLocaleTimeString();
  return <div>{dd + "    " + tt}</div>;
};

export default Dtime;
