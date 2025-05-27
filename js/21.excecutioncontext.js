/*
    스코프(Scope) : 식별자(변수, 함수, ...)가 참조되는 범위, 전역/함수/블럭/모듈
    실행컨텍스트(Execution Context) : 코드가 실행되는 환경, 전역/지역/eval/모듈
    - 항상 스코프가 먼저 생성되고 실행컨텍스트가 생성됨
    - 실행컨텍스트는 스택구조로 생성되고 소멸됨
      (전역>Outer함수>Inner함수 순으로 생성되고 Inner함수>Outer함수>전역 순으로 소멸)
*/

const x = 1;
function foo() {
    const y = 2;
    function bar() {
        const z = 3;
        console.log(x +  y + z); // 6    
    }
    bar();
}
foo();
/*
    1. 전역스코프 생성 : 전역스코프내에 x, foo 생성
    2. 전역실행컨텍스트 생성 : x = 1, foo함수 호출
    3. foo함수 호출시에 foo함수스코프 생성 : foo함수스코프내에 y, bar 생성
    4. foo지역실행컨텍스트 생성 : y = 2, bar함수 호출
    5. bar함수 호출시에 bar함수스코프 생성 : bar함수스코프내에 z 생성
    6. bar지역실행컨텍스트 생성 : z = 3, consolg.log 실행
    7. bar함수 종료 > bar지역실행컨텍스트 소멸 > bar함수스코프 소멸
    8. foo함수 종료 > foo지역실행컨텍스트 소멸 > foo함수스코프 소멸
    9. 전역실행컨텍스트 소멸 > 전역스코프 소멸
*/



























