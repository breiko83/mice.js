$("div").mousemove(function(e) {
	socket.emit('pos', { x: e.pageX, y:e.pageY });
});