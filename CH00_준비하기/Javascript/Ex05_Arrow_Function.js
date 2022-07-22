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
