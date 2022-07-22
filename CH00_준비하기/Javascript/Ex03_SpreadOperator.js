/**
 * 전개구문 (Spread Operator)
 * '...' 펼침 연산자
 */

// 배열
const arr1 = [3, 4];
const arr2 = [7, 8, 9];
const arr3 = [1, 2, ...arr1, 5, 6, ...arr2, 10, 11];

console.log(arr3);

// 객체
const obj1 = {id: 1, name: "조주현", age: 27};
const obj2 = {id: "student", gender: "female"};

const obj3 = {...obj1, ...obj2};

console.log(obj3);

// 함수
const sum = (x, y, z) => {
  return x + y + z;
};

const numbers = [1, 2, 3, 4];

console.log(sum(...numbers));
