// 윈도우 로딩이 끝나면 btn이라는 아이디를 가진 요소를 찾아서
// 클릭이벤트에 대한 처리자(이벤트리스너)를 추가
// 클릭이 일어나면 '클릭하셨군요!'라는 메세지를 경고창에 보여줌
window.onload = function() {
    document.querySelector("#btn").addEventListener("click", function() {
        alert("클릭하셨군요!");
    });
};