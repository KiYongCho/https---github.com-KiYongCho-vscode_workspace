// event 실습 1 : 숫자카운터

// 증가버튼 클릭시 1씩 증가
// 감소버튼 클릭시 1씩 감소
// 텍스트 상자에 직접 입력 못하도록

const counter = document.querySelector('#counter');
const increase = document.querySelector('#increase');
const decrease = document.querySelector('#decrease');

increase.addEventListener('click', e => {
    counter.value = +counter.value + 1;
});

decrease.addEventListener('click', e => {
    counter.value = +counter.value - 1;
});

// focus : 엘리먼트가 포커스를 받음
// blur : 엘리먼트가 포커스를 잃어버림
counter.addEventListener('focus', e => {
    counter.blur();
});