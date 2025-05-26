/*
    객체 (obejct)
    - 데이터와 기능을 합해 놓은 프로그래밍 단위
    - 프라퍼티(데이터) + 메서드(기능)
    - 프라퍼티 : 프라퍼티이름(키)와 프라퍼티값(값)으로 구성
    - 표기법 : {}
*/

// const : 상수
// obj1 : 객체참조변수명
// {} : 객체리터럴, 객체는 코드에 없음. 메모리에 있음
// 메모리상에서 obj1의 위치와 {}의 위치는 다름
// obj1이 가지고 있는 참조값은 불변(Immutable), {}는 가변(mutable)
// 그래서 참조타입 선언시에는 const를 사용

// 사용자정의프라퍼티(사용자가 생성한 프라퍼티)가 없는 객체를 객체리터럴로 생성
const obj1 = {};

// 사용자정의프라퍼티가 2개 있는 객체를 객체리터럴로 생성
const obj2 = {
    name: '홍길동', // name프라퍼티 (name:프라퍼티키, '홍길동':프라퍼티값)
    age: 20 // age프라퍼티 (age:프라퍼티키, 20:프라퍼티값)
};

console.log(obj2); // { name: '홍길동', age: 20 }

// .은 참조연산자(reference operator)
obj2.name = '강감찬'; // 프라퍼티키를 통해서 프라퍼티값을 변경
console.log(obj2); // { name: '강감찬', age: 20 }

// []는 참조연산자
// 프라퍼티명에 특수문자가 들어간 경우는 []를 사용해야 함
obj2['name'] = '이순신';
console.log(obj2); // { name: '이순신', age: 20 }

// 객체에 새로운 프라퍼티를 추가
// 동적프라퍼티 : 객체가 생성된 후에 프라퍼티를 추가할 수 있음
obj2['tel-num'] = '010-1234-5678';
console.log(obj2); // { name: '이순신', age: 20, 'tel-num': '010-1234-5678' }
// console.log(obj2.tel-num);
console.log(obj2['tel-num']);

// Object 생성자함수로 객체 생성
const o2 = new Object();
console.log(o2); // {}

// 객체 생성자함수로 객체 생성
// 생성자함수는 대문자로 시작
// this : 생성자함수를 통해서 생성되는 객체 자신에 대한 참조
//          ex) 우리는 태어나기전 엄마 뱃속의 아이를 '금동이'라고 부름
//                태어나고 나면 이름을 지어줌
function Person(name, age) {
    this.name = name;
    this.age = age;
}
// name이 홍길동이고 age가 20인 객체가 메모리에 생성되고
// 생성된 객체의 참조값을 person변수에 저장
const person = new Person('홍길동', 20);
// person = 100; // TypeError: Assignment to constant variable.
person.name = '이순신';
person.age = 60;
console.log(person); // Person { name: '이순신', age: 60 }
console.log(typeof person); // object
// Person 생성자함수를 통해서 생성된 참조
console.log(person instanceof Person); // true
// Object 생성자함수를 통해서 생성된 참조
console.log(person instanceof Object); // true
// 결론 : person은 Object를 상속받은 Person을 통해 생성된 참조

// Object.create메소드를 통해 객체 생성
const o4 = Object.create(Person.prototype);
o4.name = '강감찬';
o4.age = 30;
console.log(typeof o4); // object
console.log(o4 instanceof Person); // true
console.log(o4 instanceof Object); // true

// class를 통해 객체 생성
// class : 객체를 생성하기 위한 틀 (template of object)
class Dog {
    // 생성자 : 객체를 생성(객체 프라퍼티를 초기화)하기 위한 특별한 형태의 메소드
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const dog = new Dog('치와와', 5);
console.log(dog); // {name:'치와와', age:5}
console.log(typeof dog); // object
console.log(dog instanceof Dog); // true
console.log(dog instanceof Object); // true

// 프라퍼티명에 특수문자가 포함된 경우
const hong = {
    name: '홍길동',
    age: 20,
    //local-addr: '서울' // SyntaxError: Unexpected token '-'
    'local-addr': '서울'
};
console.log(hong);

// 동적으로 프라퍼티 추가
hong.hobby = '축구';
console.log(hong);

// 정의되지 않은 프라퍼티에 접근하면 undefined로 초기화
console.log(hong.height); // undefined

// 프라퍼티 삭제
delete hong.age;
console.log(hong);

// 프라퍼티 존재여부 확인
console.log('name' in hong); // true
console.log('age' in hong); // false

// J/S에서 메소드는 function리터럴을 값으로 갖는 프라퍼티
// J/S에서 메소드는 호출가능한 프라퍼티
const kang = {
    name: '강감찬', // name 프라퍼티
    age: 10, // age 프라퍼티
    getName: function() { // getName은 프라퍼티이면서 메소드
        return this.name;
    },
    getAge: function() { // getAge는 프라퍼티이면서 메소드
        return this.age;    
    }
};
console.log(kang.name); // '강감찬'
console.log(kang.age); // 10
console.log(kang.getName); // [Function: getName]
console.log(kang.getAge); // [Function: getAge]
// 메소드 호출 (Invocation, Call)
console.log(kang.getName()); // '강감찬'
console.log(kang.getAge()); // 10
//console.log(kang.name()); // TypeError: kang.name is not a function
//console.log(kang.age()); // TypeError: kang.age is not a function













































