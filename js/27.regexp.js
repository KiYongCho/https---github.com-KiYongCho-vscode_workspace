// 정규표현식 리터럴
const regExp = /abc/i; // 대소문자 구별없이 a가 나오고 b가 나오고 c가 나오는 패턴

// 정규표현식 생성자함수
const regExp1 = new RegExp(/abc/i);
const regExp2 = new RegExp(/abc/, 'i');
const regExp3 = new RegExp('abc', 'i');

// 정규표현식 메소드
const str = 'ab abc ab';
const regExp4 = /ab/g;

// true, 문자열내에 정규표현식 패턴을 만족하는 문자열이 있는지 확인
console.log(regExp4.test(str)); 

// [ 'ab', index: 3, input: 'ab abc ab', groups: undefined ]
// 문자열내에서 정규표현식을 만족하는 문자열들 중 첫번째 결과를 배열로 반환
console.log(regExp4.exec(str));

// 문자열내에서 정규표현식을 만족하는 문자열들을 배열로 반환
console.log(str.match(regExp4)); // ['ab', 'ab', 'ab']

// 문자열내에서 정규표현식을 만족하는 문자열을 다른 문자열로 대체
console.log(str.replace(/abc/, '')); // ab  ab

// 패턴 문자

const str2 = 'a ab aa abc aaa ac abcd';

// . : 문자 하나
// a 다음에 문자 하나가 나오는 패턴
console.log(str2.match(/a./g)); // ['a ','ab','aa','ab','aa','a ','ac','ab']

// {} : 반복 회수
// a가 2번 반복되는 패턴
console.log(str2.match(/a{2}/g)); // ['aa', 'aa']
console.log(str2.match(/a{2,3}/g)); // ['aa', 'aaa']

// + : 1문자 이상
console.log(str2.match(/a+/g)); // ['a', 'a', 'aa', 'a', 'aaa', 'a', 'a']

// ? : 0문자 또는 1문자
console.log(str2.match(/a?/g)); //['a','','a','','','a','a','','a','','','','a','a','a','','a','','','a','','','','']

// | : or
console.log(str2.match(/abc|ab/g)); // ['ab', 'abc', 'abc']
console.log(str2.match(/ab|abc/g)); // ['ab', 'ab', 'ab']

// [-] : 범위
console.log(str2.match(/[a-b]/g)); // ['a','a','b','a','a','a','b','a','a','a','a','a','b']
console.log(str2.match(/[0-9]/g)); // null
console.log(str2.match(/[a-zA-Z]/g)); // ['a','a','b','a','a','a','b','c','a','a','a','a','c','a','b','c','d']
// word : [a-zA-Z0-9_]
console.log(str2.match(/[a-zA-Z0-9_]/g)); // ['a','a','b','a','a','a','b','c','a','a','a','a','c','a','b','c','d']

// \s:공백문자 (\t, \n, \v, \f, \r), \S:공백문자가 아닌 문자 하나
console.log(str2.match(/\s/g)); // [' ',' ',' ',' ',' ',' ']

// \d:숫자하나 = [0-9], \D:숫자가 아닌 문자 하나
console.log(str2.match(/\d/g)); // null

// \w:워드하나 = [a-zA-Z0-9_]
console.log(str2.match(/\w/g)); // ['a','a','b','a','a','a','b','c','a','a','a','a','c','a','b','c','d']

// ^ : 시작
console.log(str2.match(/^[abc]/g)); // ['a']

// [^] : not
console.log(str2.match(/[^abc]/g)); // [' ',' ',' ',' ',' ',' ','d']

// $ : 끝
console.log(str2.match(/[cd]$/g)); // ['d']


// 플래그 (flag)
// i : ignorecase, 대소문자 구별 없음
// g : global, 전체 영역에서 탐색
// m : multi-line, 줄마다 시작과 끝 탐색 (m플래그가 없으면 여러줄이라도 한줄만 탐색)

// 줄바꿈 문자 : 윈도우(\r\n), 유닉스/리눅스(\n)
// \r?\n => \r\n or \n
const str3 = 'a ab abc \r?\nabc ab a';

// [ 'ab', index: 2, input: 'a ab abc \r?\nabc ab a', groups: undefined ]
console.log(str3.match(/AB/i));
console.log(str3.match(/AB/ig)); // [ 'ab', 'ab', 'ab', 'ab' ]
console.log(str3.match(/^AB/igm)); // ['ab']

// 전방탐색(Lookahead)
// X(?=Y) : X 뒤에 Y가 존재하는 경우에만 X를 매칭, Y는 포함되지 않음






































