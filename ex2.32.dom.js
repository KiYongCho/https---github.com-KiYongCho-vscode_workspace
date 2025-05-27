// DOM 실습2 (15분)

// 추가버튼을 누르면 리스트에 아이템을 추가
// 삭제버튼을 누르면 리스트에서 마지막 아이템을 삭제
// 초기화버튼을 누르면 리스트에서 모든 아이템을 삭제
// 아이템의 텍스트는 1부터 2, 3, 4 ...

const list = document.querySelector('#list');
const addBtn = document.querySelector('#add');
const removeBtn = document.querySelector('#remove');
const initBtn = document.querySelector('#init');
const txt = document.querySelector('#txt');
const selRemoveBtn = document.querySelector('#selRemove');

let count = 1;

// 추가
addBtn.addEventListener('click', () => {
    const li = document.createElement('li');
    li.textContent = count++;
    list.appendChild(li);
});

// 삭제
removeBtn.addEventListener('click', () => {
    if (count>1) {
        list.removeChild(list.lastElementChild);
        count--;
    }
});

// 초기화
initBtn.addEventListener('click', () => {
    list.innerHTML = '';
    count = 1;
});

// 번호선택 삭제
selRemoveBtn.addEventListener('click', () => {
    console.log(txt.value);    
});























