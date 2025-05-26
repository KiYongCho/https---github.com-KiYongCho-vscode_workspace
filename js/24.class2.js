class Bird {
    constructor(name, sound) {
        this._name = name;
        this._sound = sound;
    }
    get name() {
        return this._name;
    }
    set name(name) {
        this._name = name;
    }
    get sound() {
        return this._sound;
    }
    set sound(sound) {
        this._sound = sound;
    }
    cry() {
        console.log('[Bird]');
        console.log(`${this.name}은 ${this.sound} 소리를 냅니다.`);
    }
}

// Bird를 상속받은 Eagle 클래스
class Eagle extends Bird {
    constructor(name, sound) {
        // 하위클래스 생성자의 첫번째 구문은 상위클래스 생성자를 호출하는 구문
        // => 상위클래스 객체가 있어야 하위클래스 객체를 만들 수 있음
        super(name, sound); // super : 상위클래스의 생성자를 가리키는 키워드
        this._name = name;
        this._sound = sound;
    }
}

const eagle = new Eagle('독수리', '꽤꽤');
// 상속받은 메소드를 사용
eagle.cry();

// Bird를 상속받은 Chicken 클래스
class Chicken extends Bird {
    constructor(name, sound) {
        super(name, sound);
        this._name = name;
        this._sound = sound;
    }
}

const chicken = new Chicken('닭', '꼬끼오');
chicken.cry();

// 동적 상속
const birdName = '오골계';

class AnyBird extends (birdName=='오골계' ? Chicken : Eagle) {
    constructor(name, sound) {
        super(name, sound);
        this._name = name;
        this._sound = sound;
    }
    // 오버라이딩 (Overriding)
    // 상위클래스에 있는 메소드를 하위 클래스에서 재정의
    cry() {
        console.log('[AnyBird]');
        console.log(`${this.name}은 ${this.sound} 소리를 냅니다`);        
    }
}

const ogolgye = new AnyBird('오골계', '오골오골');
ogolgye.cry();





