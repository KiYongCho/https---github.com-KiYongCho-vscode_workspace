// 일급객체 (first-class object)
// - 값으로 사용할 수 있는 객체
// - 함수는 값으로 사용할 수 있는 일급 객체
// - 변수에 저장 가능, 함수에 인자로 전달 가능, 함수의 반환값 가능

const func = function() {
    console.log('Hello');    
};

const main = function(f1, f2) {
    f1();
    f2();
};

main(func, func);

const add = function(a, b) {
    // add함수에 전달된 인자들에 대한 정보를 가진 유사배열객체
    console.log(arguments); // [Arguments] { '0': 1, '1': 2 }
    console.log(arguments.length); // 2, 인자가 2개
    // (function() {add(1, 2);}());
    console.log(add.caller); // add함수를 호출한 함수, [Function (anonymous)]
    console.log(arguments.callee); // 호출당한 함수, [Function: add]
    console.log(add.name); // add, 함수명
    console.log(add.prototype); // {}
};
add(1, 2);

// add함수가 가진 프라퍼티들에 대한 디스크립터객체들의 정보
/*
// 프라퍼티에 대한 서술자(디스크립터객체)의 프라퍼티
// value라는 프라퍼티를 가지고 있으면 데이터 프라퍼티 (데이터 저장을 위한 프라퍼티)
// value : 프라퍼티의 값
// writable : 프라퍼티의 값 변경 가능 여부
// enumerable : 프라퍼티 반복 가능 여부
// configurable : 프라퍼티의 값 삭제 가능 여부
{
  length: { value: 2, writable: false, enumerable: false, configurable: true },
  name: { value: 'add', writable: false, enumerable: false, configurable: true },
  arguments: { value: null, writable: false, enumerable: false, configurable: false },
  caller: { value: null, writable: false, enumerable: false, configurable: false },
  prototype: { value: {}, writable: true, enumerable: false, configurable: false }
}
*/
console.log(Object.getOwnPropertyDescriptors(add));

const person = {
    name: '홍길동',
    age: 20
};

/*
// person객체는 객체 정의시에 생성한 2개의 데이터 프라퍼티를 가지고 있음
{
  name: { value: '홍길동', writable: true, enumerable: true, configurable: true },
  age: { value: 20, writable: true, enumerable: true, configurable: true }
}
*/
console.log(Object.getOwnPropertyDescriptors(person));

// { value: '홍길동', writable: true, enumerable: true, configurable: true }
console.log(Object.getOwnPropertyDescriptor(person, 'name'));


////////////////////////////////////////////////////
// __proto__, prototype
////////////////////////////////////////////////////

// - 모든 객체는 상속을 통해서 __proto__라는 접근자프라퍼티를 사용 가능
// - __proto__는 prototype의 참조를 저장하고 있는 프라퍼티
//   즉, __proto__를 통해서 prototype에 접근할 수 있다.
// - 객체를 생성하면 생성된 객체의 __proto__에는 Object.prototype이 저장됨

console.log(person.__proto__ === Object.prototype); // true

// Own Property : 객체 생성시에 정의한 프라퍼티 (객체 소유)
console.log(person.hasOwnProperty('name')); // true
console.log(person.hasOwnProperty('age')); // true
console.log(person.hasOwnProperty('__proto__')); // false

const obj ={};
console.log(obj.__proto__ === Object.prototype); // true
























