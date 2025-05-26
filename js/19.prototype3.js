function Bird() {
    this.name = '새';
}

function Chicken() {
    this.name = '닭';
}

// 실습 : Chicken이 Bird를 상속 받음
Chicken.prototype = Bird.prototype

const chicken = new Chicken();

// 프라퍼티 쉐도잉(property shadowing)
// Chicken이 Bird를 상속받음
// Chicken이 가진 name이 Bird가 가진 name을 가려버림
console.log(chicken.name); // 닭

// 오버라이딩
Bird.prototype.getName = function() { 
    return this.name
}
Chicken.prototype.getName = function() {
    return this.name
}
const bird1 = new Bird();
const chicken1 = new Chicken();
console.log(bird1.getName()); // 새
console.log(chicken1.getName()); // 닭

// 인스턴스 메소드 추가
bird1.getName = function() {
    return '새';
};
chicken1.getName = function() {
    return '닭';
};

// 인스턴스 메소드 삭제
delete chicken1.getName;

// chicken1객체의 getName메소드는 삭제되었음
// chicken1의 프로토타입에 getName()을 사용
console.log(chicken1.getName()); // 닭, 프로토타입메소드 호출

// 프로토타입 메소드 삭제
delete Chicken.prototype.getName

// 인스턴스 메소드가 있으면 우선 사용되고 없으면 프로토타입 메소드를 사용
// 프로토타입 메소드도 없다면 TypeError
// console.log(chicken1.getName()); // TypeError: chicken1.getName is not a function


// 프라퍼티 열거

function Person(name, age) {
    this.name = name;
    this.age = age;
}

const person = new Person('홍길동', 20);

// instanceof : 객체가 프로토타입체인상에 있는지 여부 반환하는 연산자
console.log(person instanceof Person); // true
console.log(person instanceof Object); // true
console.log(person instanceof Chicken); // false

// in : 객체의 프로토타입체인상에 프라퍼티가 있는지 여부 반환하는 연산자
console.log('name' in person); // true
console.log('address' in person); // false
console.log('getOwnPropertyDescriptor' in person); // false

// for ~ in : 객체나 객체의 프로토타입 체인상에서 열거가능한 프라퍼티의 수만큼 반복
for (let prop in person) {
    console.log(person[prop]); 
}

// 정적 프라퍼티 & 정적 메소드
// 생성자함수에 정의한 프라퍼티와 메소드
// 생성자함수로 접근가능, 인스턴스(객체)로 접근불가

function Truck(name, price) {
    this.name = name; // 인스턴스 프라퍼티
    this.price = price; // 인스턴스 프라퍼티
}

Truck.cc = '5000cc'; // 정적 프라퍼티
Truck.stop = function() { // 정적 메소드 (정적 프라퍼티에 함수를 할당)
    console.log('멈춘다!');    
};

const truck = new Truck('골리앗', 10000);

console.log(Truck.name, Truck.price); // Truck(생성자함수의 이름), undefined(생성자함수에는 price 없음)
console.log(truck.name, truck.price); // 골리앗, 10000
console.log(Truck.cc); // 5000cc
console.log(truck.cc); // undefined
Truck.stop(); // 멈춘다!
//truck.stop(); // TypeError : truck.stop is not a function

















































