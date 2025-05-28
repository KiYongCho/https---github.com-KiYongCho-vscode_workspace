// DOM 실습 3

/*
    배경색blue 버튼을 클릭하면 div의 배경색을 blue
    배경색red 버튼을 클릭하면 div의 배경색을 red
    크기X2 버튼을 클릭하면 div의 넓이와 높이를 2배씩 증가
    크기/2 버튼을 클릭하면 div의 넓이와 높이를 2배씩 감소
    blue클래스 버튼을 클릭하면 div에 blue라는 클래스를 적용
    red클래스 버튼을 클릭하면 div에 red라는 클래스를 적용
*/

const div = document.querySelector('div'); // div Element
const buttons = document.querySelectorAll('button'); // NodeList

buttons.forEach(button => {
    button.addEventListener('click', e => {

        let width, height;
        if (e.target.textContent.indexOf('크기') > -1) {
            // div의 넓이와 높이 구하기
            width = window.getComputedStyle(div).width;
            width = width.substring(0, width.length-2);
            height = window.getComputedStyle(div).height;
            height = height.substring(0, height.length-2);
        }

        switch (e.target.textContent) {
            case '배경색blue':
                div.style.backgroundColor = 'blue'; break;
            case '배경색red':
                div.style.backgroundColor = 'red'; break;
            case '크기X2':
                div.style.width = width*2 + 'px';
                div.style.height = height*2 + 'px';
                break;
            case '크기/2':
                div.style.width = width/2 + 'px';
                div.style.height = height/2 + 'px';
                break;
            case 'blue클래스':
                div.style.backgroundColor = 'blue';
                div.classList.toggle('blue');
                break;
            case 'red클래스':
                div.style.backgroundColor = 'red';                
                div.classList.toggle('red');
        }
    });
});























