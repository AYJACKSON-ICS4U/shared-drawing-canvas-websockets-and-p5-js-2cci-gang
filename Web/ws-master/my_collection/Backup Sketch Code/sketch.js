var socket;

function setup() {
	createCanvas(windowWidth, windowHeight);

	socket = io.connect('http://localhost:3000')
	socket.on('mouse', newDrawing);
}

function newDrawing(data) {
	fill(255, 0, 1);
	ellipse(data.x, data.y, 25,25);
}

function mouseDragged() {
	console.log('Sending: ' + mouseX + ',' + mouseY)

	var data = {
		x: mouseX,
		y: mouseY
	}

	socket.emit('mouse', data);

	fill(mouseX,mouseY,mouseX*mouseY);
	ellipse(mouseX,mouseY,25,25);
}

function draw() {
}
