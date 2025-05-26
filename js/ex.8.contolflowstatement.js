/*
    타이핑하는 한 글자 한 글자에는 의미가 있어야 합니다.
    => 누가 언제와서 물어봐도 코드에 대해 명확히 설명할 수 있어야 내 코드 입니다.

    결과가 나오는 코드는 바보도 짭니다. (내가 한 말 아님!)
    => 결과가 나오면 더 나은 코드(가독성, 성능, 보안, 확장성 ...)가 될 방법이 없는지 늘 살펴보세요.

    에러하고 친구가 되세요.
    => 에러 원인을 시간과 정성들여 분석하고 해결합니다.
*/

// 제어문(조건문, 반복문) 실습

// 1. 1부터 100까지 짝수의 합을 구해서 출력
let sum = 0;
for (let i=1; i<=100; i++) { // 100번 반복수행하는 for
    if (i%2==0) sum += i; // sum = sum + i;
}
console.log('1부터 100까지 짝수의 합은 : ' + sum);

for (let i=2, sum2=0; i<=100; i=i+2) { // 50번 반복수행하는 for
    sum2 += i;
}
console.log('1부터 100까지 짝수의 합은 : ' + sum2);


// 2. 1부터 100까지 7의 배수 중 50보다 큰 수들을 구해서 출력
for (let i=7; i<=100; i=i+7) {
    if (i>50) console.log(i);    
}

// 3. 1부터 1000까지 홀수의 개수와 짝수의 개수를 각각 출력
let oddCount = 0;
let evenCount = 0;
for (let i=1; i<=1000; i++) {
    if (i%2==0) evenCount++;
    else oddCount++;
}
console.log(`홀수 개수:${oddCount}, 짝수 개수:${evenCount}`);

// 4. 1부터 1000까지 제곱수만 출력
// (제곱수:정수를 제곱한 수, 1은 제곱수, 2는 제곱수 아님, 3은 제곱수 아님, 4는 제곱수)
for (let i=1; i*i<=1000; i++) {
    console.log(i*i);    
}

// 5. 윤년 판별 
// (윤년:4로 나눈 나머지가 0이면서 100으로 나눈 나머지가 0이 아니거나 400으로 나눈 나머지가 0)
let year = 2134;
if ( (year%4==0 && year%100!=0) || year%400==0 ) console.log('윤년임');
else console.log('윤년아님');

// 6. 세 수 중 가장 큰 수를 출력
let a = 25;
let b = 47;
let c = 39;
let max = a>b ? (a>c ? a : c) : (b>c ? b : c);
console.log('세 수 중 가장 큰 수 : ' + max);

// 7. 팩토리얼(factorial) 계산해서 출력
// 팩토리얼 : 1부터 해당 수까지 곱한 수
// ex) 5팩토리얼 = 1 * 2 * 3 * 4 * 5
let fact = 7;
let result = 1;
for (let i=1; i<=fact; i++) {
    result *= i;
}
console.log(`${fact} 팩토리얼 결과 : ${result}`);

// 문자 가로로 출력하기 : Node 환경에서만 작동
process.stdout.write('A');
process.stdout.write('B');
process.stdout.write('C\n');

// 8. 구구단 중 5단 출력
// ex) 5*1=5 5*2=10 ... 5*9=45
for (let i=1; i<=9; i++) {
    process.stdout.write(`5*${i}=${5*i} `);    
}

// 9. 구구단 전체 출력
// ex) 2*1=2 2*2=4 ... 2*9=18
//       3*1=3 3*2=6 ... 3*9=27
//       ...
//       9*1=9 9*2=18 ... 9*9=81
for (let i=2; i<=9; i++) {
    for (let j=1; j<=9; j++) {
        console.log(`${i}*${j}=${i*j} `);
    }
    console.log();    
}

console.log();

// 10. 구구단 중에서 짝수 단만 출력. 단 곱해지는 수가 3의 배수인 경우만 출력
// ex) 2*3=6 2*6=12 2*9=18
//       4*3=12 4*6=24 4*9=36
//       6*3=18 6*6=36 6*9=54
//       8*3=24 8*6=48 8*9=72

// 10번 for문 이렇게 작성하신 분들... 다시 생각해 보기!
for (let i=2; i<=9; i++) {
    for (let j=1; j<=9; j++) {
        // 반복 수행할 코드 (8 * 9 = 72번 반복)
    }
}

console.log();

for (let i=2; i<=9; i=i+2) {
    for (let j=3; j<=9; j=j+3) {
        // 반복 수행할 코드 (4 * 3 = 12번 반복)
        process.stdout.write(`${i}*${j}=${i*j} `);   
    }
    console.log();    
}
