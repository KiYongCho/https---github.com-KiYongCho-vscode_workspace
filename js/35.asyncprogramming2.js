const result = document.querySelector('#result');
const btn1 = document.querySelector('#btn1');
const btn1_stop = document.querySelector('#btn1_stop');
const btn2 = document.querySelector('#btn2');
const btn2_stop = document.querySelector('#btn2_stop');
const btn3 = document.querySelector('#btn3');

// setTimeout : 일정 시간(밀리초)후에 콜백함수를 수행
let timeout;
btn1.addEventListener('click', e => {
    timeout = setTimeout(() => {
        result.innerHTML = 'setTimeout 실행됨!';
    }, 3000);
});
btn1_stop.addEventListener('click', e => {
    clearTimeout(timeout);
});

// setInterval : 일정 시간(밀리초)마다 콜백함수를 수행
let count = 0;
let interval;
btn2.addEventListener('click', e => {
    interval = setInterval(() => {
        result.innerHTML = ++count;
    }, 1000);
});
// clearInterval : setInterval 제거
btn2_stop.addEventListener('click', e => {
    clearInterval(interval);
})

btn3.addEventListener('click', e => {
    alert('버튼을 누르셨군요!');
});