/**
 * Arrow Function
 */

// map() - 배열과 관련있음!

const arr1 = ["Hydrogen", "Helium", "Lithium", "Beryllium"];

arr1.map((e, idx, arr) => {
  console.log(e);
  console.log(idx);
  console.log(arr);
});

let newArr = arr1.map((e, idx) => {
  return e.length * 2;
});
let arr2 = [16, 12, 14, 18];

console.log(newArr);
console.log(arr2);

// 회문
let palindromes = [
  "스위스",
  "기러기",
  "인도인",
  "음악",
  "역삼역",
  "피카츄",
  "역곡역",
  "아이폰",
  "아시아",
];

const newArr1 = palindromes.map((e) => {
  if (e == e.split("").reverse("").join("")) {
    return e;
  }
});

const newArr2 = palindromes.filter((e) => {
  if (e == e.split("").reverse("").join("")) {
    return e;
  }
});

console.log(newArr1);
console.log(newArr2);

/**
 * map의 파라미터 3개
 * 1. value: map을 사용하게 될 시, 배열에 있는 각각의 값들을 담아주는 역할을 함.
 * 2. index: map을 사용하는 배열의 몇번째 인덱스인지를 리턴해줌. >> 해당 값을 사용해서 다양한 연산을 가능할 수 있도록 제어 가능 할 듯 보임.
 * 3. array: map을 사용하는 배열 전체를 리턴해줌.
 *
 * map vs filter
 * map: 반드시 모든 value들에 대한 리턴이 필요함.
 * filter: map과 다르게 필요한 값들을 제어해서 출력 가능함.
 *
 * map에서 조건을 걸게되면 에러가 난다.
 */
