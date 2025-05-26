// 변수/상수 선언시에는 var, let, const를 앞에 붙임, 앞에 아무것도 안 붙이면 var
// var : ES6(ECMA2015)버젼 이전부터 사용되고 있는 변수 선언 키워드, 비추
// let : ES6버젼부터 사용된 변수 선언 키워드
// const : ES6버젼부터 사용된 상수 선언 키워드
// v : 변수명
// = : 할당연산자
// 1 : 변수에 할당(=저장=대입)되는 값(리터럴)

var v = 1;
console.log(v);

let l = 2;
console.log(l);
// 변수는 언제든지 값을 변경 가능
l = 3;
console.log(l);

const C = 3;
console.log(C);
// 상수는 값이 정해지면 변경 불가
// 상수는 관례적으로 대문자로 표시
// c = 4; // TypeError, Assignment to constant variable

/*
    변수 3단계

    1. 선언(Declaration)
      - 변수가 있음을 알림
      - 자바스크립트에서의 선언은 var,let,const를 사용
      - 자바스크립트는 선언시에 변수의 타입이 지정되지 않음 (인터프리터 언어의 특성)
        ex) let l; // l은 변수, 아직까지 데이터타입 모름, 값이 할당될때 값의 타입이 변수의 타입이 됨
        ex) In Java) int i; // i는 변수, i의 데이터타입은 4바이트 정수
        * 프로그래밍 언어는 크게 인터프리터 언어와 컴파일 언어로 구분
          - 인터프리터 언어 : 코드를 컴파일(코드 변환) 과정없이 해석한데로 실행하는 언어
                                   Javascript, Phthon ...
                                   ex) 자바스크립트는 코드를 한줄씩 순차적으로 해석해서 실행함
          - 컴파일 언어 : 코드를 컴파일하고 컴파일된 결과를 실행하는 언어
                                   C, C++, C#, Java ...
                                   ex) 자바는 컴파일해서 클래스를 생성하고 클래스를 실행

    2. 초기화(Initialization)
      - 선언 후 변수에 값을 최초로 할당
      - 메모리 관점에서 보면 메모리에 있던 기존 값(가비지=쓰레기)을 초기화

    3. 할당 (Assignment) = 대입 = 저장
      - 변수에 값을 저장
      - 자바스크립트는 변수에 값이 할당될 때 값의 타입에 따라서 변수의 타입이 지정(변경)됨      
        => 동적 타입핑 (Dynamic Typing) : 동적으로 타입이 지정(변경) 됨
        ex) let l; // 선언
              l = 10; // 할당, 10은 숫자리터럴(값), l의 타입은 숫자(number)
              l = 'hello'; // 할당, hello는 문자리터럴, l의 타입은 문자열(string)
*/

let l2; // 선언, l2는 변수
// 선언만 하고 초기화 하지 않은 경우 undefined타입의 값인 undefined로 자동 초기화 됨
console.log(l2); // undefined, undefined값으로 자동 초기화 됨, 타입:undefined

l2 = 100; // 할당
console.log(l2); // 100
console.log(typeof l2); // number, 숫자타입

l2 = 'hello'; // 할당
console.log(l2); // hello
console.log(typeof l2); // string, 문자타입

// 변수는 명시적으로 초기화하지 않으면 undefined로 초기화 됨
// 상수는 반드시 초기화한 후에 사용 가능
const c2;
// console.log(c2); // SyntaxError: Missing initializer in const declaration









