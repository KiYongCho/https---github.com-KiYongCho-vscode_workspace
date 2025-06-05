// websocket server

// 1. 터미널 실행 (Ctrl + `)
// 2. cd js
// 3. npm init -y
// 4. npm install express ws
// 5. package.json에 "type": "module" 추가 (파일명이 .js인 경우)
//* 보안오류 발생시
//   Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
// 서버실행 : node ex.35.websocket.js

/*
    클라이언트/서버 교신 모델
    1. request/response(요청/응답) 모델
        클라이언트가 서버에 요청하고 서버는 클라이언트에 응답하는 모델
    2. server sent event 모델 (server push message)
       클라이언트는 대기하고 서버가 클라이언트에 메세지(데이터)를 보내는 모델
*/

// node의 express 엔진 라이브러리
import express from 'express';

// ws라이브러리에서 WebSockerServer 임포트
import { WebSocketServer } from 'ws';

// express 앱을 http서버로 래핑(wrapping)하기 위한 라이브러리
import http from 'http';

// 파일 경로 조작을 위한 path 라이브러리
import path from 'path';

// 현재 모듈의 파일 경로를 얻기위한 fileURLToPath 함수
import { fileURLToPath } from 'url';

// _dirname을 ESM 환경에서 직접 사용할 수 없으므로 fileURLToPath로
// 현재 파일 이름을 가져옴
const _filename = fileURLToPath(import.meta.url);

// _dirname처럼 현재 파일의 디렉토리 경로를 구함
const _dirname = path.dirname(_filename);

// express 어플리케이션 생성
const app = express();

// express 어플리케이션을 http서버로 감싸서 WebSocket 사용 가능하도록 함
const server = http.createServer(app);

// WebSocketServer 생성
const wss = new WebSocketServer({ server });

// 클라이언트에게 정적 파일(html, js, css, 이미지...)을 제공하기 위해
// public이라는 폴더를 정적 경로로 사용하겠다는 설정
app.use(express.static(path.join(_dirname, 'public')));

// 클라이언트가 WebSocket에 접속할 때 실행되는 콜백함수
wss.on('connection', ws => {
    console.log('클라이언트 연결됨!');
    // 서버시간을 2초마다 클라이언트에 보냄
    const interval = setInterval(() => {
        const msg = `서버 시간 : ${new Date().toLocaleTimeString()}`;
        ws.send(msg);
    }, 2000);
    // 클라이언트 연결 종료시 콜백
    ws.on('close', () => {
        console.log('클라이언트 연결종료!');
        clearInterval(interval);
    });
});

// 웹소켓서버 포트를 설정
const PORT = 7575;

// 웹소켓서버를 7575포트에서 실행
server.listen(PORT, () => {
    console.log(`http://localhost:${PORT} 서버 실행 중!`);    
});








