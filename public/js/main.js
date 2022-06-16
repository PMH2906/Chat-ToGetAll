// const socket = io();

// const ioTxt = document.querySelector('#io-txt');
// // ioTxt.value = parseInt(Math.random() * 100);
// // ioTxt.value = "메세지를 입력하세요."

// const ioId = document.querySelector('.io-id');
// const ioRoom = document.querySelector('.io-room');

// let defaultRoom = "square";
// let joinedRoom = null;

// socket.on('connect', () => {
//     // console.log('connect');
// });

// socket.on('join', (roomId) => {
//     joinedRoom = roomId
//     // ioRoom.innerHTML = joinedRoom + " 에 연결되었습니다.";
//     // ioRoom.style.color = 'black';
// });

// socket.on('uk-id', (idData) => {
//     ioId.innerHTML = input;
// });

// socket.on('message', (msg) => {
//     let msgStr = `${msg.id} 님이 보낸 메시지 : ${msg.txt} ${msg.time}`

//     addChatList(msgStr)
//     // console.log('[client] - recevie:', msg);
// });

// function send() {

//     // socket.emit('me', { room: joinedRoom, txt: ioTxt.value, id: ioId.innerHTML, time: new Date().toDateString() });
//     let chatData = { room: joinedRoom, txt: ioTxt.value, id: ioId.innerHTML, time: new Date().toDateString() }
//     socket.emit('me', chatData);

//     let msgStr = `나 : ${chatData.txt} ${chatData.time}`;
//     addChatList(msgStr);

//     // ioTxt.value = parseInt(Math.random() * 100);
//     ioTxt.value = "";
// }

// function joinRoom(roomId) {
//     // ioRoom.innerHTML = roomId + " 서버에 연결되었습니다.";
//     socket.emit('join', roomId);
// }

// function addChatList(txt) {
//     const list = document.querySelector('#chat_list');

//     let li = document.createElement('li');
//     li.innerHTML = txt;
//     list.appendChild(li);
// }


const socket = io();

const ioTxt = document.querySelector('#io-txt');
// ioTxt.value = parseInt(Math.random() * 100);
// ioTxt.value = "메세지를 입력하세요."

const ioId = document.querySelector('.io-id');
const ioRoom = document.querySelector('.io-room');
const intro = document.querySelector('.introduce');

let defaultRoom = "square";
let joinedRoom = null;

socket.on('connect', () => {
    // console.log('connect');
});

socket.on('join', (roomId) => {
    joinedRoom = roomId
    ioRoom.innerHTML = joinedRoom + "에 입장했습니다.";
    ioRoom.style.color = 'black';
    intro.innerHTML = '';
});

socket.on('uk-id', (idData) => {
    ioId.innerHTML = input;
});

socket.on('message', (msg) => {
    let msgStr = `${msg.id} : ${msg.txt} ${msg.time}`

    addChatList(msgStr)
    // console.log('[client] - recevie:', msg);
});

function send() {

    // socket.emit('me', { room: joinedRoom, txt: ioTxt.value, id: ioId.innerHTML, time: new Date().toDateString() });
    let chatData = { room: joinedRoom, txt: ioTxt.value, id: ioId.innerHTML, time: new Date().toDateString() }
    socket.emit('me', chatData);

    let msgStr = `나 : ${chatData.txt} ${chatData.time}`;
    addChatList(msgStr);

    // ioTxt.value = parseInt(Math.random() * 100);
    ioTxt.value = "";
}

function joinRoom(roomId) {
    // ioRoom.innerHTML = roomId + " 서버에 연결되었습니다.";
    socket.emit('join', roomId);
    // const intro = document.querySelector('.introduce');
    // intro.innerHTML = '';
    // $('introduce').empty();
}

function addChatList(txt) {
    const list = document.querySelector('#chat_list');

    let li = document.createElement('li');
    li.innerHTML = txt;
    list.appendChild(li);
}