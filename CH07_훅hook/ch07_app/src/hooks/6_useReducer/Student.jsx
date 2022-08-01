import React from "react";

const Student = ({name, id, isHere, dispatch}) => {
  return (
    <div>
      <span
        style={{
          textDecoration: isHere ? "none" : "line-through",
          color: isHere ? "white" : "#333",
          cursor: "pointer",
        }}
        onClick={() => {
          dispatch({type: "call", payload: id});
        }}
      >{`${name}(${id})`}</span>
      <button
        className="btn btn-outline-danger btn-sm ms-3"
        onClick={() => {
          console.log(id);
          dispatch({type: "delete", payload: id});
        }}
      >
        삭제
      </button>
    </div>
  );
};

export default Student;
