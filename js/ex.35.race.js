// 실습 : 경주

// 경주시작 버튼을 누르면 경주가 시작되고 소요시간이 증가
// 스페이스바를 누르면 경주마가 10px씩 우측으로 이동
// 우측 결승라인에 도달하면 경주소요시간을 경주시작 버튼 우측에 표시

const img = document.querySelector('#img');
const time = document.querySelector('#time');

let elapsedTime = 0;
let interval;

document.querySelector('#start').addEventListener('click', e => {

    interval = setInterval(() => {
        time.innerHTML = `소요시간 : ${elapsedTime = elapsedTime + 50} ms`;
    }, 50);

    document.addEventListener('keyup', e => {
        const currLeft = window.getComputedStyle(img).left;
        const currLeftNum = parseInt(currLeft.substring(0, currLeft.indexOf('px'))); 
        const newLeft = (currLeftNum+5) + 'px';
        console.log(newLeft);        
        if (e.code=='Space') {
            img.style.left = newLeft;
        }
    });

});

