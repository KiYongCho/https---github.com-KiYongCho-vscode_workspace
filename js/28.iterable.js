// iterable : 반복시킬 대상
// iterator : 반복시킬 대상을 반복하는 반복자
// iterable 예 : 문자열, 배열, DOMCollection, Map, Set ...
// iterable 특성
// 1. Symbol.iterator 라는 이터레이터를 가짐
// 2. for of 구문으로 순회 가능
// 3. 스프레드 문법 사용 가능
// 4. 구조분해할당 가능 (예외적으로 객체는 이터러블이 아니지만 구조분해할당 가능)

// 배열은 이터러블
const arr = [1, 2, 3];

// 배열에는 Symbol.iterator가 있음. 즉, 배열은 이터러블
console.log(Symbol.iterator in arr);

// Symbol.iterator메소드를 호출해서 이터레이터를 획득
const iterator = arr[Symbol.iterator]();

// 이터레이터는 next메소드를 가지고 있음
console.log('next' in iterator);

// next메소드는 이터러블을 반복시키는 메소드 
// : 반복 대상의 값과 반복 상태에 대한 정보
// 결과 객체 : {value:값, done:반복종료여부}
console.log(iterator.next()); // { value: 1, done: false }
console.log(iterator.next()); // { value: 2, done: false }
console.log(iterator.next()); // { value: 3, done: false }
console.log(iterator.next()); // { value: undefined, done: true }

// for of를 통한 이터러블 반복
for (ele of arr) {
    console.log(ele);  // 1 2 3     
}

// 스프레드 문법 : 이터러블의 요소들을 흩어 뿌림
console.log([...arr]); // [1, 2, 3]
console.log([...arr, 4, 5]); // [1, 2, 3, 4, 5]
console.log([...'Hello']); // ['H', 'e', 'l', 'l', 'o']
console.log([...[1, 2], ...[3, 4, 5]]); // [1, 2, 3, 4, 5]
// 객체는 이터러블이 아니지만 스프레드 문법을 사용 가능
console.log({...{x:1, y:2}}); // {x:1, y:2}
// 객체 스프레드시에 프라퍼티가 중복되면 마지막 프라퍼티만 남음
console.log({...{x:1, y:2}, ...{y:3, z:4}}); // {x:1, y:3, z:4}

// 구조분해할당 (destructuring assignment)
const [first, second] = [1, 2]; // first=1, second=2

// Rest요소를 사용한 구조분해할당
const [x, ...y] = [1, 2, 3]; // x=1, y=[2, 3]

// 구조분해할당시 기본값 설정
const [aa, bb=2, cc] = [1,,3]; // aa=1, bb=2, cc=3

// 문자열 구조분해할당
const [a, b, c, d, e] = 'Hello'; // a='H', b='e', c='l', d='l', e='o'
const [a1, b1, c1, d1, e1] = 'Hi'; // a1='H', b1='i', 나머지=undefined

// 구조분해할당을 통해 문자열 객체의 length 프라퍼티 추출
const str = 'Hello';
const {length} = str; // length=5

// 객체 구조분해할당
const person = {
    name: '홍길동',
    age: 30
};
const {name, age} = person; // name='홍길동', age=30

const persons = [
    {pname: '홍길동', page: 20},
    {pname: '강감찬', page: 30},
    {pname: '이순신', page: 40}
];
const [firstPersonObject,,] = persons; // firstPersonObject={pname: '홍길동', page: 20}
const [,{pname},] = persons; // pname='강감찬'
const [,,{page}] = persons; // page=40

const user = {
    uname: '홍길동',
    addr: {
        city: '서울',
        dong: '역삼'
    }
};

// 실습 : 구조분해할당을 통해 '홍길동님은 서울시 역삼동에 삽니다!' 출력
const {uname, addr:{city, dong}} = user;
console.log(`${uname}님은 ${city}시 ${dong}동에 삽니다!`);



































