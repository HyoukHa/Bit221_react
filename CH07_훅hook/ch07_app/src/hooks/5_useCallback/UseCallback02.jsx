import React, {useState, useMemo, useCallback} from "react";
import Box from "./Box";

const UseCallback02 = () => {
  const [size, setSize] = useState(100);
  const [isDark, setIsDark] = useState(false);

  const boxStyle = useCallback(() => {
    return {
      backgroundColor: `yellowgreen`,
      width: `${size}px`,
      height: `${size}px`,
    };
  }, [size]);

  return (
    <div
      className="container"
      style={{backgroundColor: isDark ? "#555" : "white"}}
    >
      <button
        className="btn btn-warning mb-3"
        onClick={() => {
          setIsDark(!isDark);
        }}
      >
        change background
      </button>
      <button className="btn btn-primary mb-3">change theme</button>
      <input
        type="number"
        className="form-control"
        value={size}
        onChange={(e) => {
          setIsDark(!isDark);
          setSize(e.target.value);
        }}
      />

      <Box boxStyle={boxStyle} />
    </div>
  );
};

export default UseCallback02;
