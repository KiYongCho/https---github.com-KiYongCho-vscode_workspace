// J/S 로또프로그램 구현

// 1. 사용자의 로또번호 6개를 랜덤하게 추출한다.
// 2. 로또 추첨을 100만번 수행한다. (추첨 : 로또번호 6개 + 보너스번호 1개)
// 3. 사용자의 등수별 당첨회수를 출력
// * 1등 : 6개 번호가 모두 맞은 경우
//    2등 : 5개 번호가 맞고 보너스 번호가 맞은 경우
//    3등 : 5개 번호가 맞은 경우
//    4등 : 4개 번호가 맞은 경우
//    5등 : 3개 번호가 맞은 경우
//    꽝

// 출력형식
// 사용자의 로또번호 : 3 12 23 24 35 45
// 1등:1번, 2등:3번, 3등:100번, 4등:500번, 5등:1000번

let bonusNum = 0; // 보너스 번호
const GAME_COUNT = 1000000; // 게임 회수
const rankCountArr = [0, 0, 0, 0, 0, 0]; // 등수별 당첨회수

// 로또번호 생성
const getLottoNums = user => {
    const lottoNums = new Set(); // 생성한 로또번호 저장 Set
    while (lottoNums.size<6) { // 6개
        // 로또번호 추가
        lottoNums.add(Math.floor(Math.random()*45) + 1);
    }
    if (user=='machine') { // 로또기계인 경우
        while (!lottoNums.has(bonusNum)) { // 보너스번호가 없으면
            bonusNum = Math.floor(Math.random()*45) + 1; // 보너스번호 생성
            break;
        }
    }
    // 생성한 번호들과 보너스번호 반환
    return [Array.from(lottoNums), bonusNum];
};

// 사용자 선택 번호
const userNums = getLottoNums("user")[0];

// 맞춘 번호 연산
const getCorrCount = () => {
    // 기계 추첨 번호
    const machineNums = getLottoNums("machine")[0];
    let corrCount = 0; // 맞춘 번호 개수
    for (let i=0; i<6; i++) {
        for (let j=0; j<6; j++) {
            // 맞춘 번호 카운트 증가
            if (userNums[i]==machineNums[j]) corrCount++;
        }
    }
    return corrCount; // 맞춘 개수 반환
};

// 등수 연산
const getRank = () => {
    switch (getCorrCount()) {
        case 6: rankCountArr[0]++; break;
        case 5: {
            // 2등은 5개가 맞고 보너스번호 맞음
            if (userNums.includes(bonusNum)) rankCountArr[1]++;
            else rankCountArr[2]++;
            break;
        }
        case 4: rankCountArr[3]++; break;
        case 3: rankCountArr[4]++; break;
        default: rankCountArr[5]++;
    }
};

// 게임
for (let i=0; i<GAME_COUNT; i++) getRank();

// 출력
console.log(`사용자의 로또번호 : ${userNums}`);
console.log(`총 게임회수 : ${GAME_COUNT} 회`);
for (let i=0; i<rankCountArr.length; i++) {
    console.log(`${(i+1)>5 ? '꽝' : (i+1)+'등'}: ${rankCountArr[i]}번 (${((rankCountArr[i]/GAME_COUNT)*100).toFixed(4)+'%'})`);    
}














