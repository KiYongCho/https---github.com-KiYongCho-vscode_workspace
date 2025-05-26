/*
    자바스크립트의 타입변환 (Type Casting)
    - 자바스크립트의 타입변환은 기본타입간의 타입 변환
    - 기본타입 6가지 (number, string, null, undefined, boolean, symbol)
    - symbol은 다른 타입과 변환되지 않음 (TypeError)
    - *** 어떤 연산을 하는지에 따라 어떤 타입을 어떤 타입으로 변환할지가 결정 ***
*/

let num = 100;
let numStr = num.toString();
console.log(typeof numStr, numStr); // string, '100'
// 기본타입의 값은 변경되지 않음 (Immutable)
console.log(typeof num, num); // number, 100

console.log(typeof String(1)); // string
console.log(typeof String(NaN)); // string
console.log(typeof String(true)); // string
console.log(typeof Number('1')); // number
console.log(typeof Number(true)); // number
console.log(typeof Boolean('')); // boolean
console.log(typeof Boolean('a')); // boolean
console.log(typeof Boolean(NaN)); // boolean
console.log(typeof Boolean({})); // boolean
console.log(typeof Boolean([])); // boolean
console.log(typeof Boolean(function() {})); // boolean

console.log((1).toString()); // '1'
console.log(NaN + ''); // 'NaN'
console.log(+'0'); // 0
console.log(+true); // 1
console.log(true*5); // 5
console.log(!!'x'); // true
console.log(!!0); // false
console.log(!!NaN); // false
console.log(!!{}); // true
console.log(!![]); // true

console.log('10'+2); // '102'
console.log(10*'10'); // 100
console.log(!0); // true
console.log(10/NaN); // NaN
console.log(NaN*10); // NaN

console.log(0+''); // '0'
console.log(-0+''); // '0'
console.log(NaN+''); // 'NaN'
console.log(Infinity+''); // 'Infinity'
console.log(-Infinity+''); // '-Infinity'
console.log(true+''); // 'true'
console.log(false+''); // 'false'
console.log(null+''); // 'null'
console.log(undefined+''); // 'undefined'
//console.log((Symbol())+''); // TypeError, Symbol은 타입변환 불가한 타입
console.log(({})+''); // [object Object]
console.log(({name:'홍길동', age:20}) + ''); // [object Object]
console.log(Math + ''); // [object Math]
console.log([]+''); // 
console.log([10, 20]+''); // '10,20'
console.log((function(){})+''); // 'function(){}'
console.log(Array+''); // Array() { [native code] }
console.log(1-'1'); // 0
console.log(1*'10'); // 10
console.log(1/'one'); // NaN
console.log('1'>0); // true
console.log(+''); // 0
console.log(+'0'); // 0
console.log(+'1'); // 1
console.log(+'string'); // NaN
console.log(+true); // 1
console.log(+false); // 0
//console.log(+Symbol()); // TypeError
console.log(+{}); // NaN, 객체는 프라퍼티가 있건 없건 숫자 NaN으로 평가
console.log(+[]); // 0, 요소가 없는 배열은 숫자 0으로 평가
console.log(+{name:'홍길동', age:20}); // NaN
console.log(+[1,2,3]); // NaN, 요소가 있는 배열은 숫자 NaN으로 평가
console.log(+(function(){})); // NaN
console.log(+false); // 0
console.log(+undefined); // NaN
console.log(!null); // true
console.log(!undefined); // true
console.log(!0); // true
console.log(!-0); // true
console.log(!NaN); // true
console.log(!''); // true

// 판별식의 위치에 사용됨
if (0) {} // => if (false) {}
if (1) {} // => if (true) {}
if ([]) {} // => if (true) {}
if ([1,2,3]) {} // => if (true) {}
// while (1) {} // => while (true) {}
// while ({}) {} // => while (true) {}

// 단축 평가 (Short-Circuit Evaluation)
// 표현식의 일부를 수행해서 전체 결과를 얻을 수 있다면 나머지를 수행하지 않음

// && 연산은 양쪽 항이 모두 true일때 true
// 'Cat'은 true이므로 && 뒤를 평가해야 함
console.log('Cat' && 'Dog'); // 'Dog'

// || 연산은 양쪽 항 중의 하나가 true면 true
// 'Cat'은 true이므로 || 뒤를 평가할 필요가 없음
console.log('Cat' || 'Dog'); // 'Cat'










































