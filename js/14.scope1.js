// J/S는 변수가 코드상에서 선언된 위치에 따라서 변수의 스코프(참조범위)가 결정됨
// => lexical scope = static scope

var v1 = 1; // global scope

function func1() {
    var v1 = 2; // function scope
    console.log(v1); // 2 (function)
}

console.log(v1); // 1 (global)
func1();

var v2 = 1; // global

function func2() {
    // var로 선언한 변수의 호이스팅은 선언된 스코프내의 최상단에 발생
    // let, const는 호이스팅이 일어나지 않음 = 선언하고 사용해야 함
    // var v2 형태로 function scope내에서 호이스팅 
    console.log(v2); // undefined
    var v2 = 2; // function
    console.log(v2); // 2    
}

func2();

var v3 = 1; // global
let l1 = 1; // global
// block scope
// var는 block scope을 가지지 않음
// let, const는 block scope을 가짐
{
    var v3 = 2; // global
    let l1 = 2; // block scope
}
console.log(v3); // 2
console.log(l1); // 1

// var는 재선언이 가능
var v4 = 1;
var v4 = 2; 
console.log(v4); // 2

// let, const는 동일한 스코프내에서 재선언이 불가능
let l2 = 1;
// let l2 = 2; // SyntaxError: Identifier 'l2' has already been declared
{
    let l2 = 2;
    console.log(l2); // 2 
}
console.log(l2); // 1

// node환경에서의 전역객체
// {} : node의 전역객체인 global(또는 globalThis)가 생성한 빈 객체
console.log(this); // {}
console.log(globalThis); // Object [global]



















