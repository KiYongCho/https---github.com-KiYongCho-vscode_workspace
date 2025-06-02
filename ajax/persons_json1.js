/*
    JSON.parse(JSON문자열) : JSON문자열 > Javascript객체 (역직렬화, Deserialization)
    JSON.stringify(Javascript객체) : Javascript객체 > JSON문자열 (직렬화, Serialization)
*/

// JSON문자열
const personsStr = `
    [
        {
            "name": "홍길동",
            "age": 30,
            "address": "지구 어딘가"
        },
        {
            "name": "강감찬",
            "age": 20,
            "address": "우주 어딘가"
        }
    ]
`;

// JSON문자열을 Javascript객체로
const personsJsonObj = JSON.parse(personsStr);

for (let person of personsJsonObj) {
    console.log(`이름: ${person.name}, 나이 ${person.age}:, 주소: ${person.address}`);    
}

// Javascript객체를 JSON문자열로
const jsonStr = JSON.stringify(personsJsonObj);

console.log(jsonStr);



