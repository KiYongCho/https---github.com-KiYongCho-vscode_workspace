/*
    연산자 (operator)
    - 연산자 (operator) : 연산에 사용되는 기호 또는 문자
    - 피연산자 (operand) : 연산에 사용되는 데이터, 변수
    - 산술, 문자열연결, 할당, 비교, 삼항, 논리, 쉼표, 그룹, typeof, instanceof
      , 지수, ?:, ??, delete, new, in
*/

let i = 3;
let j = 5;
let k = 7;

console.log(++i); // 산술 단항, 전치(연산자가 변수 앞), i가 증가한 후 출력
console.log(i++); // 산술 단항, 후치(연산자가 변수 뒤), 출력된 후 i가 증가
console.log(+i); // 산술 단항, 양수
console.log(-i); // 산술 단항, 음수
console.log(i+j); // 산술 이항
console.log(i-j); // 산술 이항
console.log(i*j); // 산술 이항
console.log(i/j); // 산술 이항
console.log(i%j); // 산술 이항, 나머지, 배수 구할때 사용
console.log(10 + '십'); // 문자열 접합, 두 항 중 하나라도 문자열 문자열 접합연산
console.log('10' + 10); // 문자열 접합
console.log('10' + '10'); // 문자열 접합
console.log(i=3); // 할당 연산자
console.log(i+=3); // 복합 할당 연산자
console.log(i*=3); // 복합 할당 연산자
console.log(i/=3); // 복합 할당 연산자
console.log(i%=3); // 복합 할당 연산자
console.log(i==0); // 비교 연산자, 두 항의 타입을 변경해서라도 값이 같으면 true
console.log(i=='0'); // 비교 연산자
console.log(i!=0); // 비교 연산자
console.log(i!='0'); // 비교 연산자
console.log(i===0); // 비교 연산자, 두 항의 값과 타입이 모두 같아야 true
console.log(i==='0'); // 비교 연산자
console.log(i!==0); // 비교 연산자, 두 항의 값과 타입이 모두 달라야 true
console.log(i!=='0'); // 비교 연산자
console.log(i==0 ? '0입니다!' : '0이 아닙니다'); // 삼항 연산자
console.log(true||true); // 논리 연산자, OR, 둘 중 하나라도 true면 전체 true
console.log(true||false);
console.log(false||true);
console.log(false||false);
console.log(true&&true); // 논리 연산자, AND, 둘 다 true일때만 true
console.log(true&&false);
console.log(false&&true);
console.log(true&&false);
console.log(!true); // 논리 연산자, NOT, true > false, false > true
i = i=3, i++, i++; // 코드 가독성을 해치므로 비추
console.log(i);
console.log((1+2)*(2+3)); // 그루핑 연산자, 연산 우선순위 부여
console.log(1+(2*2)+3);
console.log(2**5); // 지수 연산자, 2의 5승

// ?. : 옵셔널 체이닝 (Optional Chaining) 연산자 => null방지용 연산자
// null이나 undefined인 경우 undefined를 반환
// 그렇지 않으면 프라퍼티의 값을 반환
const obj = null;
console.log(obj?.value); // undefined
//console.log(obj.value); // TypeError: Cannot read properties of null

// ?? : 널 병합(Null Coalescing) 연산자 => null대체용 연산자
// 좌항의 피연산자가 null이나 undefined이면 우항을 선택, 그렇지 않으면 좌항 선택
const obj2 = null;
console.log(obj2??'대체값');
const obj3 = '원래값';
console.log(obj3??'대체값');

// 객체 및 프라퍼티 관련 연산자
// myobj는 두 개의 프라퍼티를 가진 객체
const myobj = {
    name: '홍길동', // name 프라퍼티
    age: 20 // age 프라퍼티
};

console.log(myobj);

delete myobj.age; // 프라퍼티 제거 연산자

console.log(myobj);

console.log('age' in myobj); // 프라퍼티 존재 확인 연산자













