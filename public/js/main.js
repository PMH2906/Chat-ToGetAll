
const socket = io();

const ioTxt = document.querySelector('#io-txt');


const ioId = document.querySelector('.io-id');
const ioRoom = document.querySelector('.io-room');
const intro = document.querySelector('.introduce');

let defaultRoom = "square";
let joinedRoom = null;

socket.on('connect', () => {
    
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

});

function send() {

    let chatData = { room: joinedRoom, txt: ioTxt.value, id: ioId.innerHTML, time: new Date().toDateString() }
    socket.emit('me', chatData);

    let msgStr = `나 : ${chatData.txt} ${chatData.time}`;
    addChatList(msgStr);

    ioTxt.value = "";
}

function joinRoom(roomId) {
    
    socket.emit('join', roomId);
    
}

function addChatList(txt) {
    const list = document.querySelector('#chat_list');

    let li = document.createElement('li');
    li.innerHTML = txt;
    list.appendChild(li);
}