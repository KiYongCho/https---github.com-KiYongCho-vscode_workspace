// 에러 처리

try { // 에러 발생 가능한 코드의 블럭
    // let으로 선언한 변수는 호이스팅이 되지 않음
    // 반드시 선언하고 할당할 수 있음
    v = 10;
    let v;
} catch (err) { // 에러 발생시 처리할 코드의 블럭
    console.error('에러메세지 : ' + err.message);
} finally { // 에러 발생 여부와 상관없이 수행되는 코드 블럭
    console.log('에러발생 여부와 상관없이 수행해야할 코드 블럭!');    
}

// 주요 에러의 종류
// 3***3 // SyntaxError (문법에러)
// func(); // ReferenceError (참조에러)
// null.func(); // TypeError (타입에러)
// new Array(-1); // RangeError (범위에러)
// decodeURIComponent('%'); // URIError (URI에러)

// URI 인코딩 / 디코딩
// encodeURIComponent 함수 : URI인코딩 함수
// decodeURIComponent 함수 : URI디코딩 함수
// https://www.google.com/?name=홍길동 (URI인코딩 전)
// https://www.google.com/?name=%ED%99%8D%EA%B8%B8%EB%8F%99 (URI 인코딩 후)
// 한글 또는 특수문자를 인코딩 : 홍길동 > %ED%99%8D%EA%B8%B8%EB%8F%99
// 인코딩된 문자를 한글 또는 특자문자로 디코딩 : %ED%99%8D%EA%B8%B8%EB%8F%99 > 홍길동

const uri = 'https://www.google.com?name=홍길동';
const encodedUri = encodeURIComponent(uri);
console.log(encodedUri);
const decodedUri = decodeURIComponent(encodedUri);
console.log(decodedUri);

// 사용자 정의 에러 (User Defined Error)
// 사용자가 생성한 에러 객체

// 사용자 정의 에러 객체 생성
const myerror = new Error('내가 만든 에러');

try {
    let age = 15;
    if (age<19) throw myerror; // 사용자 정의 에러를 발생시킴
} catch (err) {
    console.error(err.message);    
}

// 에러 전파
const firstFunc = function() {
    try {
        secondFunc();
    } catch (err) {
        console.log('firstFunc에서 에러 처리함!');        
    }
};
const secondFunc = function() {
    //try {
        thirdFunc();
    //} catch (err) {
    //    console.log('secondFunc에서 에러 처리함!');        
    //}
};
const thirdFunc = function() {
    //try {
        v = 10;
        let v;
    //} catch (err) {
    //    console.log('thirdFunc에서 에러 처리함!');        
    //}
};
firstFunc();




