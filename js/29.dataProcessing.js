// 문자열 String

const str = 'Hello, JavaScript!';
console.log(str.indexOf('Java')); // 7
console.log(str.includes('Script')); // true
console.log(str.search('Java')); // 7
console.log(str.startsWith('Hello')); // true
console.log(str.endsWith('!')); // true
console.log(str.charAt(4)); // 'o'
console.log(str.substring(0, 5)); // 'Hello'
console.log(str.slice(-10, -1)); // 'avaScript'
console.log(str.toUpperCase()); // 'HELLO, JAVASCRIPT!'
console.log(str.toLowerCase()); // 'hello, javascript!'
console.log("    Trim this!      ".trim()); // 'Trim this!'
console.log('Repeat!'.repeat(3)); // 'Repeat!Repeat!Repeat!'
console.log(str.replace('JavaScript', 'World')); // 'Hello, World!'
console.log(str.replace(/JavaScript/, 'World')); // 'Hello, World!'
console.log(str.split(', ')); // ['Hello', 'JavaScript!']

// 숫자 Number
console.log(Number.isFinite(123)); // true
console.log(Number.isInteger(123.45)); // false
console.log(Number.isNaN(NaN)); // true
console.log(NaN==NaN); // false ???
console.log((123.456).toFixed(2)); // 123.46 반올림해서 자리수 맞춤
console.log((123).toString()); // '123'

// 수학 Math
console.log(Math.abs(-10)); // 10
console.log(Math.round(4.5)); // 5
console.log(Math.ceil(4.1)); // 5
console.log(Math.floor(4.1)); // 4
console.log(Math.sqrt(16)); // 4
console.log(Math.random()); // 0.0 <= x < 1.0
console.log(Math.pow(2, 3)); // 8
console.log(Math.max(1, 2, 4, 5, 3)); // 5
const arr = [5, 2, 1, 3, 4];
console.log(Math.max(...arr)); // 5
console.log(Math.min(3, 2, 1, 4, 5)); // 1
console.log(Math.min(...[3, 2, 1, 4, 5])); // 1

// 날짜/시간 Date 
console.log(Date.now()); // 1970년 1월 1일 0시 0분 0초 0밀리초부터 지금까지 1씩 센 값
console.log(Date.parse('2025-05-22')); // 2025년 5월 22일 0시 0분 0초 0밀리초에 해당하는 숫자값

const date = new Date();
console.log(date.getFullYear()); // 네자리 연도
console.log(date.getMonth()); // 월 (0~11)
console.log(date.getDate()); // 일자
console.log(date.getHours()); // 시간 (0~23)
console.log(date.getMinutes()); // 분 (0~59)
console.log(date.getSeconds()); // 초 (0~59)
console.log(date.getMilliseconds()); // 밀리초 (0~999)
console.log(date.getTime()); // 시간숫자
console.log(date.getDay()); // 요일 (0~6), 0 일요일
console.log(date.getTimezoneOffset()); // 시간원점에서 시차를 분으로
console.log(date.toLocaleString()); // 지역별 시간표현 문자열


















































