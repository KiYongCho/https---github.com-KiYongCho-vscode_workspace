// json 실습

// 네이버 언론사별 랭킹뉴스
// https://news.naver.com/main/ranking/popularDay.naver

// 1. 랭킹뉴스 웹페이지의 HTML을 불러온다.
// 2. 언론사명, 언론사별 뉴스제목(5개씩)을 JSON문자열로 생성한다.
// 3. 버튼을 누르면 언론사명, 언론사별 뉴스제목을 테이블로 출력한다.
// * 선택 : 뉴스제목 클릭시 해당 뉴스로 이동하는 기능

// CORS Unblock 크롬 확장프로그램 설치 후 실행
document.getElementById('loadBtn').addEventListener('click', async () => {
    const response = await fetch('https://news.naver.com/main/ranking/popularDay.naver');
    const text = new TextDecoder("euc-kr").decode(await response.arrayBuffer());

    const parser = new DOMParser();
    const doc = parser.parseFromString(text, 'text/html');

    const newsData = [];

    const mediaSections = doc.querySelectorAll('.rankingnews_box'); // 언론사별 박스

    mediaSections.forEach(section => {
        const mediaName = section.querySelector('.rankingnews_name')?.textContent.trim();
        const articles = Array.from(section.querySelectorAll('ul.rankingnews_list > li')).slice(0, 5);

        const newsList = articles.map(li => {
            const a = li.querySelector('a');
            const title = a?.textContent.trim();
            const href = a?.href;
            return { title, link: href };
        });

        newsData.push({ media: mediaName, articles: newsList });
    });

    // 출력
    const tableEl = document.createElement('table');
    const thead = `<thead><tr><th>언론사</th><th>뉴스 제목 (Top 5)</th></tr></thead>`;
    let tbody = '<tbody>';

    newsData.forEach(item => {
        const articleLinks = item.articles.map(a =>
            `<div><a href="${a.link}" target="_blank">${a.title}</a></div>`
        ).join('');
        tbody += `<tr><td>${item.media}</td><td>${articleLinks}</td></tr>`;
    });

    tbody += '</tbody>';
    tableEl.innerHTML = thead + tbody;

    document.getElementById('newsTable').innerHTML = '';
    document.getElementById('newsTable').appendChild(tableEl);
});