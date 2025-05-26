/*
    제어문
    1. 조건문 : if, switch
    2. 반복문 : for, while, do while
    3. break : switch구문을 벗어나거나, 가장 가까운 반복문을 벗어남
    4. continue : 다음번 반복을 수행
*/

// 조건문 if

let age = 15;

if (age>19) { // age가 19보다 크다면
    console.log('19세 초과!');
} else if (age>15) { // age가 19보다 크지는 않지만 15보다는 크다면
    console.log('15세 초과!');    
} else if (age>13) { // age가 15보다 크지는 않지만 13보다는 크다면
    console.log('13세 초과!');    
} else { // age가 13보다 크지 않다면
    console.log('13세 이하!');   
}

let val = 3;
switch (val) {
    case 1: console.log('월요일'); break;
    case 2: console.log('화요일'); break;
    case 3: console.log('수요일'); break;
    case 4: console.log('목요일'); break;
    case 5: console.log('금요일'); break;
    case 6: console.log('토요일'); break;
    case 7: console.log('일요일'); break;
    default : console.log('1~7사이의 값이 아님!');    
}

// 실습 : 위 switch구문을 if구문으로 변경
if (val==1) console.log('월요일');
else if (val==2) console.log('화요일');
else if (val==3) console.log('수요일');
else if (val==4) console.log('목요일');
else if (val==5) console.log('금요일');
else if (val==6) console.log('토요일');
else if (val==7) console.log('일요일');
else console.log('1~7가이의 값이 아님!');

// 값의 범위에 따른 조건 판별에는 if가 사용되고, 
// 값의 case에 따른 조건 판별에는 switch가 사용됨
// 모든 switch구문은 if구문으로 변경 가능
// 모든 if구문을 switch구문으로 변경하는 것은 불가능
let l = 3;
if (l>0) {
    console.log('0보다 큼!');    
}

// 실습 : 100이하의 수이면 5로 나눈 나머지를 출력
//          100초과하는 수이면 3으로 나눈 나머지를 출력
let num = 50;
if (num<=100) {
    console.log(num%5);   
} else {
    console.log(num%3);
}

// 반복문 for
// 특정 회수만큼 반복 수행할 코드가 있다면 for를 사용

// 초기식, 판별식, 증감식
// 1. 초기식 수행 : for문에서 처음 한번만 수행
// 2. 판별식 수행
//   2-1. 판별식 결과가 true이면 for블럭코드 실행
//   2-2. 판별식 결과가 false이면 for블럭 빠져 나감
// 3. 증감식 수행
// 2. 판별식 수행
// ...
for (let i=0; i<10; i++) {
    console.log(i);    
}

for (let i=5; i>0; i--) {
    console.log(i);   
}

// 중첩 for : for문 내에 for문
// i가 한번 반복하면 j는 4번 반복
for (let i=1; i<5; i++) {
    for (let j=1; j<5; j++) {
        console.log(i*j); // 16번 반복 수행
    }
}

// 반복문 while
// - 조건이 true인 동안 반복 수행
// - 무한반복에 빠지지 않도록 주의!
let v = 10;
while (v>0) {
    console.log(v);
    v--;    
}

// 반복문 do while
// while과 동일하게 작동하나 무조건 한번은 수행
let v2 = 10;
do {
    console.log(v2);
    v2--;
} while (v2>0);

// break
// 1. switch 구문을 빠져나갈 때
// 2. 가장 가까운 반복문을 빠져나갈 때
for (let i=0; i<10; i++) {
    console.log(i);
    if (i==5) break;    
}

// continue
// continue 하단 코드를 수행하지 않고 다음번 반복을 수행
for (let i=0; i<10; i++) {
    if (i%2==0) continue; // 짝수라면
    console.log(i);
}

// for in 구문
// 객체의 프라퍼티를 반복할때 사용
const hong = {
    name: '홍길동',
    age: 20,
    address: '서울특별시 아무구 아무동'
};
for (let key in hong) {
    console.log(key, hong[key]); // 프라퍼티키, 프라퍼티값    
}

// for of 구문
// 이터러블(Iterable)을 반복할 때 사용
// 이터러블 : 반복 가능한 객체 (배열, 문자열, Map, Set ...)
let str = 'Hello Javascript!';
for (let ch of str) {
    console.log(ch);    
}









































