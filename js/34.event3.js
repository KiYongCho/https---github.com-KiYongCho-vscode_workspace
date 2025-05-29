// 기본이벤트 (default event)
// 엘리먼트에 기본적으로 적용되어 있는 이벤트
// ex) a링크를 누르면 다른URL로 이동, submit버튼을 누르면 폼데이터를 전송 ...

// 기본이벤트 방지

const a = document.querySelector('a');
a.addEventListener('click', e => {
    e.preventDefault(); // 기본이벤트 방지
    location.href = 'https://www.naver.com'; // 네이버로 이동
});

const form = document.querySelector('form');
form.addEventListener('submit', e => {
    e.preventDefault();
    const nameVal = document.querySelector('#name').value;
    if (!nameVal) { // 사용자가 이름란에 입력을 안하면
        alert('이름을 꼭 입력하세요!');
        return false;
    } else {
        alert(`${nameVal}님 환영!`);
        form.submit(); // 폼데이터 전송
    }
});


// 이벤트 전파 중지 (event propagation stop)
// 버블링단계로 이벤트객체가 전달되는걸 중지
// 캡춰링단계에서 이벤트처리를 하지 않으려면 ? 이벤트핸들러의 세번째 인자를 false로
// 버블링단계에서 이벤트처리를 하지 않으려면 ? e.stopPropagation() : 이벤트객체 전달 중지

const outer = document.querySelector('#outer');
const inner = document.querySelector('#inner');
const btn = document.querySelector('#btn');

outer.addEventListener('click', e => {
    console.log('outer클릭됨! (false)');
    console.log(e.eventPhase);    
});
inner.addEventListener('click', e => {
    console.log('inner클릭됨! (false)'); 
    console.log(e.eventPhase);
});
btn.addEventListener('click', e => { 
    e.stopPropagation(); // 이벤트 전파 중지    
    console.log('btn클릭됨! (false)');
    console.log(e.eventPhase);
});
// 세번째 인자 true : Capturing 단계에서 이벤트를 처리함
// outer.addEventListener('click', e => { 
//     console.log('outer클릭됨! (true)');
//     console.log(e.eventPhase);
// }, true);
// inner.addEventListener('click', e => { 
//     console.log('inner클릭됨! (true)');
//     console.log(e.eventPhase);
// }, true);
// btn.addEventListener('click', e => { 
//     console.log('btn클릭됨! (true)'); 
//     console.log(e.eventPhase);
// }, true);
























