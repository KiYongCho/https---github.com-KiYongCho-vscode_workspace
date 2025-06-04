const person = {
    name: '홍길동',
    age: 30,
    hobby: ['축구', '농구']
};

// 객체를 JSON문자열로 변환
const jsonStr = JSON.stringify(person);
// string, {"name":"홍길동","age":30,"hobby":["축구","농구"]}
console.log(typeof jsonStr, jsonStr); 

// 객체를 JSON문자열로 변환 (들여쓰기)
const jsonStr2 = JSON.stringify(person, null, 2);
console.log(typeof jsonStr2, jsonStr2);

// 객체를 JSON문자열로 변환 (replacer, 들여쓰기)
const jsonStr3 = JSON.stringify(
    person,
    // replacer함수 : 객체를 JSON문자열로 변환할때 변환할 문자열 필터링하는 함수
    // 객체 프라퍼티의 값의 타입이 숫자인 경우는 문자열 변환에서 제외
    (key, value) => {
        return typeof value=='number' ? undefined : value;
    },
    2);
console.log(typeof jsonStr3, jsonStr3);

// JSON문자열을 객체로 변환
const jsonObj1 = JSON.parse(jsonStr);
console.log(jsonObj1.name);
const jsonObj2 = JSON.parse(jsonStr2);
console.log(jsonObj2.age);
const jsonObj3 = JSON.parse(jsonStr3);
jsonObj3.hobby.forEach(element => {
    console.log(element);
});













