// 별찍기

// 1. 직각삼각형
// *
// **
// ***
// ****
// *****
// i : 0    1      2         3             4
// j : 0    0,1   0,1,2   0,1,2,3     0,1,2,3,4
for (let i=0; i<5; i++) { // 줄의 반복 수
    for (let j=0; j<i+1; j++) { // 별의 반복 수
        process.stdout.write('*');
    }
    console.log(); // 줄 바꿈    
}

console.log();

// 2. 역직각삼각형
// *****
// ****
// ***
// **
// *
// i 0 (j 0 1 2 3 4)
// i 1 (j 0 1 2 3)
// i 2 (j 0 1 2)
// i 3 (j 0 1)
// i 4 (j o)
for (let i=0; i<5; i++) { // 줄의 반복 수
    for (let j=0; j<5-i; j++) { // 별의 반복 수
        process.stdout.write('*');
    }
    console.log(); // 줄 바꿈    
}

console.log();

// 3. 역직각우삼각형
// *****
// 0****
// 00***
// 000**
// 0000*
for (let i=0; i<5; i++) { // 줄의 반복 수
    for (let j=0; j<i; j++) { // 0의 반복 수
        process.stdout.write('0');
    }
    for (let j=0; j<5-i; j++) { // 별의 반복 수
        process.stdout.write('*');
    }
    console.log(); // 줄 바꿈    
}

console.log();

// 4. 이등변삼각형
// 0000*
// 000***
// 00*****
// 0*******
// *********
for (let i=0; i<5; i++) { // 줄의 반복 수
    for (let j=0; j<4-i; j++) { // 0의 반복 수
        process.stdout.write('0');
    }
    for (let j=0; j<i*2+1; j++) { // 별의 반복 수
        process.stdout.write('*');
    }
    console.log(); // 줄 바꿈    
}

console.log();

// 5. 역이등변삼각형
// *********
// 0*******
// 00*****
// 000***
// 0000*

console.log();

// 6. 9by9 box
// *********
// *0000000*
// *0000000*
// *0000000*
// *0000000*
// *0000000*
// *0000000*
// *0000000*
// *********
// ij
// 00 01 02 03 04 05 06 07 08
// 10 11 12 13 14 15 16 17 18
// ...
// 80 81 82 83 84 85 86 87 88

for (let i=1; i<10; i++) {
    for (let j=1; j<10; j++) {
        if (i%8==1 || j%8==1) {
            process.stdout.write('*');
        } else {
            process.stdout.write('0');
        }
    }
    console.log();    
}

console.log();

// 7. 9by9 X
// *0000000*
// 0*00000*0
// 00*000*00
// 000*0*000
// 0000*0000
// 000*0*000
// 00*000*00
// 0*00000*0
// *0000000*

for (let i=1; i<10; i++) {
    for (let j=1; j<10; j++) {
        if (i==j || (10-i)==j) {
            process.stdout.write('*');
        } else {
            process.stdout.write('0');
        }
    }
    console.log();    
}

console.log();

// 8. 9by9 box X
// *********
// **00000**
// *0*000*0*
// *00*0*00*
// *000*000*
// *00*0*00*
// *0*000*0*
// **00000**
// *********

for (let i=1; i<10; i++) {
    for (let j=1; j<10; j++) {
        if (i%8==1 || j%8==1 || i==j || (10-i)==j) {
            process.stdout.write('*');
        } else {
            process.stdout.write('0');
        }
    }
    console.log();    
}

console.log();

// 9. 9by9 diamond
// 0000*0000
// 000***000
// 00*****00
// 0*******0
// *********
// 0*******0
// 00*****00
// 000***000
// 0000*0000

const line = 9;
const middle = (line+1)/2;

for (let i=1; i<line+1; i++) {
    if (i<=middle) {
        for (let j=1; j<=middle-i; j++) process.stdout.write('0');
        for (let j=1; j<=i*2-1; j++) process.stdout.write('*');
        for (let j=1; j<=middle-i; j++) process.stdout.write('0');
    } else {
        for (let j=1; j<=i-middle; j++) process.stdout.write('0');
        for (let j=1; j<=line-(i-middle)*2; j++) process.stdout.write('*');
        for (let j=1; j<=i-middle; j++) process.stdout.write('0');
    }
    console.log();
}

console.log();

// 10. 9by9 butterfly
// 000000000
// *0000000*
// **00000**
// ***000***
// ****0****
// ***000***
// **00000**
// *0000000*
// 000000000

const line2 = 9
const middle2 = (line2+1)/2;
for (let i=1; i<=line2; i++) {
    if (i<=middle2) {
        for (let j=1; j<=i-1; j++) process.stdout.write('*');
        for (let j=1; j<=(middle2-i)*2+1; j++) process.stdout.write('0');
        for (let j=1; j<=i-1; j++) process.stdout.write('*');
    } else {
        for (let j=1; j<=line2-i; j++) process.stdout.write('*');
        for (let j=1; j<=(i-middle2)*2+1; j++) process.stdout.write('0');
        for (let j=1; j<=line2-i; j++) process.stdout.write('*');
    }
    console.log();    
}

console.log();

