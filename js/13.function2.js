// 즉시실행함수 (IIEF : Immediately Invoked Excecution Function)
// 익명함수를 만들어서 한번만 실행할 목적으로 사용하는 함수
// 즉시실행함수는 표현식(값)이므로 변수에 저장하거나 함수의 인자, 리턴값으로 활용가능
// 실행시에 감싸는 ()를 넣어서 문법에러를 방지해야 함

(function() {
    console.log('IIEF');    
}());

let iief = (function() {
    return 'IIEF';    
}());
console.log(iief);

let result = (function(a, b) {
    return a + b;
}(3, 5));
console.log(result);

// 재귀함수 (recursive function)
// 함수가 함수 내에서 자기자신을 다시 호출하는 함수
// 무한호출에 빠지지 않도록 종료조건(기저조건)이 있어야 함

// 팩토리얼 : 5팩토리얼 = 1*2*3*4*5
function factorial(n) {
    if (n==0 || n==1) return 1;
    return n * factorial(n-1);
}
console.log(factorial(7)); // 5040 = 1*2*3*4*5*6*7

// 중첩함수 (nested function)
// 함수내에서만 사용할 기능을 함수내부에 정의한 함수

function outer() {
    let o = 1; // outer 함수스코프
    // ReferenceError: i is not defined (outer 내에서 inner 사용 불가)
    // outer가 생성된 후 outer내에서 inner가 생성되므로
    // console.log(i); 
    function inner() {
        console.log(o); // inner 내에서 outer 사용 가능
        let i = 2; // inner 함수스코프
        console.log(o + i);        
    }
    inner();
}
outer();

// 콜백함수 (callback function) : 함수에 인자로 전달되는 함수, 함수리터럴, 화살표함수, IIEF
// 고차함수 (high-order function) : 함수를 인자로 전달받는 함수

// 고차함수
function repeat(n, f) {
    for (let i=0; i<n; i++) {
        f(i);
    }
}

// 콜백함수
const logAll = function(i) {
    console.log(i);    
};

// 콜백함수
const logOdd = function(i) {
    if (i%2) console.log(i);    
};

repeat(5, logAll); // 0 1 2 3 4
repeat(5, logOdd); // 1 3

// 실습1 : 두 수와 콜백함수를 입력하면 사칙연산을 수행하는 고차함수, 콜백함수 작성
function func1(a, b, f) {
    console.log(f(a, b));    
}
func1(3, 5, (a, b) => a+b);
func1(3, 5, (a, b) => a-b);
func1(3, 5, (a, b) => a*b);
func1(3, 5, (a, b) => a/b);

// 실습2 : 두 수와 콜백함수 두 개를 전달하고 
//         앞의 수가 크면 첫번째 콜백함수를 호출
//         뒤의 수가 크면 두번째 콜백함수를 호출
//         두 수가 같으면 same 이라는 문자열을 출력
//         첫번째 콜백함수는 두 수의 차를 연산
//         두번째 콜백함수는 뒤의 수의 제곱과 앞의 수의 제곱의 차를 연산
function func2(a, b, f1, f2) {
    if (a>b) console.log(f1(a, b));
    else if (b>a) console.log(f2(a, b));
    else console.log('same');    
}
func2(5, 3, (a, b)=>a-b, (a,b)=>b**2-a**2);
func2(3, 5, (a, b)=>a-b, (a,b)=>b**2-a**2);
func2(3, 3, (a, b)=>a-b, (a,b)=>b**2-a**2);

// 실습3 : 실습2번을 즉시실행함수로 변환
(function (a, b, f1, f2) {
    if (a>b) console.log(f1(a, b));
    else if (b>a) console.log(f2(a, b));
    else console.log('same');    
}(5, 3, (a, b)=>a-b, (a,b)=>b**2-a**2));

// 실습4 : 하나의 수를 입력받아 5배한 후 3을 빼고 2로 나누기. 고차함수/콜백함수 활용
function func3(n, f1, f2, f3) {
    console.log(f3(f2(f1(n))));    
}
func3(5, a=>a*5, a=>a-3, a=>a/2);

// 실습5 : 실습1번의 콜백함수들을 객체의 프라퍼티로 만들어 보기
const obj = {
    add: (a,b)=>a+b,
    sub: (a,b)=>a-b,
    mul: (a,b)=>a*b,
    div: (a,b)=>a/b
};
function func4(a, b, f) {
    console.log(f(a, b));    
}
func4(3, 5, obj.add);
func4(3, 5, obj.sub);
func4(3, 5, obj.mul);
func4(3, 5, obj.div);

// 순수 함수 (pure function)
// 외부 환경에 영향을 주지 않는(외부 변수의 값을 변경하지 않는) 함수
// 순수 함수는 파라미터에 기본타입의 인자만 전달받음

let count1 = 0;

// 순수 함수
function increase1(n) { // count1의 값 0이 n에 복제됨
    return ++n;
}

console.log(increase(count1)); // 1, count1=0
console.log(increase(count1)); // 1, count1=0

// 비순수 함수
function increase2() {
    return ++count1;
}

console.log(increase2()); // 1, count1=1
console.log(increase2()); // 2, count1=2






















