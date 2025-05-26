/*
    함수 (Function)
    - 재사용(reusing)하기 위해 코드들을 묶어 놓은 코드 블록
    - 함수를 생성해 두고 필요할 때 불러서(호출해서) 사용
    - 함수는 J/S에서 매우 중요하고 자주 사용되는 프로그래밍 단위
*/

// 함수 생성 - 함수 선언식
// 함수명이 반드시 있어야 함
// 호이스팅 됨 (선언전에 사용이 가능)
function add(a, b) {
    return a + b;
}
console.log(add(1, 2)); // 3
console.log(add); // [Function: add]

// 함수 생성 - 함수 표현식
// 값으로 사용되는 함수
// 1. 리턴 뒤에 올 수 있고
// 2. 변수에 할당 가능
// 3. 파라미터에 인자로 전달 가능
// ... 아뭏든 값이 올 수 있는 모든 곳에 올 수 있음
// 함수 표현식은 일급객체(first-class object)
// 일급객체 : 값으로 사용될 수 있는 객체
const mul = function(a, b) {
    return a * b;
}
console.log(mul(2, 5)); // 10
console.log(mul); // [Function: mul]

// 함수 생성 - Function 생성자 함수
const dev = new Function('a', 'b', 'return a/b');
console.log(dev(10, 2)); // 5
console.log(dev); // [Function: anonymous]

// 함수 생성 - 화살표(arrow) 함수
// 화살표 함수는 익명 함수리터럴
// () : 파라미터리스트, 파라미터가 1개인 경우는 () 생략가능
// => 가 오고
// 함수 바디(몸체)
const minus1 = (a, b) => a-b;
const minus2 = (a, b) => { return a-b };
console.log(minus1(5, 3)); // 2
console.log(minus2(6, 4)); // 2

const plus1 = a => a+1;
const plus2 = a => a+2;
const plus3 = a => a+3;

const plusMain = function(val, f) {
    console.log(f(val));
};

// *** J/S는 함수에 함수를 인자로 전달할 수 있음 ***
// 함수에 데이터 뿐 아니라 기능도 전달할 수 있음
// 콜백함수(callback function) : 함수의 인자로 전달된 함수, plus1 plus2 plus3
// 고차함수(high-order function) : 함수를 인자로 전달받은 함수, plusMain
plusMain(1, plus1); // 2
plusMain(1, plus2); // 3
plusMain(1, plus3); // 4

// 함수의 기본값 (ES6)
// 함수 파라미터의 값이 전달되지 않으면 파라미터의 값은 undefined
// 함수 파라미터에 값을 할당해서 전달되지 않을 경우 할당된 값을 사용할 수 있도록 함
const func2 = function(a=0, b=0) {
    return a + b;
};
console.log(func2()); // 0
console.log(func2(1)); // 1
console.log(func2(1, 2)); // 3

// 실습
// 1. calcMain이라는 고차함수를 생성
// 2. 덧셈 addCalc, 뺄셈 subCalc, 곱셈 mulCalc, 나눗셈 divCalc 라는 콜백함수를 생성
// 3. 10과 5와 콜백함수를 인자로 전달해서 연산결과를 출력
const calcMain = function(a, b, f) {
    console.log(f(a, b));    
};
// const addCalc = (a, b) => a + b;
// const subCalc = (a, b) => a - b;
// const mulCalc = (a, b) => a * b;
// const divCalc = (a, b) => a / b;
// calcMain(10, 5, addCalc);
// calcMain(10, 5, subCalc);
// calcMain(10, 5, mulCalc);
// calcMain(10, 5, divCalc);
calcMain(10, 5, (a, b) => a + b);
calcMain(10, 5, (a, b) => a - b);
calcMain(10, 5, (a, b) => a * b);
calcMain(10, 5, (a, b) => a / b);

// 실습
// cf) Math.random() : 0.0<=x<1.0 범위의 임의의 실수를 리턴하는 함수
//     console.log(Math.random());
//      Math.floor(x) : x보다 작지만 가장 큰 정수를 리턴하는 함수
//      Math.ceil(x) : x보다 크지만 가장 작은 정수를 리턴하는 함수
// 1에서 4까지의 임의 정수를 생성해서
// 1이면 두번째 인자까지 덧셈
// 2이면 세번째 인자까지 덧셈
// 3이면 네번째 인자까지 덧셈
// 4면 연산하지 않고 종료하는 프로그램

let ranInt = Math.floor(Math.random() * 4) + 1;
let result = 0;

const addCalc= (a, b, c=0, d=0) => a + b + c + d;

switch (ranInt) {
    case 1: result = addCalc(1,2); break;
    case 2: result = addCalc(1,2,3); break;
    case 3: result = addCalc(1,2,3,4); break;
    default : result = '종료'
}
console.log(`나온 수:${ranInt}, 연산결과:${result}`);








