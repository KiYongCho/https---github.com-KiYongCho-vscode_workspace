/*
    클로져 (closure)
    - 외부함수가 종료되어도 내부함수가 리턴되어서 내부함수가 참조하고 있는 외부함수의 변수가
      참조 가능하도록 하는 내부함수
    - 클로져를 사용하는 목적은 외부함수가 가진 변수를 내부함수를 통해서만 참조하도록 하기 위함
      => 정보은닉(Information Hiding) 또는 캡슐화(Encapsulation)
*/

const x = 1;
function outer() {
    const x = 10;
    const inner = function() {
        console.log(x); // 10, outer함수의 x        
    };
    return inner; // 클로져 반환
}
// outer함수를 호출해서 결과(inner)를 리턴하면 outer함수의
// 함수스코프와 실행컨텍스는 종료됨
// outer함수의 함수스코프에 있던 x변수는 inner에서 참조하기 때문에
// 소멸되지 않음 (참조할 수 있음)
// 이미 소멸된 outer함수의 x변수를 inner를 통해서 참조할 수 있게 됨
// => x변수를 참조하는 방법을 inner함수로 제한 (정보은닉)
const innerFunc = outer(); 
innerFunc();


// 클로져 활용 예)

// count변수에는 즉시실행함수(outer)를 실행한 결과인 inner함수(클로져)가 저장
// 그때 즉시실행함수는 종료되고 counter변수도 소멸
// => inner함수(클로져)가 counter변수를 유지
const count = (function() { // outer
    let counter = 0; // outer함수의 변수
    return function(func) { // inner => closure
        counter = func(counter); // 인자로 전달받은 함수에 counter를 인자로 받아 결과를 counter에 저장
        return counter; // counter 리턴
    };
}());

const increase = function(n) {
    return ++n;
};
const decrease = function(n) {
    return --n;
};

console.log(count(increase)); // 1
console.log(count(increase)); // 2
console.log(count(decrease)); // 1
console.log(count(decrease)); // 0



















