'use strict';

var http = require('http'),
	express = require('express'),
	socketIo = require('socket.io');


// creates express app (configures what the express app will do)
const app = express();
// tell express that we'll be using jade as the view engine
app.set('view engine', 'jade');


// app.use is the way to add middleware to an express ap
// request and response: straightforward. do something with the request
// or manipulate the response in some way
// next: tells express to go to the next step in the pipeline
// (whether is another middleware or the verb handlers)
// it must be called and the order of the pipeline will be the 
// same order as the code.
// express.static('folderName') serves static files (docs, imgs, etc)
// and ends the request. so in this example the middleware 2 never gets
// called. the express.static line needs to be commented in order to 
// se it.
app.use((request, response, next) =>{
	//console.log('in middleware 1');
	next();
	//console.log('out of middleware 1');
});

app.use(express.static('./public'));

app.use((request, response, next) =>{
	//console.log('--- in middleware 2');
	next();
	//console.log('--- out of middleware 2');
});

// create routes so that express knows what to GET, POST, etc
app.get('/', (request, response) =>{
	response.end('Hello world !!');
});

// response.render will use jade to render the index view
// with the title var that we set in jade
app.get('/home', (request, response)=>{
	response.render('index', {title:'TITLE HERE'});
});

// links http module with express app that was previously created
const server = new http.Server(app);

// attach a socketIO in our server
// io is actually an event-driven web-socket
// communication, so it emits and receives events
// and thats how it communicates with the client
const io = socketIo(server);
io.on('connection', socket =>{
	// add event handlers here
	console.log('Connection established');

	// custom event handler: (it will be emited from
	// the client)
	// the idea is that every socket.on will have a socket.emit
	// on the client and so on.
	// this handler is for every client that connects!
	// use socket.emit to send to the client that invoked this
	// handler, or use io.emit to send to every client that is
	// connected
	socket.on('chat:add', data =>{
		console.log(data);
		io.emit('chat:added', data);
	});

	socket.on('disconnect', ()=>{
		console.log('Disconnected');
	});
});

// set port that will listen on the pc
server.listen(3000, () => {
	console.log('Server running on port 3000');
});
