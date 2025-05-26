/*
    동적 타이핑 (Dynamic Typing)
    - 실행 시점에 변수의 타입이 결정됨
    - 변수에 할당되는 값의 타입에 따라서 변수의 타입이 동적으로 결정됨
    - 인터프리터언어의 특성 ex) javascript, python ...
*/

let l; // 선언해서 undefined로 초기화된 변수, 타입은 undefined
console.log(l);
console.log(typeof l);

l = 1;
console.log(typeof l); // number

l = 'hello';
console.log(typeof l); // string

l = false;
console.log(typeof l); // boolean

l = undefined;
console.log(typeof l); // undefined

// null은 객체의 참조값이 없음을 의미, 즉 저장된 값에 대한 주소가 없음
l = null;
console.log(typeof l); // object

l = Symbol();
console.log(typeof l); // symbol

l = {}; // 객체(object)
console.log(typeof l); // object, 참조타입임은 알 수 있음
// l이 Object를 상속받았는지
console.log(l instanceof Object); // true

l = []; // 배열(Array)
console.log(typeof l); // object
console.log(l instanceof Array); // true 

l = /abc/; // 정규표현식(Regular Expression)
console.log(typeof l); // object
console.log(l instanceof RegExp); // true 

l = function() {}; // 함수(Function)
console.log(typeof l); // function
console.log(l instanceof Function); // true 

// 참조타입 변수 선언할때는 const를 사용
// obj는 변경 불가, obj가 참조하고(가리키고) 있는 {}는 변경 가능
// obj는 {}가 있는 곳의 참조값을 저장하게 됨 (참조 타입), call by reference
// cf) let i = 3; i는 3이라는 값을 저장 (기본 타입), call by value
const obj = {};
console.log(obj instanceof Object); // true
console.log(obj instanceof Array); // false
console.log(obj instanceof Function); // false

const obj2 = null; // null은 기본타입
console.log(obj2 instanceof Object); // false, null은 객체 아님

// Function은 Object를 상속받고 있음. 즉 Function은 Object의 일종
const func = function() {};
console.log(func instanceof Object); // true
console.log(func instanceof Function); // true

// RegExp는 Object를 상속받고 있음. 즉 RegExp는 Object의 일종
const regExp = /abc/;
console.log(regExp instanceof Object); // true
console.log(regExp instanceof RegExp); // true

// 모든 참조타입은 Object의 후손(상속받고 있음)
// instanceof 연산자는 상속관계에 있는지 여부를 반환하는 연산자



































