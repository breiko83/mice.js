$("div").mousemove(function(e) {
	socket.emit('pos', { id:socket.socket.sessionid, x: e.pageX, y:e.pageY });
});
document.addEventListener('touchmove', function(event) {
    event.preventDefault();
    var touch = event.touches[0];
		socket.emit('pos', { id:socket.socket.sessionid, x: touch.pageX, y:touch.pageY });
}, false);