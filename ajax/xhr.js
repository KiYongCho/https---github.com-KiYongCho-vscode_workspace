// 문서가 로딩되면
window.onload = function() {

    document.querySelector('#btn').onclick = e => {

        // xhr객체 생성
        const xhr = new XMLHttpRequest();

        // xhr객체의 onreadystatechange프라퍼티에 readystatechange이벤트핸들러를 저장
        // readystatechange이벤트는 xhr객체의 readystate(0~4)의 값이 변경될때 발생
        // readystate : 0-요청초기화전, 1-서버연결, 2-서버에서요청을전송받음, 3-요청처리중, 4-요청처리완료
        xhr.onreadystatechange = e => {
            // xhr.readyState==4 : 요청처리완료
            // xhr.status==200 : 서버에서 보낸 상태코드가 200 (=서버에서 정상적으로 응답함)
            if (xhr.readyState==4 && (xhr.status==200|xhr.status==201)) {
                // 서버에서 응답받은 문자열을 result라는 아이디를 가진 요소의 컨텐츠영역에 보여줌
                document.querySelector('#result').innerHTML = xhr.responseText;
            }
        };


        // GET

        // GET 요청 초기화
        // 요청메소드, 요청URI, 비동기여부
        // xhr.open('GET', 'xhrdata.txt', true) // 로컬서버 데이터
        // xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts', true); // 원격서버 데이터

        // GET 요청 전송
        // xhr.send();


        // POST
        // jsonplaceholder는 정상 응답상태코드를 201로 보냄
        
        // POST 요청 초기화
        xhr.open('POST', 'https://jsonplaceholder.typicode.com/posts', true);

        // POST 헤더 설정
        // a=1&b=2... 식으로 전송할때
        // xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        // json데이터 전송할때
        //xhr.setRequestHeader('Content-type', 'application/json');
        
        // POST 요청 전송
        //const payload = {"userId":11, "title":"제목", "body":"내용내용내용"};
        //xhr.send(JSON.stringify(payload));

    }

};