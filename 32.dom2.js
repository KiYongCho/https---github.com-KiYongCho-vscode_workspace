// 요소 선택
const mainTitle = document.getElementById('main-title');
const description = document.getElementById('description');
const list = document.getElementById('list');

// 1. 요소노드
console.log('노드 타입 : ', mainTitle.nodeType); // 1 => 요소노드
console.log('노드 이름 : ', mainTitle.nodeName); // H1
console.log('노드 값 : ', mainTitle.nodeValue); // null

// 2. 텍스트노드
console.log('노드 타입 : ', description.firstChild.nodeType); // 3 => 텍스트노드
console.log('노드 이름 : ', description.firstChild.nodeName); // #text
console.log('노드 값 : ', description.firstChild.nodeValue); // DOM API 실습입니다.

// 3. 문서노드
console.log('노드 타입 : ', document.nodeType); // 9 => 문서노드
console.log('노드 이름 : ', document.nodeName); // #document
console.log('노드 값 : ', document.nodeValue); // null

// 4. 속성노드
console.log('노드 타입 : ', mainTitle.attributes['id'].nodeType); // 2 => 속성노드
console.log('노드 이름 : ', mainTitle.attributes['id'].nodeName); // id
console.log('노드 값 : ', mainTitle.attributes['id'].nodeValue); // main-title

// 컨텐츠 조작

console.log('textContent : ', mainTitle.textContent);
mainTitle.textContent = '수정된 textContent';

// innerHTML:HTML파싱함, textContent:HTML파싱하지않음
const content = document.querySelector("#content");
//content.innerHTML = list.innerHTML;
content.textContent = list.innerHTML;

// innerHTML에 동적으로 요소 추가
list.innerHTML += "<li data-id='4' data-name='Item4'>Item 4</li>";

// 요소의 속성들
// NamedNodeMap {0: id, 1: class, id: id, class: class, length: 2}
console.log('attributes : ', mainTitle.attributes);
console.log('className : ', mainTitle.className );
// DOMTokenList ['title', value: 'title']
console.log('classList : ', mainTitle.classList);
mainTitle.classList.add('highlight'); // 클래스 추가
// DOMTokenList(2) ['title', 'highlight', value: 'title highlight']
console.log('classList : ', mainTitle.classList);

// 요소의 데이터 속성들
const firstItem = list.querySelector("li[data-id='1']");
console.log('data-id : ', firstItem.dataset.id);
console.log('data-name : ', firstItem.dataset.name);

// 요소 생성 및 추가
const newItem = document.createElement('li');
newItem.textContent = 'Item 5';
newItem.dataset.id = '5';
newItem.dataset.name = 'Item5';
list.appendChild(newItem);

// DocumentFragment : 독립된 문서객체(DOM트리를 벗어난 새로운 DOM)
const fragment = document.createDocumentFragment();
for (let i=6; i<=8; i++) {
    const li = document.createElement('li');
    li.textContent = `Item ${i}`;
    li.dataset.id = `${i}`;
    li.dataset.name = `Item${i}`;
    fragment.appendChild(li);
}
list.appendChild(fragment);

// 요소 삭제 및 대체
const secondItem = list.querySelector("li[data-id='2']");
list.removeChild(secondItem);

const thirdItem = list.querySelector("li[data-id='3']");
const replacement = document.createElement('li');
replacement.textContent = '수정된 아이템';
replacement.dataset.id = '3';
replacement.dataset.name = '수정된 아이템';
list.replaceChild(replacement, thirdItem);

// 속성 존재 여부
console.log('id속성 존재 여부 : ', mainTitle.hasAttribute('id'));

// 속성 생성 및 변경
mainTitle.setAttribute('data-example', 'demo'); // 없으면 생성, 있으면 변경

// 속성값 획득
console.log(mainTitle.getAttribute('data-example'));

// 스타일링
mainTitle.style.color = 'blue';
mainTitle.style.fontSize = '50px'; // J/S:fontSize, CSS:font-size

// 스타일 정보 획득 : window.getComputedStyle
//console.log('computed style : ', getComputedStyle(mainTitle));
console.log('computed style : ', getComputedStyle(mainTitle).color);





















