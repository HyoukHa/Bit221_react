/* [const]
  constant(상수)를 뜻
    '항상 같은 수'
  변수(變數)인데 상수(常數)
  변치 않는 값을 갖는 변수
  - const로 선언한 변수는 값의 재할당 불가(X)
  - 반드시 선언과 동시에 값이 할당되어야
 */

const PI = 3.141592;
console.log(`반지름이 10인 원의 넓이 : ${10 * 10 * PI}`);

var sn;
sn = "K-2022-13";
console.log("sn : ", sn);

// const SN;
// SN = 'K-2922';
// console.log(SN);

/* [let]
 * 변수(變數)
 * 다른 값이 재할당 가능(O)
 */

let score;
score = 100;
score = 200;
console.log("score: ", score);

/**
 * var VS let
 */

var some = 104;

var some = 1000;

let score;

/**
 * Hoisting
 */

/**
 * var : 함수형 변수
 * let : 영역형 변수
 */
