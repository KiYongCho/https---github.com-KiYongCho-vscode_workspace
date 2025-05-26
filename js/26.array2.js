// 배열 메소드

const arr = [1, 10, 9, 4, 5]; // length:5, 인덱스범위:0~4

console.log(Array.isArray(arr)); // true, 배열인지 확인
console.log(arr.indexOf(10)); // 1, 10 요소의 인덱스
console.log(arr.includes(9)); // true, 9 요소를 포함하고 있는지

// stack (FILO : First In Last Out)
console.log(arr.push(7)); // 6, 배열 맨 뒤에 요소를 삽입하고 배열의 크기를 반환
console.log(arr.pop()); // 7, 배열 맨 뒤의 요소를 제거하고 제거한 요소를 반환

// queue (FIFO : First In First Out)
console.log(arr.unshift(2)); // 6, 배열 맨 앞에 요소를 삽입하고 배열의 크기를 반환
console.log(arr.shift()); // 2, 배열 맨 앞의 요소를 제거하고 제거된 요소를 반환

console.log(arr.concat(3, 8)); // [1,10,9,4,5,3,8], 배열 맨 뒤에 요소(들)을 추가하고 추가된 배열을 반환

console.log(arr.splice(1, 2)); // [10,9], 1번 인덱스에서 2개 요소를 제거하고 제거한 요소의 배열을 반환
console.log(arr); // [ 1, 4, 5 ]
console.log(arr.splice(1, 1, 3, 4)); // 4, 1번 인덱스에서 1개 요소를 제거하고 3, 4를 배열을 추가하고 제거한 요소를 반환
console.log(arr); // [ 1, 3, 4, 5 ]

console.log(arr.slice(1, 3)); // [3, 4], 1번 인덱스에서 3번 인덱스 전까지의 요소들의 배열을 반환
console.log(arr); // [1, 3, 4, 5]
console.log(arr.join()); // '1345', 배열의 각 요소들을 문자로 변경해서 모두 붙인 문자열을 반환

console.log(arr.reverse()); // [5, 4, 3, 1], 배열의 요소들 순서를 180도 뒤집음

console.log(arr.fill(10)); // [10, 10, 10, 10], 배열의 모든 요소들을 주어진 값으로 변경(채움)

const arr2 = [[1, 2], [3, 4]]; // 2차원 배열 (배열의 요소가 배열), 2행 2열
console.log(arr2.flat()); // [1, 2, 3, 4], 배열의 요소를 꺼내서 각각 기존 배열에 추가

// 배열 고차함수

const arr3 = [1, 2, 3, 4, 5];

// forEach : 배열의 요소마다 콜백을 적용
const forEachArr = arr3.forEach(function(ele) {
    console.log(ele);    
});
console.log(forEachArr); // undefined

// map : 배열의 요소마다 콜백을 적용하고 결과 배열을 반환
const mapArr = arr3.map(function(ele) {
    return ele*ele;
});
console.log(mapArr); // [1, 4, 9, 16, 25]

// filter : 배열의 요소마다 콜백을 적용하고 결과가 true인 요소들의 배열을 반환
const filterArr = arr3.filter(function(ele) {
    return ele%2; // 홀수 반환
});
console.log(filterArr); // [1, 3, 5]

// reduce :  배열의 요소마다 콜백을 적용한 결과를 다음 요소 콜백 적용시 전달해서
//               연산 결과값을 반환
// acc:누적값, curr:현재값
// acc=0(누적초기값), curr=1
// acc=1, curr=2
// acc=3, curr=3
// acc=6, curr=4
// acc=10, curr=5
// acc=15
const sum = arr3.reduce(function(acc, curr) {
    return acc + curr;
}, 0); // 0:누적초기값
console.log(sum);

// some : 콜백함수의 결과가 true인 경우가 하나라도 있으면 true 를 반환
const some = arr3.some(function(ele) {
    return ele == 5;
});
console.log(some);

// every : 콜백함수의 결과가 모두true인 경우 true 를 반환
const every = arr3.every(function(ele) {
    return ele < 10;
});
console.log(every);

// find : 콜백함수의 결과가 true인 첫번째 요소를 반환
const find = arr3.find(function(ele) {
    return ele < 3;
});
console.log(find);

// findIndex : 콜백함수의 결과가 true인 첫번째 요소의 인덱스를 반환
const findIndex = arr3.findIndex(function(ele) {
    return ele > 3;
});
console.log(findIndex);

// sort : 배열의 요소 순서를 정렬
const numbers = [4, 2, 9, 1, 5];

numbers.sort((a, b) => a-b); // 오름차순 정렬 (ascending sort)
console.log(numbers); // [ 1, 2, 4, 5, 9 ]

numbers.sort((a, b) => b-a); // 내림차순 정렬 (descending sort)
console.log(numbers); // [ 9, 5, 4, 2, 1 ]

const words = ['banana', 'apple', 'cherry', 'peach'];

words.sort(); // 오름차순 정렬
console.log(words); // [ 'apple', 'banana', 'cherry', 'peach' ]

words.sort((a, b) => (a<b ? 1 : -1)); // 내림차순 정렬
console.log(words); // [ 'peach', 'cherry', 'banana', 'apple' ]







































































