// 생성자 함수
function Circle(radius) {
    this.radius = radius; // 반지름
    this.getArea = function() { // 원의 면적 구하는 메소드
        return Math.PI * this.radius ** 2;
    }
}

// new 키워드와 함께 호출하면 생성자 함수
const circle1 = new Circle(1);
const circle2 = new Circle(2);

// 인스턴스 메소드 : 객체마다 가지는 메소드
// 생성자 함수내의 메소드는 생성자 함수를 통해서 생성되는 객체마다
// 메소드를 가지게 됨 > 불필요하게 메모리를 많이 사용하게 됨
console.log(circle1.getArea === circle2.getArea); // false

// 생성자 함수
function Circle2(radius) {
    this.radius = radius;
}

// 프로토타입 메소드 : 생성자 함수의 프로토타입에 메소드를 추가
// 프로토타입 메소드는 프로토타입에 존재하고 객체들이 공유
// => 자바스크립트에서의 상속 구현의 핵심
Circle2.prototype.getArea = function() {
    return Math.PI * this.radius ** 2;
};

const circle3 = new Circle2(3);
const circle4 = new Circle2(4);

console.log(circle3.getArea === circle3.getArea); // true

/*
  * prototype, constuctor, __proto__의 관계
  - 모든 객체는 __proto__라는 접근자프라퍼티를 가짐
  - __proto__는 객체가 리터럴로 만들어진 경우 Object.prototype
  -                   객체가 생성자함수로 만들어진 경우 생성자함수.prototype
  - 생성자함수는 prototype프라퍼티를 가짐
  - 생성자함수의 prototype프라퍼티는 constructor프라퍼티를 가짐
  - consturctor는 prototype을 가지고 있는 생성자함수를 가리킴
*/

// Person 생성자 함수
function Person(name) {
    this.name = name;
}

// Person 생성자 함수를 통해 hong객체 생성
const hong = new Person('홍길동');


// 실습 : 아래 실행 결과를 예측해서 주석 달아보기
// Object, Object.prototype, Person, Person.prototype, hong의 관계를 그려서 생각해 보기!

// Person 생성자함수
console.log(Person); // [Function: Person]

// Person 생성자함수의 prototype프라퍼티(객체)
console.log(Person.prototype); // {}

// Person 생성자함수의 prototype프라퍼티(객체)가 가리키는 생성자함수 = Person생성자함수
console.log(Person.prototype.constructor); // [Function: Person]

// Person 생성자함수의 prototype프라퍼티(객체)의 prototype참조 = Object의 prototype
console.log(Person.prototype.__proto__); // [Object: null prototype] {}

// hong객체의 prototype의 생성자함수 = Person생성자함수
console.log(hong.__proto__.constructor); // [Function: Person]

// hong객체의 prototype의 prototype = Object의 prototype
console.log(hong.__proto__.__proto__); // [Object: null prototype] {}

// Object의 prototype의 생성자 함수 = Object
console.log(hong.__proto__.__proto__.constructor); // [Function: Object]



































