// 원격서버의 JSON문자열을 획득
const response = await fetch('https://jsonplaceholder.typicode.com/users');

// 응답이 정상이 아니라면 에러 발생 출력
if (!response.ok) {
    throw new Error('에러 발생!');
}

// fetch를 통해서 응답을 Promise로 받으므로 response.json()으로 Javascript객체로 변환
const users = await response.json();

users.forEach(user => {
    console.log(`
        id: ${user.id}, 
        name: ${user.name},
        username: ${user.username},
        email: ${user.email},
        address: ${user.address.street} ${user.address.suite} ${user.address.city}
    `);
});