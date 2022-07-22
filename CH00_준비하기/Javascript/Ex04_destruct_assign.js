/**
 * 구조 분해 할당
 * - 배열이나 객체의 속성을 해체하여 그 값을 개별 변수에 담을 수 있게 하는 js 표현식.
 */

// 배열
let a, b, rest;

[a, b] = [10, 20];

[a, b, ...rest] = [1, 2, 3, 4, 5, 6];

console.log("a : ", a);
console.log("b : ", b);
console.log("rest : ", rest);

// 객체 구조 분해
const obj = {
  id: 1,
  age: true,
};

let {id, age} = obj;

console.log(id, age);
