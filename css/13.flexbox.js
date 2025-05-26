// 문서내에서 flex-container라는 클래스를 가진 요소들 중 첫번째
const container = document.querySelectorAll('.flex-container')[0];

// 문서내에서 아이디가 reset인 요소에 클릭이벤트핸들러(클릭이벤트가 발생하면 처리할 함수)를 추가
// 아이디가 reset인 요소를 클릭하면 페이지를 리로딩(새로고침)
document.querySelector('#reset').addEventListener('click', () => {
    location.reload();
});

// 모든 button요소 각각에 click이벤트핸들러를 추가 
// 각 button이 클릭되면 컨테이너의 id에 해당하는 스타일 속성값을 버튼의 id로 함
// <p id="flex-direction">[container] flex-direction&nbsp;
//      <button id="row">row</button>&nbsp;
// id가 row인 버튼을 클릭하면 컨테이너의 flex-direction 속성의 값을 row로 변경
document.querySelectorAll('button').forEach(
    btn => btn.addEventListener('click', event => {
        container.style[event.target.parentNode.id] = event.target.id;
    })
);