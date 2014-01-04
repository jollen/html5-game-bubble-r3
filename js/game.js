var gameModule = (function() {
	var ballX = 100
	  , ballY = 100
	  , ballR = 50;

	function start() {
		var canvas = document.getElementById("cover");

		var ctx = canvas.getContext("2d");

		canvas.width = 240;
		canvas.height = 320;

		ctx.fillStyle = 'black';
		ctx.beginPath();
		ctx.arc(ballX, ballY, ballR, 0, Math.PI * 2, true);
		ctx.fill();

		document.getElementById("cover")
				.addEventListener("click", touchEvent, false);

		console.log('Start Game');
	}

	function touchEvent(evt) {
		console.log('clicked: ' + evt.clientX + " , " + evt.clientY);

	}

	return {
		start: start
	}
}) ();