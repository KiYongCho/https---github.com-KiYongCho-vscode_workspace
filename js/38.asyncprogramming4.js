// generator 함수
// 함수의 실행을 나눠서 할 수 있는 함수
// 제네레이터 함수는 제네레이터 객체를 반환
// 제네레이터 객체는 이터러블이면서 이터레이터
// yield 키워드를 통해서 함수 실행 흐름을 양보할 수 있음

function* generatorFunc() {
    try {
        console.log('함수 a부분 실행됨!');
        yield 1;
        console.log('함수 b부분 실행됨!');
        yield 2;
        let i = 10 / 0;
        console.log('함수 c부분 실행됨!');
        yield 3;
        console.log('함수 d부분 실행됨!');
    } catch (err) {
        console.log(err);        
    }
}

// 제네레이터 객체
const generator = generatorFunc();
// yield 1 코드까지 실행
console.log(generator.next()); // { value: 1, done: false }
// yield 2 코드까지 실행
console.log(generator.next()); // { value: 2, done: false }
// yield 3 코드까지 실행
console.log(generator.next()); // { value: 3, done: false }
// 함수실행이 완료되면
//console.log(generator.return('실행 완료!')); // { value: '실행 완료!', done: true }
// 함수실행 중 에러가 발생하면
console.log(generator.throw('에러 발생!')); // { value: undefined, done: true }


// async / await
// 비동기 처리를 조금 더 심플하게 하기 위해서 ES8에서 도입된 키워드
// 일반적으로 함수 앞에 async 키워드를 붙여서 비동기 처리하는 함수로 만들고
// 비동기 함수내에서 동기처리해야 하는 코드 앞에 await 키워드를 사용함
// node 환경에서 fetch함수를 사용하려면 node-fetch를 설치해야 함
// 터미널 : npm install node-fetch@2 --save-dev

import fetch from 'node-fetch';

// 비동기 함수
async function fetchTodo() {
    const url = 'https://jsonplaceholder.typicode.com/todos/1';
    // url의 데이터 인출이 완료될때까지 대기했다가 response에 할당
    const response = await fetch(url);
    // response를 json으로 변환할때까지 대기했다가 todo에 할당
    const todo = await response.json();
    console.log(todo);
}
fetchTodo();




















