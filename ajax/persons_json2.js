import { readFile } from 'fs/promises';

// persons.json파일내의 문자열을 jsonStr에 저장
const jsonStr = await readFile('persons.json', 'utf-8');

// JSON문자열을 Javascript객체로
const persons = JSON.parse(jsonStr);

persons.forEach(person => {
    console.log(`이름: ${person.name}, 나이 ${person.age}:, 주소: ${person.address}`);    
});
