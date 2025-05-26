/*
    자바스크립트의 데이터 타입(data type)

    1. 기본타입 (primitive type)
        1) number : 64비트 부호화 실수
        2) string : 문자열
        3) boolean : true 또는 false의 값만 갖는 타입
        4) null : var로 선언한 변수를 초기화 하기 위한 값이자 타입
        5) undefined : 초기화 되지 않은 상태를 표현하는 값이자 타입
        6) Symbol (ES6=ECMA2015) : 중복되지 않는 값을 만들기 위해 추가된 타입 

    2. 참조타입 (reference type)
        6가지 기본타입을 제외한 모든 타입은 참조 타입
*/


// 기본 타입

let num1 = 5;
console.log(num1);

let num2 = 3.14;
console.log(num2);

let num3 = 0b0010; // binary number (2진수)
console.log(num3);

let num4 = 0o10; // octal number (8진수)
console.log(num4);

let num5 = 0x10; // hexadecimal number (16진수)
console.log(num5);

let num6 = Infinity; // 양의 무한대
console.log(num6);
console.log(1/Infinity); // +0, 양의 축에서 0에 가장 가까운 어떤 수


let num7 = -Infinity; // 음의 무한대
console.log(num7);
console.log(1/-Infinity); // -0, 음의 축에서 0에 가장 가까운 어떤 수

let num8 = NaN; // 숫자가 아니라는 의미의 숫자
console.log(num8);
console.log(1/0); // Infinity

let str1 = 'hong';
console.log(str1);

let str2 = "kil dong";
console.log(str2);

let str3 = `성은 ${str1} 이름은 ${str2}`;
console.log(str3);
console.log(`${1+2+3}`);

let bool1 = true;
console.log(bool1);

let bool2 = false;
console.log(bool2);

let ud = undefined;
console.log(ud);

let nu = null;
console.log(nu);

let sb = Symbol(); // 기본타입임
console.log(sb);


// 참조타입

const obj = {}; // 객체(object)
console.log(obj);

const arr = []; // 배열(array)
console.log(arr);

const re = /abc/; // 정규표현식(regular expression)
console.log(re);

const func = function() { // 함수리터럴(function literal)
    console.log('hello');
    
};
func(); // 익명함수는 변수명으로 호출

// 클래스 (ES6)
class Person {  
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
// 객체
const person = new Person('홍길동', 20);
console.log(person.name, person.age);




























