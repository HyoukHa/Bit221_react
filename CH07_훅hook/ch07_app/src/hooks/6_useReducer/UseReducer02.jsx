import React, {useReducer, useState} from "react";
import Student from "./Student";

const reducer = (state, action) => {
  switch (action.type) {
    case "append":
      const newStudent = {
        id: Date.now(),
        name: action.payload,
        isHere: false,
      };

      return {
        count: state.count + 1,
        students: [...state.students, newStudent],
      };
    case "delete":
      // return {
      //   count: state.count - 1,
      //   students: state.students.filter((student) => {
      //     if (student.id == action.payload) {
      //       return;
      //     }
      //     return student;
      //   }),
      // };

      return {
        count: state.count - 1,
        students: state.students.filter(
          (student) => student.id !== action.payload
        ),
      };
    case "call":
      return {
        count: state.count,
        students: state.students.map((student) => {
          if (student.id === action.payload) {
            // student.isHere = !student.isHere;
            return {...student, isHere: !student.isHere};
          }
          return student;
        }),
      };
  }
};

const initialState = {
  count: 1,
  students: [
    {
      id: Date.now(),
      name: "Changju",
      isHere: true,
    },
  ],
};

const UseReducer02 = () => {
  const [name, setName] = useState("");
  const [studentList, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="container">
      <div className="alert alert-info">
        <i className="fa-solid fa-book me-3"></i>
        Student List
        <hr />
        <p>총 학생수 : {studentList.count}명</p>
        <div>
          <input
            type="text"
            className="form-control"
            placeholder="이름을 입력해주세요."
            spellCheck="false"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <button
            className="btn btn-primary"
            onClick={() => {
              if (name === "") {
                alert("이름을 입력해주세요.");
                return;
              } else {
                dispatch({type: "append", payload: name});
                setName("");
              }
            }}
          >
            add
          </button>
        </div>
      </div>

      {studentList.students.map((map, idx) => {
        return (
          <Student
            key={idx}
            name={map.name}
            id={map.id}
            isHere={map.isHere}
            dispatch={dispatch}
          />
        );
      })}
    </div>
  );
};

export default UseReducer02;
