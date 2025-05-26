// 실습 : 숫자야구게임

// * 게임규칙
// 1. 사용자에게 게임난이도를 선택하게 한다.
//  - 난이도 1:숫자 2개, 난이도 2:숫자 3개, 난이도 3:숫자 4개
// 2. 컴퓨터는 난이도에 따라 임의의 중복되지 않는 1~9 숫자를 개수만큼 생성한다.
// 3. 사용자가 숫자를 입력한다.
// 4. 컴퓨터의 숫자와 사용자 입력 숫자가 자리수별로 맞으면 스트라이크 자리수가 틀리지만 맞으면 볼
//     ex)
//     난이도가 1이고 컴퓨터의 숫자가 23, 사용자 입력 숫자가 23인 경우 2스트라이크
//     난이도가 1이고 컴퓨터의 숫자가 23, 사용자 입력 숫자가 25인 경우 1스트라이크
//     난이도가 1이고 컴퓨터의 숫자가 25, 사용자 입력 숫자가 23인 경우 1스트라이트
//     난이도가 1이고 컴퓨터의 숫자가 25, 사용자 입력 숫자가 32인 경우 1볼
//     난이도가 1이고 컴퓨터의 숫자가 32, 사용자 입력 숫자가 23인 경우 2볼
// 5. 사용자는 2스트라이크로 게임이 종료될때 까지 계속 게임을 진행한다.
// 6. 게임이 종료되면 몇번 시도로 맞추었는지 화면에 표시한다.

// * 출력 예시
// 게임난이도를 선택하세요(1~3) : 1 (<화면에 보이면 안됨>컴퓨터 예상 숫자:23)
// 예상숫자를 입력하세요 : 78
// 결과 : 꽝
// 예상숫자를 입력하세요 : 32
// 결과 : 2볼
// 예상숫자를 입력하세요 : 23
// 결과 : 2스트라이크
// 시도회수 3회에 성공!

// Node환경에서 사용자 키보드 입력 받기
// 1. 터미널 실행 (Ctrl + `)
// 2. 보안 정책 변경 : Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned
// 3. readline모듈 설치 : npm install -g readline
// * 실행 : 터미널에서 node ex.30.bbnumgame > 엔터
// cf) @inquirer/prompts 모듈 사용(.mjs) : npm install @inquirer/prompts
// import { input } from '@inquirer/prompts';
// const answer = await input({ message: 'Enter your name' });
// console.log(`Hello, ${name}!`);
// * 실행 : 터미널에서 node ex.30.bbnumgame.mjs > 엔터


// 사용자 키보드 입력 샘플 코드
// const readline = require('readline');
// const rl = readline.createInterface({input: process.stdin, output: process.stdout});
// rl.question("게임 난이도를 선택하세요(1~3) ", level => {
//   console.log(`선택한 난이도 : ${level}`);
//   rl.close();
// });

// 키보드 입력 라이브러리
const readline = require("readline");
const rl = readline.createInterface({input: process.stdin, output: process.stdout});

// 사용자 키보드 입력 함수
function getUserInput(question) {
  return new Promise(resolve => rl.question(question, resolve));
}

// 난이도에 따른 숫자 배열 추출 함수
function getComNums(level) {
  const len = +level + 1;
  const nums = [];
  while (nums.length < len) {
    const n = Math.floor(Math.random() * 9) + 1;
    if (!nums.includes(n)) nums.push(n);
  }
  return nums;
}

// 결과 연산 함수
function getResult(comNums, userNums) {
  let strike = 0, ball = 0;
  for (let i = 0; i < comNums.length; i++) {
    if (comNums[i] === userNums[i]) strike++;
    else if (userNums.includes(comNums[i])) ball++;
  }
  return [strike, ball];
}

// 비동기 즉시실행함수
(async () => {
  const gameLevel = await getUserInput("게임 난이도를 선택하세요(1~3): ");
  const comNums = getComNums(gameLevel); // 컴퓨터 추출 숫자 배열
  const maxStrike = +gameLevel + 1; // 최대 스트라이크 수
  let tryCount = 0; // 시도 회수

  console.log("컴퓨터 예상 숫자:", comNums.join(""));

  while (true) {

    const userInput = await getUserInput("예상 숫자를 입력하세요: "); // 사용자 입력 숫자

    // 숫자가 아니거나 길이가 맞지 않으면 다시 입력 받음
    if (!/^\d+$/.test(userInput) || userInput.length !== maxStrike) {
      console.log(`${maxStrike}자리 숫자를 정확히 입력해주세요.`);
      continue;
    }

    // 스트라이크 수, 볼 수 추출
    const [strike, ball] = getResult(comNums, userInput.split("").map(ele=>+ele));
    tryCount++; // 시도 회수 증가

    // 스트라이크 모두 맞춘 경우
    if (strike === maxStrike) {
      console.log(`결과: ${strike}스트라이크`)
      console.log(`시도회수 ${tryCount}회에 성공!`);
      break;
    // 모두 못 맞춘 경우
    } else if (strike === 0 && ball === 0) {
      console.log("결과: 꽝");
    // 스트라이크/볼 일부 맞춘 경우
    } else {
      console.log(`결과: ${strike}스트라이크 ${ball}볼`);
    }
  }

  rl.close(); // 입력 라이브러리 메모리 해제
  
})();
