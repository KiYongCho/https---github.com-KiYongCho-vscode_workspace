// Promise
// - 비동기 요청 처리시 발생했던 콜백지옥(Callback Hell)을 해결하기 위해
//   ES6에서 추가된 객체
// - Promise는 콜백함수를 하나 인자로 전달받음
// - Promise가 전달받은 콜백함수는 인자로 
//   resolve(요청 성공시 수행할 콜백)와 reject(요청 실패시 수행할 콜백)을
//   인자로 받음

const promiseGet = url => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.send();
        xhr.onload = () => {
            if (xhr.status==200) {
                resolve(JSON.parse(xhr.response));
            } else {
                reject(new Error(xhr.status));
            }
        };
    });
};

// promiseGet('http://jsonplaceholder.typicode.com/posts/1')
// .then(response => console.log(response)) // 성공
// .catch(err => console.log(err)) // 실패
// .finally(() => console.log('성공/실패 여부와 상관없이 수행됨!')); // 성공하든 실패하든

// const promisePost = (url, payload) => {
//     return new Promise((resolve, reject) => {
//         const xhr = new XMLHttpRequest();
//         xhr.open('POST', url);
//         xhr.setRequestHeader('content-type', 'application/json');
//         xhr.send(payload);
//         xhr.onload = () => {
//             if (xhr.status==200 || xhr.status==201) {
//                 resolve(JSON.parse(xhr.response));
//             } else {
//                 reject(new Error(xhr.status));
//             }
//         };
//     });
// };

// promisePost(
//     'https://jsonplaceholder.typicode.com/posts',
//     '{"userId": 11, "id": 101, "title": "title", "body": "body"}'
// )
// .then(response => console.log(response))
// .catch(err => console.log(err))
// .finally(() => console.log('성공/실패 여부와 상관없이 수행됨!'));

// 실습 1
// Promise를 이용해서 id가 20인 게시물의 title을 'modified title'로 수정
// new Promise((resolve, reject) => {
//     const xhr = new XMLHttpRequest();
//     xhr.open('PATCH', 'https://jsonplaceholder.typicode.com/posts/20');
//     xhr.setRequestHeader('content-type', 'application/json');
//     xhr.send('{"title": "modified title"}');
//     xhr.onload = () => {
//         if (xhr.status==200 || xhr.status==201) {
//             resolve(JSON.parse(xhr.response));
//         } else {
//             reject(new Error(xhr.status));
//         }
//     };
// })
// .then(response => console.log(response))
// .catch(err => console.log(err))
// .finally(() => console.log('성공/실패 여부와 상관없이 수행됨!'));

// 실습 2
// Promise를 이용해서 postId가 3인 모든 댓글을 조회
// new Promise((resolve, reject) => {
//     const xhr = new XMLHttpRequest();
//     xhr.open('GET', 'https://jsonplaceholder.typicode.com/comments');
//     xhr.send();
//     xhr.onload = () => {
//         if (xhr.status==200 || xhr.status==201) {
//             resolve(
//                 // 서버에서 전송한 xhr.response(JSON문자열)
//                 // JSON.parse를 호출해서 J/S 배열로 변환한 후
//                 // comment의 postId가 3인 것들을 추출
//                 JSON.parse(xhr.response).filter(comment=>comment.postId=='3')
//             );
//         } else {
//             reject(new Error(xhr.status));
//         }
//     };
// })
// .then(response => console.log(response))
// .catch(err => console.log(err))
// .finally(() => console.log('성공/실패 여부와 상관없이 수행됨!'));

// 프라미스 체이닝 (Promise Chaining)
// 프라미스의 결과로 프라미스를 생성해서 프라미스들을 연결

// const url = 'https://jsonplaceholder.typicode.com';

// promiseGet(`${url}/posts/1`) // 1번 게시물
// .then(({userId}) => promiseGet(`${url}/users/${userId}`)) // 1번 게시물 작성자
// .then(userInfo => console.log(userInfo))
// .catch(err => console.log(err));


// setTimeout을 Promise를 사용해 비동기 호출

// const requestData1 = () => new Promise(
//     // 3초후에 1을 resolve하는 함수
//     resolve => setTimeout(() => resolve(1), 3000)
// );

// const requestData2 = () => new Promise(
//     // 2초후에 2를 resolve하는 함수
//     resolve => setTimeout(() => resolve(2), 2000)
// );

// const requestData3 = () => new Promise(
//     // 1초후에 3을 resolve하는 함수
//     resolve => setTimeout(() => resolve(3), 1000)
// );

