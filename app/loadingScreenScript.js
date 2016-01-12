$(function () {
		function moveBallDown (ball) {
		//ball.addClass('ballDown');
		ball.animate({top: '400px'}, 680, 'easeInCirc');
		//ball.removeClass('ballDown');
		ball.animate({width: '125px', height: '75px', top: '420px', borderTopLeftRadius: '250px', borderTopRightRadius: "250px",  borderBottomLeftRadius: '75px', borderBottomRightRadius: '75px'}, 100);
		//ball.addClass('ballUp');
		ball.animate({top: '50px', width: '100px', height: '100px', borderRadius: '100px'}, 680, 'easeOutCirc');
		//ball.removeClass('ballUp');
		bounceCount++;
	}
});