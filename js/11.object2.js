const hong = {};
console.log(hong);

// 프라퍼티 동적 생성 (동적 생성 = 실행시간에 생성)
// 인터프리터언어의 특성
hong.name = '홍길동';
hong['first-name'] = '길동';
hong['last-name'] = '홍';
console.log(hong);

// 프라퍼티 축약 표현 (ES6)
// 프라퍼티명과 변수명이 같으면 프라퍼티는 변수의 값을 가지게 됨
let x = 1;
let y = 2;
const obj1 = {
    x, // x: 1
    y // y: 2
};
console.log(obj1);

// 계산된 프라퍼티명
const prefix = 'prop';
let i = 0;
const obj2 = {
    [`${prefix}-${++i}`]: i,
    [`${prefix}-${++i}`]: i,
    [`${prefix}-${++i}`]: i
};
console.log(obj2);

// 실습 : man이라는 객체를 생성해서 프라퍼티명을
//         manprop-1 ~ manprop-100까지 생성하고 값을 1~100까지 가지도록
const man = {};
for (let i=1; i<=100; i++) {
    man[`manprop-${i}`] = i;
}
console.log(man);

// 실습 : primenum이라는 객체를 생성해서 2~1000의 범위에서 프라퍼티명을
//         prime-2 ~ prime-마지막소수까지 생성하고 값을 소수를 가지도록
//         소수(prime number) : 1과 자기자신 외에는 나누어 떨어지지 않는 수
//         2, 3, 5, 7, 11, 13 ...
const primenum = {};
for (let i=2; i<=1000; i++) {
    let isPrime = true; // 소수
    for (let j=2; j<i; j++) {
        if (i%j==0) { // 나누어 떨어짐
            isPrime = false; // 소수 아님
            break;
        }
    }
    if (isPrime) { // 소수일때만 출력
        primenum[`prime-${i}`] = i;
    }
}
console.log(primenum);

// 동적 메소드 생성
// 프라퍼티에 함수를 할당
const kang = {
    name: '강감찬',
    age: 30
};
kang.getName = function() {
    return this.name;
};
kang.getAge = function() {
    return this.age;
};
console.log(kang);
console.log(kang.getName()); // 강감찬
console.log(kang.getAge()); // 30

// 메소드 축약 표현 (ES6)
const choi = {
    name: '최영',
    age: 20,
    getName() {
        console.log(this.name);        
    },
    getAge() {
        console.log(this.age);
    }
};
choi.getName(); // 최영
choi.getAge(); // 20