// const res = []; // 결과를 저장할 배열
// requestData1() // requestData1 호출 (3초 후에 1을 resolve)
// // 3초 후에 1을 배열에 저장하고 requestData2 호출 (2초 후에 2를 resolve)
// .then(data => { res.push(data); return requestData2(); })
// // 2초 후에 2를 배열에 저장하고 requestData3 호출 (1초 후에 3을 resolve)
// .then(data => { res.push(data); return requestData3(); })
// // 1초 후에 3을 베열에 저장하고 배열을 출력
// .then(data => { res.push(data); console.log(res); }) // [1, 2, 3] (총 6초 소요)
// .catch(console.error);

// Promise를 사용하지 않은 아래 코드결과를 위 코드결과와 비교해 보자!
// const res = []; 
// setTimeout(() => res.push(1), 3000); // 3초후에 배열에 1 추가
// setTimeout(() => res.push(2), 2000); // 2초후에 배열에 2 추가
// setTimeout(() => res.push(3), 1000); // 1초후에 배열에 3 추가
// // 위 setTimeout 수행결과를 기다리지 않고 먼저 수행되어 버림
// console.log(res); // 배열 출력

// 프라미스 정적메소드

// 프라미스들을 병렬처리해서 상태가 모두 fulfilled이면 결과 값들을 가진 배열을 반환
// Promise.all(
//     [
//         1, // Promise.resolve(1)
//         2, // Promise.resolve(2)
//         3 // Promise.resolve(3)
//     ]
// )
// .then(console.log)
// .catch(console.error)

// 프라미스들을 병렬처리해서 상태중 하나가 fufilled가 되면 결과 값들을 가진 배열을 반환
// Promise.race(
//     [
//         1, // Promise.resolve(1)
//         2, // Promise.resolve(2)
//         3 // Promise.resolve(3)
//     ]
// )
// .then(console.log)
// .catch(console.error)

// 프라미스들을 병렬처리해서 상태가 모두 fulfilled이거나 rejected이면 결과 값들을 가진 배열을 반환
// Promise.allSettled(
//     [
//         1, // Promise.resolve(1)
//         2, // Promise.resolve(2)
//         3 // Promise.resolve(3)
//     ]
// )
// .then(console.log)
// .catch(console.error)


// fetch : 프라미스를 반환하는 비동기처리를 위한 WEB API (웹브라우져에서 작동)
// node환경에서 fetch를 사용하려면 node-fetch 라이브러리를 사용

// 2개 데이터를 비동기적으로 fetching
// fetch('https://jsonplaceholder.typicode.com/todos/1')
// .then(response => response.json())
// .then(data => console.log(data));

// fetch('https://jsonplaceholder.typicode.com/todos/2')
// .then(response => response.json())
// .then(data => console.log(data));

// 위 코드 실행 결과와 비교해 보자! 
// 2개 데이터를 동기적으로 fetching
// fetch('https://jsonplaceholder.typicode.com/todos/1')
// .then(response => response.json())
// .then(data => {
//     console.log(data);
//     fetch('https://jsonplaceholder.typicode.com/todos/2')
//     .then(response => response.json())
//     .then(data => console.log(data));
// });

// 실습 3
// fetch 함수를 사용해서 https://jsonplaceholder.typicode.com/todos
// 데이터를 get, post, put, patch, delete 하는 코드를 작성해 봅시다!

const request = {
    get(url) {
        return fetch(url);
    },
    post(url, payload) {
        return fetch(
            url, // uri
            {
                method: 'POST', // request method
                headers: { 'content-type': 'application/json' }, // header
                body: JSON.stringify(payload) // payload
            })
    },
    put(url, payload) {
        return fetch(
            url, // uri
            {
                method: 'PUT', // request method
                headers: { 'content-type': 'application/json' }, // header
                body: JSON.stringify(payload) // payload
            })
    },
    patch(url, payload) {
        return fetch(
            url, // uri
            {
                method: 'PATCH', // request method
                headers: { 'content-type': 'application/json' }, // header
                body: JSON.stringify(payload) // payload
            })
    },
    delete(url) {
        return fetch(
            url, // uri
            { method: 'DELETE' }
        )
    },
};

const url = 'https://jsonplaceholder.typicode.com/todos';

request.get(url)
.then(response => response.json())
.then(todos => console.log(todos))
.catch(err => console.log(err));

request.post(url, {userId: 1, title: 'javascript', completed: false})
.then(response => response.json())
.then(todo => console.log(todo))
.catch(err => console.log(err));

request.put(url+'/1', {userId: 1, title: 'jQuery', completed: true})
.then(response => response.json())
.then(todo => console.log(todo))
.catch(err => console.log(err));

request.patch(url+'/1', {title: 'React'})
.then(response => response.json())
.then(todo => console.log(todo))
.catch(err => console.log(err));

request.delete(url+'/1')
.then(response => response.json())
.then(todo => console.log(todo))
.catch(err => console.log(err));
