// dom 실습 4

/*
  기본데이터
  1 홍길동 100 90 80
  2 강감찬 90 80 70
  3 이순신 80 70 60

  데이터초기화 버튼을 클릭하면 표시된 데이터를 화면에서 삭제
  데이터불러오기 버튼을 클릭하면 기본데이터를 tbody에 표시
  총점출력 버튼을 클릭하면 총점을 연산하여 tfoot에 출력
  * 선택구현
    1. 번호순정렬버튼 - 한번 클릭시 번호순 내림차순 정렬, 두번 클릭시 번호순 오름차순 정렬
    2. 데이터추가버튼 
      - 데이터를 추가할 수 있는 UI를 동적으로 생성하고 데이터추가버튼 클릭시 tbody내에 추가
      - 데이터 추가시 총점 연산하여 반영
    3. 삭제
*/

// 초기데이터 배열
let studentArr = [
    {num: 1, name: '홍길동', kor: 100, eng: 90, math: 80},
    {num: 2, name: '강감찬', kor: 90, eng: 80, math: 70},
    {num: 3, name: '이순신', kor: 80, eng: 70, math: 60}
];
// 과목별합계
let sumArr = [0, 0, 0, 0];
// 기본 정렬방식 : 내림차순
let sortType = 'desc';
// 기본데이터의 마지막번호
let lastNum = studentArr.length;

// 데이터초기화 버튼 클릭시 init함수 호출
document.querySelector('#initBtn').addEventListener('click', () => {
    init();
});

// 데이터불러오기 버튼 클릭시 초기화 한 후에 배열을 인자로 render함수 호출
document.querySelector('#loadBtn').addEventListener('click', () => {
    init();
    render(studentArr);
});

// 총점출력 버튼 클릭시 calcSum함수에 배열을 전달해서 총점을 연산하고 결과를
// renderSum함수에 보내서 화면에 표시
document.querySelector('#sumBtn').addEventListener('click', () => {
    renderSum(calcSum(studentArr));
});

// 번호순정렬 버튼 클릭시 초기화한 후 배열 순서를 역순으로 해서 render함수 호출
document.querySelector('#sortBtn').addEventListener('click', () => {
    init();
    render(studentArr.reverse());
    renderSum(calcSum(studentArr));
});

// 초기화
const init = () => {
    document.querySelector('tbody').innerHTML = '';
    document.querySelector('tfoot').innerHTML = '';
};

// 리스트 출력
const render = studentArr => {
    for (let student of studentArr) { // 배열내 객체 수만큼 반복
        // 각 행의 tr코드를 생성
        const eachRow = `
            <tr>
                <td>${student.num}</td>
                <td>${student.name}</td>
                <td class='score'>${student.kor}</td>
                <td class='score'>${student.eng}</td>
                <td class='score'>${student.math}</td>
                <td class='score'>${student.kor+student.eng+student.math}</td>
                <td><button class='delBtn' data-num='${student.num}'>삭제</button></td>
            </tr>
        `;
        // tbody에 생성한 tr을 추가
        document.querySelector('tbody').innerHTML += eachRow;
    }

    // 삭제 이벤트핸들러 등록
    // 클래스가 delBtn인 button들의 배열을 생성해서 button마다
    // 클릭이벤트핸들러 추가 : 이벤트핸들러에서는 발생한 이벤트(e)를 deleteRow함수에 전달
    [...document.querySelectorAll('.delBtn')].forEach(delBtn => {
        delBtn.addEventListener('click', e => deleteRow(e));
    });

};

// 합계 연산
const calcSum = () => {
    // 합계 저장 배열을 초기화
    sumArr = [0, 0, 0, 0];
    // 배열의 요소에 국어,영어,수학,개인총점들의 합을 저장
    for (let student of studentArr) {
        sumArr[0] += student.kor;
        sumArr[1] += student.eng;
        sumArr[2] += student.math;
        sumArr[3] += student.kor + student.eng + student.math;
    }
    return sumArr;
};

// 합계 출력
// 가져온 합계저장 배열을 tr로 만들어서 tfoot에 추가
const renderSum = sumArr => {
    const sumRow = `
        <tr>
            <th colspan='2'>과목합계</th>
            <td class='score'>${sumArr[0]}</td>
            <td class='score'>${sumArr[1]}</td>
            <td class='score'>${sumArr[2]}</td>
            <td class='score'>${sumArr[3]}</td>
        </tr>
    `;
    document.querySelector('tfoot').innerHTML = sumRow;  
};

// 등록
document.querySelector('#registBtn').addEventListener('click', () => {
    // 등록에 필요한 사용자가 입력한 값들
    const nameVal = document.querySelector('#name').value;
    const korVal = parseInt(document.querySelector('#kor').value);
    const engVal = parseInt(document.querySelector('#eng').value);
    const mathVal = parseInt(document.querySelector('#math').value);
    // 입력한 데이터를 객체로 만들어서 데이터 배열에 추가
    studentArr.push({ 
        num: ++lastNum,
        name: nameVal,
        kor: korVal,
        eng: engVal,
        math: mathVal
    });
    init();
    render(studentArr);
});

// 삭제
// e : 삭제버튼에서 발생한 이벤트 객체
// e.target : 이벤트를 발생시킨 객체
const deleteRow = e => {
    // 삭제시 배열에서 객체를 삭제
    // 배열에 있는 객체들의 num과 이벤트를 발생시킨 객체의 data-num속성의 값이 다른것만 추출
    studentArr = studentArr.filter(student => student.num != e.target.dataset.num);
    // 삭제시 화면에서 tr을 제거
    // tbody에서 삭제할 tr을 찾아서 제거
    document.querySelector('tbody').removeChild(
        [...document.querySelector('tbody').children]
            .find(tr => tr==e.target.parentNode.parentNode)
    );   
};










