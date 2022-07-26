/**
 * 구조 분해 할당
 * - 배열이나 객체의 속성을 해체하여 그 값을 개별 변수에 담을 수 있게 하는 js 표현식.
 *
 * [...foo, bar]를 통한 배열의 확장을
 * 이전까지는 ...를 통해 기존의 상태를 받고, 새로운 값을 넣는다는 의미로 이해하고 있었으나,
 * 구조분해할당을 통해 기존의 모든값들을 대입해준다는것을 알게됨!
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
