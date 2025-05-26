/*
    Hoisting(호이스팅)
    - 모든 변수는 실행단계 전에 선언단계를 거쳐야 함 (선언이 되어야 실행에 사용할 수 있음)
    - 코드에서 선언하지 않은 변수가 있다면 코드 최상단에 선언문을 추가해(끌어올려=hoisting) 줌
*/

// 아래 코드 i =100;에서 i를 선언하지 않았으므로
// var i; 변수 선언문을 코드 최상단에 끌어올려 줌 (변수 호이스팅)

// 아래 코드에서 함수를 선언전에 사용함
// 함수 선언문을 코드 최상단에 끌어올려 줌 (함수 호이스팅)

i = 100;
console.log(i);

// 함수를 선언전에 호출(사용)
print();

// 함수를 선언(정의)
function print() {
    console.log('출력하는 함수');    
}

// let, const는 호이스팅 불가 =  let, const는 선언하기 전에 사용 불가
// j = 10; // ReferenceError: Cannot access 'j' before initialization
// let j;
c = 5;
const c; // SyntaxError: Missing initializer in const declaration
