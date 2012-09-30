var socket = io.connect();
socket.on('connect', function () {
	socket.on('move',function(data){
		var x = data.x;
		var y = data.y;
		$("#cursor").css('margin-left',x+"px");
		$("#cursor").css('margin-top',y+"px");
	});
});