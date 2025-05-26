// 프로토타입 확장
// 생성자함수가 가진 프로토타입객체에 메소드를 추가

// Person 생성자함수
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.getName = function() {
        return this.name;
    }
}

// Person의 프로토타입에 getAge라는 프라퍼티를 추가
// getAge프라퍼티는 함수를 가지고 있음
Person.prototype.getAge = function() {
    return this.age;
};

const person1 = new Person('홍길동', 20);
console.log(person1.getName()); // 홍길동, 정적메소드
console.log(person1.getAge()); // 20, 프로토타입메소드

const person2 = new Person('강감찬', 30);
console.log(person2.getName()); // 강감찬, 정적메소드
console.log(person2.getAge()); // 30, 프로토타입메소드

// 실습 : true/false 결과 주석 달기

// 생성자함수의 정적메소드는 객체의 인스턴스메소드와 다름
console.log(Person.getName == person1.getName); // false

// 생성자함수에서 정의된 정적메소드는 객체마다 가짐
console.log(person1.getName == person2.getName); // false

// Person에는 getAge가 없음
console.log(Person.getAge == person1.getAge); // false

// 프로토타입메소드 getAge는 객체들이 공유 
console.log(person1.getAge == person2.getAge); // true

// 두 객체 모두 __proto__는 Person의 프로토타입을 가리킴
console.log(person1.__proto__ == person2.__proto__); // true

/*

  * J/S 메소드 3가지

  1. 정적메소드=생성자메소드 (static method=constructor method) 
    - 생성자함수 내에 정의된 메소드
    - 생성자를 통해서 생성된 객체들은 정적메소드를 하나씩 가지게 됨

  2. 프로토타입메소드 (prototype method)
    - 생성자함수의 프로토타입 객체에 포함된 메소드
    - 프로토타입메소드는 생성자함수를 통해 생성된 객체들이 공유함 

  3. 인스턴스메소드 (instance method)
    - 객체에서 정의된 메소드
    - 해당 객체에서만 사용가능
*/

// 프로토타입 체인

// Car 생성자 함수
function Car(company, model) {
    this.company = company;
    this.model = model;
}
const car = new Car('BMW', '520D');
console.log(car.__proto__ == Car.prototype); // true
console.log(Car.prototype.__proto__ == Object.prototype); // true
console.log(car.__proto__.__proto__ == Object.prototype); // true


// 프로토타입 교체

// Chicken 생성자 함수
function Chicken(name) {
    this.name = name;
}

// 프로토타입 확장
Chicken.prototype.sound = function() {
    console.log(this.name + '가 꼬끼오 소리를 냅니다!');    
};

// Duck 생성자 함수
function Duck(name) {
    this.name = name;
}

// 프로토타입 확장
Duck.prototype.sound = function() {
    console.log(this.name + '가 꽥꽥 소리를 냅니다!');    
};

const chicken1 = new Chicken('오골계');
chicken1.sound(); // 오골계가 꼬끼오 소리를 냅니다!

const duck1 = new Duck('청둥오리');
duck1.sound(); // 청둥오리가 꽥꽥 소리를 냅니다!

// 프로토타입 교체 => 상속을 실행시간에 변경할 수 있음!
// J/S는 실행시간에 프로토타입 교체가 가능한 동적 프로토타입 언어
Chicken.prototype = Duck.prototype;

const chicken2 = new Chicken('수탉');
chicken2.sound(); // 수탉이 꽥꽥 소리를 냅니다!




































