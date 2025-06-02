// testButton이라는 아이디를 가진 요소를 찾아서
// click이벤트가 발생하면 뒤에 있는 이벤트핸들러(=이벤트리스터) 함수를 실행
document.getElementById('testButton').addEventListener('click', () => {

    // 아이디가 parent인 div요소
    const parent = document.getElementById('parent');
    console.log('부모 노드 : ' + parent);
    console.log(typeof parent); // object
    console.log(parent instanceof Object); // true
    console.log(parent instanceof EventTarget); // true
    console.log(parent instanceof Node); // true
    console.log(parent instanceof Element); // true
    console.log(parent instanceof HTMLElement); // true
    console.log(parent instanceof HTMLDivElement); // true

    const childNodes = parent.childNodes; // 모든 자식노드들, NodeList
    console.log(childNodes);

    const children = parent.children; // 모든 요소 자식노드들, HTMLCollection
    console.log(children); 

    console.log('첫번째 자식 : ', parent.firstChild); // #text   
    console.log('마지막번째 자식 : ', parent.lastChild); // #text   

    console.log('첫번째 요소 자식 : ', parent.firstElementChild); // p.child   
    console.log('마지막번째 요소 자식 : ', parent.lastElementChild); // p.child       
    
    const firstElementChild = parent.firstElementChild; // 첫번째 요소 자식
    console.log('첫번째 요소 자식의 다음 형제 노드 : ', firstElementChild.nextSibling); // #text
    console.log('첫번째 요소 자식의 다음 형제 요소 : ', firstElementChild.nextElementSibling); // p.child

    const lastElementChild = parent.lastElementChild; // 마지막 요소 자식
    console.log('마지막 요소 자식의 이전 형제 노드 : ', lastElementChild.previousSibling); // #text
    console.log('마지막 요소 자식의 이전 형제 요소 : ', lastElementChild.previousElementSibling); // p.child

    // 태그명이 P인 요소들
    const byTagName = document.getElementsByTagName('P'); // HTMLCollection
    
    // HTMLCollection은 이터러블 : for of 반복 가능, 스프레드문법 사용 가능, 구조분해할당 가능
    console.log(byTagName instanceof HTMLCollection); // true
    for (let ele of byTagName) {
        console.log(ele);       
    }

    // 클래스명이 child인 요소들
    const byClassName = document.getElementsByClassName('child'); // HTMLCollection
    console.log(byClassName);

    // 아이디가 parent인 요소의 후손 중 클래스가 child인 요소 하나를 탐색
    const querySingle = document.querySelector('#parent .child'); // p.child
    console.log(querySingle);   

    // 아이디가 parent인 요소의 후손 중 클래스가 child인 요소 전체를 탐색
    const queryAll = document.querySelectorAll('#parent .child'); // NodeList
    console.log(queryAll);

    // NodeList는 이터러블
    for (let node of queryAll) {
        console.log(node);  // p.class 3개
    }
    console.log([...queryAll]);
    const [,secondP,] = queryAll;
    console.log(secondP); // p.class 두번째문장

    // 실습1. id가 parent인 요소의 세번째 자식 요소
    console.log(parent.firstElementChild.nextElementSibling.nextElementSibling);
    console.log(parent.children[2]);

    // 실습2. class가 child인 요소 중 두번째 요소
    console.log(document.getElementsByClassName('child')[1]);
    console.log(document.querySelector('.child').nextElementSibling);
    console.log(document.querySelectorAll('.child')[1]);

    // 실습3. class가 child인 요소 중 세번째 요소의 형인 요소
    console.log(document.getElementsByClassName('child')[2].previousElementSibling);
    console.log(document.querySelector('.child').nextElementSibling);
    console.log(document.querySelectorAll('.child')[2].previousElementSibling);

});