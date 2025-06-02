/*
   1) 터미널 실행 (Ctrl + `)
   2) cd ajax
   3) npm init -y
   4) npm install xml2js
   * 보안오류 발생시
     Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
   * 파일명을 .js로 하고 싶으면 package.json에 "type": "module" 추가
      그렇지 않으면 .mjs로 파일명 변경
   * 실행 : node persons_xml.js
*/

import { readFile } from 'fs/promises'; // fs모듈의 promises내에 있는 readFile 함수 임포트
import { Parser } from 'xml2js'; // xml2js모듈에 있는 XML파서

// XML파서 생성 (배열 생략)
const parser = new Parser({ explicitArray: false });

// XML파일 경로
const filePath = './persons.xml';

try { // 예외 발생 가능한 코드 블럭

    // XML파일을 utf-8로 인코딩해서 읽어들임
    // 모두 읽을때까지 대기했다가 xmlData 변수에 저장
    const xmlData = await readFile(filePath, 'utf-8');

    // XML파서로 읽어온 데이터를 파싱
    const result = await parser.parseStringPromise(xmlData);

    // <persons> 하위의 <person> 엘리먼트들을 저장
    const persons = result.persons.person;

    // persons가 배열이면 사용하고 그렇지 배열로 만듬
    const personsList = Array.isArray(persons) ? persons : [persons];
    
    // 배열에서 하나씩 출력
    personsList.forEach(person => {
        console.log(`ID: ${person.$.pid}`); // 속성:  $
        console.log(`이름: ${person.name}`);               
        console.log(`나이: ${person.age}`);               
        console.log(`주소: ${person.address}`);               
    });

} catch (err) { // 예외 발생시 처리할 코드 블럭
    console.log(`에러 발생 : {err}`);
}




















