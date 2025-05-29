// DOM요소 탐색
const button = document.getElementById('btn');
const clickOutput = document.getElementById('clickOutput');
const textInput = document.getElementById('textInput');
const textOutput = document.getElementById('textOutput');
const keyInput = document.getElementById('keyInput');
const keyOutput = document.getElementById('keyOutput');
const mouseArea = document.getElementById('mouseArea');
const mouseOutput = document.getElementById('mouseOutput');
const eventInfoBtn = document.getElementById('eventInfoBtn');
const eventInfoOutput = document.getElementById('eventInfoOutput');
const alertBtn = document.getElementById('alertBtn');
const alertBtn2 = document.getElementById('alertBtn2');

// 1. 버튼 클릭 이벤트
button.addEventListener('click', e => {
    clickOutput.textContent = '버튼 상태 : 클릭됨';
});

// 2. 텍스트 입력 이벤트
textInput.addEventListener('input', e => {
    textOutput.textContent = `입력된 텍스트 : ${e.target.value}`;
});

// 3. 키보드 이벤트
keyInput.addEventListener('keydown', e => {
    keyOutput.textContent = `입력된 키 : ${e.key}`;
});

// 4. 마우스 이벤트
mouseArea.addEventListener('mousemove', e => {
    mouseOutput.textContent = `${e.clientX}, ${e.clientY}`;
});
mouseArea.addEventListener('mouseenter', e => {
    mouseOutput.textContent = '마우스 커서가 영역에 들어옴!';
});
mouseArea.addEventListener('mouseleave', e => {
    mouseOutput.textContent = '마우스 커서가 영역에서 벗어남!';
});

// 5. 이벤트객체 정보 확인
eventInfoBtn.addEventListener('click', e => {
    eventInfoOutput.innerHTML = `
        이벤트 객체 : ${e}<br>
        이벤트 타입 : ${e.type}<br>
        이벤트 타겟 : ${e.target}<br>
        이벤트 현재타겟 : ${e.currentTarget}<br>
        이벤트 버블링 여부 : ${e.bubbles}<br>
        이벤트 취소가능 여부 : ${e.cancelable}<br>
        이벤트 단계 : ${e.eventPhase}<br>
    `;
});

// 6. 이벤트핸들러 제거

// 이벤트핸들러 함수
const handleClick = () => {
    alert('누르셨군요!');
};
const handleClick2 = () => {
    console.log('누르셨군요!');
};

alertBtn.addEventListener('click', handleClick);
alertBtn.addEventListener('click', handleClick2);
alertBtn2.addEventListener('click', () => {
    alertBtn.removeEventListener('click', handleClick);
});




