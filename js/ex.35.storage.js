/*
    웹스토리지 (Web Storage) 
    : 경량의 데이터를 저장 및 관리하기 위해 웹브라우져가 관리하는 로컬 저장소
    1. localStorage
       문자열로된 키/값의 쌍을 저장 및 관리, 브라우져 종료시에도 데이터 유지
    2. sessionStorage
       문자열로된 키/값의 쌍을 저장 및 관리, 브라우져의 탭에서만 데이터 유지
    * 메소드
       setItem(키, 값) : localStorage나 sessionStorage에 키/값 쌍을 저장
       getItem(키) : 키에 해당하는 값을 획득
       removeItem(키) : 키에 해당하는 키/값을 제거
*/

// 문서가 로딩되면 loadTodos 호출
window.onload = function() {
    loadTodos();
};

// renderTodos 호출
function loadTodos() {
    renderTodos();
}

// 화면의 ul에 할일목록을 출력
function renderTodos() {
    // ul
    const todoList = document.querySelector('#todoList');
    // ul내의 li 초기화
    todoList.innerHTML = '';

    // 할일목록 가져오기
    const todos = getTodos();
    // 할일 각각에 대해서
    todos.forEach((todo, idx) => {
        const li = document.createElement("li"); // li 생성
        li.textContent = todo; // li내의 컨텐츠 설정
        const delBtn = document.createElement("button"); // 삭제 button 생성
        delBtn.textContent = '삭제'; // button내의 컨텐츠를 '삭제'로 설정
        // 삭제버튼 클릭되면
        delBtn.addEventListener('click', e => {
            // 인덱스에 해당하는 할일 제거
            deleteTodo(idx);
        });
        // li에 삭제버튼 추가
        li.appendChild(delBtn);
        // ul에 li 추가
        todoList.appendChild(li);
    });
}

// 로컬스토리지에서 todos키에 해당하는 할일목록을 획득
function getTodos() {
    const todos = localStorage.getItem('todos');
    // 할일목록이 있다면 반환, 없으면 빈 배열 반환
    return todos ? JSON.parse(todos) : [];
}

// 할일 추가
function addTodo() {
    // 할일 입력하는 입력상자
    const txt = document.querySelector('#txt');
    // 입력상자에 입력한 문자열의 앞/뒤 공백 제거
    const newTodo = txt.value.trim();
    // 할일 내용이 없다면 리턴
    if (newTodo == '') return;
    // 할일 목록을 가져옴
    let todos = getTodos();
    // 입력된 텍스트를 할일목록에 추가
    todos.push(newTodo);
    // 로컬스토리지에 할일목록을 갱신
    localStorage.setItem("todos", JSON.stringify(todos));
    // 입력상자 초기화
    txt.value = '';
    // 화면에 랜더링
    renderTodos();
}

// 인덱스에 해당하는 할일 제거
function deleteTodo(idx) {
    // 할일목록을 가져오고
    let todos = getTodos();
    // 인덱스에 해당하는 할일 제거
    todos.splice(idx, 1);
    // 로컬스토리지 갱신
    localStorage.setItem('todos', JSON.stringify(todos));
    // 다시 랜더링
    renderTodos();
}

// 버튼 클릭시 addTodo 호출
document.querySelector('#btn').addEventListener('click', e => {
    addTodo();
});