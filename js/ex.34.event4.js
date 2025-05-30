// event실습 4 : 폼 필드 검증 (form field validation)

// 전송버튼을 클릭하면...
// 1. 아이디, 비밀번호는 12자 이하, 필수 입력, 중간에 공백문자 불허
// 2. 성별은 필수체크
// 3. 취미는 2개 이상 선택
// 4. 자기소개 필수 입력
// 조건을 모두 만족하면 '폼이 전송되었습니다!' alert
// 그렇지 않으면 해당 필드에 포커스

const writeForm = document.querySelector("form[name='writeForm']");

document.getElementById('submit').addEventListener('click', e => {

    const uid = document.querySelector("input[name='uid']");
    if (!uid.value.trim()) {
        alert('아이디는 필수입력입니다!');
        uid.focus();
        return false;
    }
    if (uid.value.trim().includes(' ')) {
        alert('아이디는 공백문자를 포함할 수 없습니다!');
        uid.focus();
        return false;
    }
    if (uid.value.trim().length > 12) {
        alert('아이디는 12자 이내로 작성해 주세요!');
        uid.focus();
        return false;
    }

    const upass = document.querySelector("input[name='upass']");
    if (!upass.value.trim()) {
        alert('비밀번호는 필수입력입니다!');
        upass.focus();
        return false;
    }
    if (upass.value.trim().includes(' ')) {
        alert('비밀번호는 공백문자를 포함할 수 없습니다!');
        upass.focus();
        return false;
    }    
    if (upass.value.length > 12) {
        alert('비밀번호는 12자 이내로 작성해 주세요!');
        upass.focus();
        return false;
    }

    // radio 중에 체크된 radio
    const gender = document.querySelector("input[type='radio']:checked");
    if (!gender) { // 체크된 radio가 없다면
        alert('성별을 선택해 주세요!');
        return false;
    }

    // 모든 체크박스를 찾아서
    const hobbys = document.querySelectorAll("input[type='checkbox']");
    let checkCount = 0; // 체크된 체크박스의 수
    hobbys.forEach(hobby => { // 체크박스의 수만큼 반복
        if (hobby.checked) checkCount++; // 체크박스가 체크되어 있다면 체크박스의 수
    });
    if (checkCount < 2) {
        alert('취미를 2개 이상 선택해 주세요!');
        return false;
    }

    const intro = document.querySelector("input[name='intro']");
    if (!intro.trim().value) {
        alert('자기소개는 필수입력입니다!');
        intro.focus();
        return false;
    }        

    alert('폼이 전송되었습니다!');

});














































