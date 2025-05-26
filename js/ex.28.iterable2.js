// ex.28.iterable2.js
// 이터러블 실습2

// 원격지 JSON 서버에서 JSON데이터 획득
fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => {

            // 모든 사용자 정보를 아래 형식으로 출력
            // *************************************************************
            // [1번]
            // Bret (Leanne Graham, Sincere@april.biz, 1-770-736-8031 x56442)
            // 주소 : Kulas Light Apt. 556 Gwenborough (92998-3874) [-37.3159, 81.1496]
            // 웹사이트 : hildegard.org
            // 회사 : Romaguera-Crona, harness real-time e-markets
            // *************************************************************

            for (obj of json) {

                  const {
                        id, name, username, email,
                        address:{street, suite, city, zipcode, geo:{lat, lng}},
                        phone, website,
                        company:{name:companyName, bs}
                  } = obj;

                  console.log('********************************************************');
                  console.log(`[${id}번]`);
                  console.log(`${username} (${name}, ${email}, ${phone})`);
                  console.log(`주소 : ${street} ${suite} ${city} (${zipcode}) [${lat}, ${lng}]`);
                  console.log(`웹사이트 : ${website}`);
                  console.log(`회사 : ${companyName}, ${bs}`);                  
                  console.log('********************************************************');

            }

      })