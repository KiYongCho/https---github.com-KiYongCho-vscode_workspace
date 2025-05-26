/*
    literal(리터럴)
    - 코드에 쓰여져 있는 값 (개발자 입장에서의 값)
    - 리터럴이 자바스크립트엔진에 의해서 평가되면 메모리에 값이 됨
    - 자바스크립트는 문자열리터럴(코드)의 집합
    - 자바스크립트엔진은 문자열을 해석(parsing)해서 평가(evaluation=연산)한 후
      실행(execution)
*/

// number 리터럴 : 자바스크립트에서 하나의 수는 64비트 부호화 실수
//                        하나의 수를 8바이트(64비트)에 저장하고 0을 제외한 모든 수에는 양,음이 있음
                            /*
                                Java언어에서의 정수 4가지
                                byte b; // 1바이트 부호화 정수
                                short s; // 2바이트 부호화 정수
                                int i; // 4바이트 부호화 정수
                                long l; // 8바이트 부호화 정수
                            */
console.log(10); // 정수
console.log(3.14); // 실수
console.log(0b00000010); // 2진수, 10진수로 2
console.log(0o111); // 8진수, 10진수로 73
console.log(0xff); // 16진수, 10진수로 255

// string(문자열) literal
console.log("hello"); // double quatation mark
console.log('hello'); // single quatation mark
console.log(`hello`); // back tick

// boolean(불리언) literal
console.log(true); // boolean
console.log('true'); // string
console.log(false); // boolean
console.log('false'); // string

// null(널) literal (지갑은 있는 돈이 없는...)
console.log(null); // 값이 없음 나타내는 값

// undefined literal (지갑도 없는..., 초기화되지 않은 변수를 초기화하는 값)
console.log(undefined); // 선언되지 않은 상태를 나타내는 값

// object(객체) literal
console.log({name: '홍길동', age: 20});

// array(배열) literal
console.log([1, 2, 3]);

// function(함수) literal
console.log(function func() {});

// regular expression(정규표현식) literal
console.log(/abc/); // a가 나오고 b가 나오고 c가 나오는 정규표현식 패턴


// 평가 (evaluation)
let result = eval('1+2+3+4+5'); // eval함수는 문자열을 평가(연산)
console.log(result);
eval("function func() { console.log('hello'); }");
func();

// 자바스크립트 엔진의 작동 순서
// 코드작성(개발자) > 문법검사(엔진) > 파싱(엔진):토크나이징 > 평가(엔진) > 실행(엔진)






















