/*
    배열 (Array) : 하나의 변수에 여러 데이터를 저장할 수 있는 자료구조
    * 요소(element) : 배열에 저장되는 각각의 값
    * 인덱스(index) : 0부터 시작하는 배열 공간의 순서 번호 (인덱스 범위:0~length-1)
    * 크기(length) : 배열에 포함되어 있는 요소의 수
    * 자바스크립트 배열의 특성
    - 어떤 타입의 값도 저장 가능
    - 배열의 크기가 동적으로 늘어날 수 있음 (동적 배열)
    - 크기를 지정하고 사용할 필요가 없음
    - 값을 연속적으로 저장할 필요도 없음
    - 유사배열객체나 이터러블을 배열로 변환 가능
*/

const arr1 = [1, 2, 3, 4, 5]; // 크기 5, 인덱스 0~4
console.log(arr1.length); // 5
console.log(arr1[0]); // 1
console.log(arr1[4]); // 5
console.log(arr1[5]); // undefined

// 동적 배열 요소 추가
arr1[5] = 6;
console.log(arr1.length); // 6
console.log(arr1); // [ 1, 2, 3, 4, 5, 6 ] // 밀집배열 (dense array)

arr1[100] = 101;
console.log(arr1.length); // 101
console.log(arr1); // [ 1, 2, 3, 4, 5, 6, <94 empty items>, 101 ] // 희소배열 (sparse array)

// 배열 생성법

// 1. 배열리터럴
const arr3 = [1, 2, 3, 4, 5];

// 2. 배열 생성자함수
const arr4 = new Array(10); // 크기가 10인 배열
console.log(arr4.length); // 10
console.log(arr4); // [ <10 empty items> ]

const arr5 = new Array(1, 2, 3); // 크기가 3인 배열 = [1, 2, 3]
console.log(arr5.length); // 3
console.log(arr5); // [1, 2, 3]

// 3. Array.of 사용
const arr6 = Array.of(1); // 크기가 1인 배열 = [1]
console.log(arr6.length); // 1
console.log(arr6); // [1]

const arr7 = Array.of(1, 2, 3); // 크기가 3인 배열 = [1, 2, 3]
console.log(arr7.length); // 3
console.log(arr7); // [1, 2, 3]

// 4. Array.from 사용

// {length:2, 0:'a', 1:'b'} : 유사배열객체, length프라퍼티를 가지고 키가 인덱스인 객체
const arr8 = Array.from({length:2, 0:'a', 1:'b'});
console.log(arr8.length); // 2
console.log(arr8); // ['a', 'b']

// 'Hello' : 이터러블, 반복가능한 객체
const arr9 = Array.from('Hello');
console.log(arr9.length); // 5
console.log(arr9); // ['H', 'e', 'l', 'l', 'o']

// 배열 요소 삭제
const arr10 = [1, 2, 3, 4, 5];
delete arr10[0];
console.log(arr10.length); // 5
console.log(arr10); // [ <1 empty item>, 2, 3, 4, 5 ]

arr10.splice(1, 1); // 1번 인덱스에서 1개 요소를 제거
console.log(arr10.length); // 4
console.log(arr10); // [ <1 empty item>, 3, 4, 5 ]

arr10.splice(0, 1, 0, 1, 2); // 0번 인덱스에서 1개 요소를 제거하고 0,1,2 삽입
console.log(arr10.length); // 6
console.log(arr10); // [0, 1, 2, 3, 4, 5 ]


























