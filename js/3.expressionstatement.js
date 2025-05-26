/*
    표현식 (expression)
    : 자바스크립트엔진이 평가(evaluation)해서 결과가 하나의 값이 되는 문장 또는 문장의 일부
    : 표현식은 값이 필요한 모든 코드 위치에 사용할 수 있어서 중요

    문장 (statement)
    : 자바스크립트엔진이 코드 실행을 위해 fetch(인출)하는 단위, ;으로 끝남
    : 문장은 값이 필요한 코드 위치에 사용할 수 없음
*/

let l1 = 100; // 문장
// 100 : 표현식이면서 리터럴

let l2 = 1+ 2 + 3 + 4 + 5; //문장
// 1+2+3+4+5 :  표현식이면서 리터럴

console.log(1); // 리터럴
console.log(1+2+3+4+5); // 표현식, 표현식의 연산결과는 리터럴

// 함수 정의 문장
function add(a, b) {
    // a + b : 표현식
    return a + b; // 문장
}

// 함수 호출
// add(l1, l2) : 표현식
// add(l1, l2); : 문장
// console.log(문자열값)
console.log(add(l1, l2));
//console.log(add(l1, l2);); // SyntaxError: missing ) after argument list













