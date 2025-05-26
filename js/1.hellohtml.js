// 윈도우가 로딩을 마치면 뒤에 있는 함수를 실행
window.onload = function() {
    // 아이디가 p인 요소의 컨텐츠에 문자열을 넣음
    document.querySelector("#p").innerHTML = 'Hello Javascript!';
    // 웹브라우져 개발자도구내의 console에 문자열을 출력
    console.log('Javascript 재밌네요!');
};