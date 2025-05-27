// DOM 실습 1 (10분)

// 아래리스트를 DOM을 활용해서 html에 생성

// 사과
// 딸기
// 포도
// 복숭아

// 방법 1)
document.body.innerHTML = `
<ul>
    <li>사과</li>
    <li>딸기</li>
    <li>포도</li>
    <li>복숭아</li>
</ul>
`;

// 방법 2)
const fruitArr = ['사과', '딸기', '포도', '복숭아'];
const ul = document.createElement('ul');
for (let ele of fruitArr) {
    const li = document.createElement('li');
    li.textContent = ele;
    ul.appendChild(li);
}
document.body.appendChild(ul);

