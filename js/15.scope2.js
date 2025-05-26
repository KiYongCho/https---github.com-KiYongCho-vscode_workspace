var v = 1; // global

function outer() {
    console.log(v); // 1, outer내에서 v를 선언하지 않음 => outer의 상위스코프인 global을 탐색
    v = 3;
    console.log(v); // 3
    function inner() {
        // v변수가 inner안에서 사용 뒤에 선언되어 있으므로 inner 최상단에 호이스팅
        // var v;
        console.log(v); // undefined
        var v = 5; // 재선언
        console.log(v); // 5
    }
    inner();    
}
outer();
console.log(v); // 3


