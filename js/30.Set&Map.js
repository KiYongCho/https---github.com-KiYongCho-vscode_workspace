// Set : 중복과 순서가 없는 자료구조, 이터러블
const set1 = new Set([1, 2, 2, 3, 3, 4, 5]);
console.log(set1); // { 1, 2, 3, 4, 5 }
console.log(set1.size); // 5

const set2 = new Set('Hello');
console.log(set2); // { 'H', 'e', 'l', 'o' }
console.log(set2.size); // 4

set1.add(6);
console.log(set1); // { 1, 2, 3, 4, 5, 6 }

console.log(set1.has(3)); // true
console.log(set1.has(10)); // false

set1.delete(2);
console.log(set1); // { 1, 3, 4, 5, 6 }

set2.clear();
console.log(set2); // {} : empty set, 요소가 없는 셋

set1.forEach(value => console.log(value));

// Map : 엔트리(키:값)로 구성, 순서는 없음, 키 중복 불허, 값 중복 허용, 이터러블
//          일반적으로 Map은 키에 해당하는 값을 검색하기 위한 자료구조
const map = new Map([
    ['key1', 'value1'],
    ['key2', 'value2']
]);
console.log(map); // Map(2) { 'key1' => 'value1', 'key2' => 'value2' }

map.set('key3', 'value3');
console.log(map); // Map(3) { 'key1' => 'value1', 'key2' => 'value2', 'key3' => 'value3' }

console.log(map.size); // 3

console.log(map.get('key1')); // value1
console.log(map.get('key4')); // undefined

console.log(map.has('key2')); // true
console.log(map.has('key4')); // false

map.delete('key2');
console.log(map); // Map(2) { 'key1' => 'value1', 'key3' => 'value3' }

const map2 = new Map([
    ['a', 1],
    ['b', 2],
    ['c', 3]
]);
console.log([...map2.keys()]); // ['a', 'b', 'c']
console.log([...map2.values()]); // [1, 2, 3]
console.log([...map2.entries()]); // [['a', 1], ['b', 2], ['c', 3]]

map2.forEach((v, k) => console.log(v, k));

// 실습 : 중복되지 않는 로또번호(1~45) 6개 출력
const lottoNumSet = new Set();
while (lottoNumSet.size<6) {
    lottoNumSet.add(Math.floor(Math.random()*45) + 1);
}
console.log(lottoNumSet);

// 실습 : 아래 객체를 Map으로 변환해서 출력
const hong = {
    name: '홍길동',
    age: 20,
    hobby: ['축구', '농구']
};

const map4 = new Map(); // empty map, 엔트리가 없는 맵
for (prop in hong) { // 객체에 있는 프라퍼티 수만큼 반복
    map4.set(prop, hong[prop]); // 맵에 엔트리 추가
}
console.log(map4);

// J/S에서 객체는 키가 문자열이고 프라퍼티(프라퍼티명, 프라퍼티값)로 구성된 자료구조
//            객체는 인덱스가 문자열인 배열 = 연관배열 (Associative Array)
//            맵은 키가 어떤 것이든 가능하고 엔트리(키, 값)로 구성된 자료구조 (ES6)

// 객체 > 맵 변환 (프라퍼티 > 엔트리 변환)
const hongMap = new Map(Object.entries(hong));
console.log(hongMap);

// 맵 > 객체 변환 (엔트리 > 프라퍼티 변환)
const hongObj = Object.fromEntries(hongMap);
console.log(hongObj);



















