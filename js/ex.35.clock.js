// 실습 : 디지털 시계

// 작동 버튼 클릭하면 1초씩 디지털 시계가 움직임
// 중지 버튼 클릭하면 디지털 시계가 중지
// clock이라는 id를 가진 p요소내에 아래 형식으로 출력
// 형식 : XXXX년 XX월 XX일 X요일 오전/오후 XX시 XX분 XX초

const clock = document.querySelector('#clock');

let timer;

document.querySelector('#start').addEventListener('click', e => {
    timer = setInterval(e => {
        const nowDate = new Date();
        const hours = nowDate.getHours();
        const ampm = hours>=12 ? "오후" : "오전";
        let yoil = nowDate.getDay();
        switch (yoil) {
            case 0: yoil='일'; break; case 1: yoil='월'; break;
            case 2: yoil='화'; break; case 3: yoil='수'; break;
            case 4: yoil='목'; break; case 5: yoil='금'; break;
            case 6: yoil='토';
        }
        let nowStr = `
            ${nowDate.getFullYear()}년&nbsp;
            ${nowDate.getMonth()+1}월&nbsp;
            ${nowDate.getDate()}일&nbsp;
            ${yoil}요일&nbsp;
            ${ampm}&nbsp;
            ${hours}시&nbsp;
            ${nowDate.getMinutes()}분&nbsp;
            ${nowDate.getSeconds()}초&nbsp;`;
        clock.innerHTML = nowStr;
    }, 1000);
});

document.querySelector('#stop').addEventListener('click', e => {
    clearInterval(timer);
});



