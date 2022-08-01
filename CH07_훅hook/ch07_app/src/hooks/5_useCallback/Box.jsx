import React, {useEffect, useState} from "react";

const Box = ({boxStyle}) => {
  const [style, setStyle] = useState({});

  useEffect(() => {
    console.log("hi");
    setStyle(boxStyle());
  }, [boxStyle]);

  return (
    <div className="container mt-5" style={boxStyle()}>
      abc
    </div>
  );
};

export default Box;
