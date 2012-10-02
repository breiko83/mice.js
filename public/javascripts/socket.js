var socket = io.connect();
socket.on('connect', function () {
	
	socket.on('logout',function(data){
		$("#cursor_"+data.id).remove();
		$("#counter").text(data.n_users);
	});
	
	socket.on('login',function(data){
		if($('#cursor_'+data.id).length == 0)
			$("#playground").append('<img class="cursor" id="cursor_'+data.id+'" src="/images/cursor.png" />');
			$("#counter").text(data.n_users);
	});
	
	socket.on('move',function(data){
		var x = data.x;
		var y = data.y;
		var id = data.id;
		$("#cursor_"+id).css('left',x+"px");
		$("#cursor_"+id).css('top',y+"px");
	});
});