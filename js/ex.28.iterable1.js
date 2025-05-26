// ex.28.iterable1.js
// 이터러블 실습1

// 원격지 JSON 서버에서 JSON데이터 획득
fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(json => {

            // 1. 모든 id를 추출하여 출력
            // 2. 모든 completed를 추출하여 true인 것의 개수 출력
            let completedCount = 0;
            for (obj of json) {
                const {id, completed} = obj;
                console.log(id);                
                if (completed) completedCount++;
            }
            console.log(`완료 개수 : ${completedCount}`);

      })

/*
받아온 json은 아래 문자열임!
[
  { userId: 1, id: 1, title: 'delectus aut autem', completed: false },
  { userId: 1, id: 2, title: 'quis ut nam facilis et officia qui', completed: false},
   ...
*/