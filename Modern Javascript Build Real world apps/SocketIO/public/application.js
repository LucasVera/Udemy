'use strict';

// this is the client's code. the var socket represents
// the connection between the client and the server.
const socket = io();

// socket.emit is the opposite of socket.on
// the timeout is to view it on the network
// panel of the browser
window.setTimeout(()=>{
	socket.emit('chat:add', {message:'New user arrived to chat!'});
}, 2000);

const chatInput = document.querySelector('.chat-form input[type=text]');

chatInput.addEventListener('keypress', event=>{
	// we want to emit an event to send a message whenever the
	// user presses the enter key. event.keyCode===13

	if (event.keyCode !== 13){
		return;
	}

	// this is to prevent the browser from doing anything it would
	// normally do (for example, submit a form)
	event.preventDefault();

	// gets the value of the input
	const text = event.target.value.trim();

	if (text.length === 0){
		return;
	}

	// it's best to add an object rather than just
	// the text.
	socket.emit('chat:add', {message:text});

	event.target.value = '';
});

const chatList = document.querySelector('.chat-list ul');
socket.on('chat:added', data =>{
	console.log(data);
	const messageElement = document.createElement('li');
	// user .innerText instead of .innerHTML to avoid
	// xss vulnerabilities
	messageElement.innerText = data.message;
	chatList.appendChild(messageElement);
	// always scroll to the last message
	chatList.scrollTo = chatList.scrollHeight;
});
