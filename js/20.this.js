// this
// 현재 참조되고 있는 메모리상의 객체의 주소에 대한 참조값을 저장하기 위한 참조변수

// 노드환경에서 this는 전역객체(global/globalThis가 생성한 {})
// 웹브라우져환경에서 this는 전역객체(window)
console.log(this);

// 자바스크립트에서 함수가 생성자함수, 메소드, 일반함수 인지를 구별하는 것은
// 함수가 "어떤 방식으로 호출"되었는지에 따라 달라짐
/*
    const func = function() {}; // 함수리터럴, 함수
    func(); // 일반함수로 취급, 일반함수내에서의 this는 전역객체
    const obj = {func}; obj.func(); // 메소드로 취급, 메소드내에서의 this는 메소드를 호출한 객체
    new func(); // 생성자함수로 취급, 생성자함수 내에서의 this는 생성자함수를 통해 생성될 객체
    * 이벤트리스너(이벤트핸들러) 함수 내에서의 this는 이벤트타겟(target)객체
*/

// 함수일 뿐
const Car = function() {
    console.log(this);    
}

// 일반함수로 호출
Car(); // Object [global] => this는 전역객체

// 메서드로 호출
const obj = {
    name: '객체',
    Car // obj객체의 메소드 Car
};
obj.Car(); // { name: '객체', Car: [Function: Car] } => this는 메소드를 호출한 객체

// 생성자함수로 호출
new Car(); // Car {} => this는 생성되고 있는 객체 자신


// 동적 this 바인딩 (dynamic this binding)
// 실행시간에 this가 가지는 참조값이 변경
// => 어떤 메소드든지 어떤 객체로든 호출할 수 있다!

// 선언식 함수
function func(age, kor, eng) {
    this.age = age;
    this.kor = kor;
    this.eng = eng;
    console.log(this.name);
    console.log(this.age);
    console.log(this.kor + this.eng);    
}

const hong = {name: '홍길동'};

// apply : this 바인딩 메소드, 인자를 배열로 전달
// func함수내의 this는 hong이 되고 배열로 인자를 전달 받음
func.apply(hong, [20, 100, 90]); // 홍길동 20 190
// 일반함수로 호출하면 함수내의 this는 전역객체
//func(20, 100, 90); // undefined 20 190, 일반함수로 호출

// call : this 바인딩 메소드, 인자를 개별적으로 전달
// func함수내의 this는 hong이 되고 배열을 개별적으로 전달 받음
func.call(hong, 20, 100, 90); // 홍길동 20 190

// bind : this 바인딩 메소드, 함수 호출시에 this를 바인딩하고 바인딩된 함수를 반환
//          this를 바인딩한 함수를 반환받고 필요한 시점에 바인딩한 함수를 호출하기 위한 메소드
//          인자를 개별적으로 전달
const funcnew = func.bind(hong, 20, 100, 90); // hong객체를 this에 바인딩한 함수를 반환받아 저장
funcnew(); // 홍길동 20 190





























