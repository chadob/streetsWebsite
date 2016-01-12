$(function () {
	var sidebar = $('#sidebar'), sidebarChildren = sidebar.children(), currentDiv, currentDivId, videoDes, videoToCopy;
	var basketball = $('#ball'), bounceCount = 0, timer = 0, timerInt, transitionWait, transitionTimer = 0;
	var vidDesObj = {
		shootingFundupperLeftVideo: "<p class='vidDes'> John Calpari and Clay Thomson hit the highlights </p>", shootingFundupperRightVideo: "<p class='vidDes'> Julia Allender hits the basics of your shot, covering topics such as finger and foot placement </p>", shootingFundlowerLeftVideo: "<p class='vidDes'> Julia Allender emphasizes foot positioning as she goes over shooting on the move. </p>", shootingFundlowerRightVideo: "<p class='vidDes'> Julia Allender again teaches the fundamentals of shooting, but this time shows  how to shoot off the dribble. </p>", 
		shootingDrillsupperLeftVideo: "<p class='vidDes'> This video gives drills to practice shooting off of the dribble. The instructor also impresses the importance of hard quick dribbles to gather your shot. </p>", shootingDrillsupperRightVideo: "<p class='vidDes'> All by yourself? Check out these alternatives to just bounce passing to yourself. </p>", shootingDrillslowerLeftVideo: "<p class='vidDes'> Have a partner and want to spice up shooting around? Check out these drills. </p>", shootingDrillslowerRightVideo: "<p class='vidDes'> Dave Hopla, world record holder, goes over shooting form in this video. </p>", 
		shootingInspupperLeftVideo: "<p class='vidDes'> Reggie! </p>", shootingInspupperRightVideo: "<p class='vidDes'> Ray Ray! </p>", shootingInsplowerLeftVideo: "<p class='vidDes'> Steph! </p>", shootingInsplowerRightVideo: "<p class='vidDes'> Clutch! </p>", 
		dribblingMovesupperLeftVideo: "<p class='vidDes'> <ul> <li> Moves Gone Over: </li>	<li> Euro Step 1:45-4:20 </li> <li> Drop Cross Package 4:25-8:15 </li> <li> Step Back 8:15-10:30 </li> <li> Specific Moves 10:30- 12:40 </li> <li> Behind the back 12:45-End </li> </ul> </p>", 
		dribblingMovesupperRightVideo: "<p class='vidDes'> <ul> <li> Moves Gone Over: </li> <li> In'n'Out 0:45-2:00 </li> <li> Spin Move 2:00-5:00 </li>	<li> Change of Speed 5:00-7:30 </li> <li> Pull Up 7:30-End </li> </ul> </p>", 
		dribblingMoveslowerLeftVideo: "<p class='vidDes'> <ul> <li> Moves Gone Over </li> <li> In'n'Out Pull Up 0:10-1:30 </li>	<li> Pull Back 1:30-2:40 </li> <li> Vs Gary Neal 2:40-4:00 </li> <li> Vs OKC Fake Pass 4:00-5:00 </li> <li> Underhand Floater 5:00-6:15 </li>	<li> Pull Up 6:15-7:45 </li> <li> Step Back 7:45-End </li> </ul> </p>", 
		dribblingMoveslowerRightVideo: "<p class='vidDes'> <ul> <li> Moves Gone Over </li>	<li> Jump Stop 0:30-3:00 </li> <li> Push Floater 3:00-4:45 </li> <li> Crossover 4:45- 6:00 </li> <li> Hesitation Left 6:00-7:40 </li> <li> In'n'Out Cross 7:40-End </li> </ul> </p>",
		dribblingFundupperLeftVideo: "<p class='vidDes'> Coach Rock talks about hand placement </p>", dribblingFundupperRightVideo: "<p class='vidDes'> Multiple facets of dribbling are covered </p>", dribblingFundsixMiddleLeft: "<p class='vidDes'> Howcast emphasizes keeping low dribbles in this speed-dribbling video. </p>", dribblingFundsixMiddleRight: "<p class='vidDes'> Fast break dribbling is covered here. </p>", dribblingFundlowerLeftVideo: "<p class='vidDes'> Proper weight distribution is taught in this crossover tutorial. </p>", dribblingFundlowerRightVideo: "<p class='vidDes'> Here are some solo wall drills to practice. </p>"};

	// set font size
	
	var textSize = Number($('body').css('width').replace('px', "") / 4 * .66);
	$('#title').css('font-size', textSize + "px")


	//code for the sidebar



	sidebar.on('click', '.sidebarButton', function () {
		$this = $(this);
		console.log(transitionTimer);
		if (transitionTimer === 0) {
			transitionTimer++;
			console.log("hi" + transitionTimer)
			if ($('#' + ($this.attr('id')).replace('Button','')).hasClass('active')) {
				setTimeout(function() {
					transitionTimer=0;
				}, 2000);
			} else {
				setTimeout(function() {
					$('.active').css('left', '-100%');
					$('#' + ($this.attr('id')).replace('Button','')).css('left', '0px');

					//code for making activeVideo hidden when it is removed

					$('.activeVideo').removeClass('activeVideo');
				}, 0);
				setTimeout(function() {
					$('.active').css('visibility', 'hidden');
					$('.active').css('left', '100%');
				}, 1000);
				setTimeout(function() {
					//code for making activeVideo Visible
					$('#' + $('.activeSelector').attr('id').replace('Selector', 'Video')).addClass('activeVideo');
					$('.active').css('visibility', 'visible');
					$('.backgroundDiv').removeClass('active');
					$('#' + ($this.attr('id')).replace('Button','')).addClass('active');
					transitionTimer = 0;
					console.log("hello" + transitionTimer);
				}, 2000);
			}
		}
	});
	sidebar.on('mouseover', function () {
		if ($('#shootingInsp').hasClass('active')) {
			sidebar.addClass('whiteBG');
		} else if ($('.active').length) {
			sidebar.addClass('nonWhiteBG');
		} else {
			sidebar.addClass('whiteBG');
		}
	});	
	sidebar.on('mouseout', function () {
		if ($(this).hasClass('whiteBG')) {
			sidebar.removeClass('whiteBG');
		} if ($(this).hasClass('nonWhiteBG')) {
			sidebar.removeClass('nonWhiteBG');
		}
	});	
	$('.sidebarButton').on('mouseover', function() {
		if ($('#shootingInsp').hasClass('active') || $('.active').length === 0) {
			$(this).addClass('buttonWhiteBG');
		} else {
			$(this).addClass('buttonNonWhiteBG');
		}		
	});
		$('.sidebarButton').on('mouseout', function() {
		if ($(this).hasClass('buttonWhiteBG')) {
			$(this).removeClass('buttonWhiteBG');
		} if ($(this).hasClass('buttonNonWhiteBG')) {
			$(this).removeClass('buttonNonWhiteBG');
		}		
	});


	//code for figcaptions



	$('.videoCover').on('mouseover', function(e) {
		currentDiv = $('.backgroundDiv').filter('.active');
		currentDivId = currentDiv.attr('id');
		videoDes = ("" + currentDivId + $(this).prev().attr('class').split(' ')[1]);
		if (vidDesObj.hasOwnProperty(videoDes)) {
			$("#" + currentDivId + "Wrap" + " .desHolder").append(vidDesObj[videoDes]);
		}
	});
	$('.videoCover').on('mouseout', function(e) {
		$('.desHolder').empty();
	});
	
//code for modal div



	$('.videoCover').on('click', function(e) {
		e.preventDefault();
		videoToCopy = $(this).prev().attr('src');
		$('#modalVideoWrap').append('<iframe id="modalVideo" width="840" src=' + videoToCopy + "?autoplay=1" + ' height="490" frameborder="0" allowfullscreen></iframe>');
		$('#modalVideoBG').css("visibility", "visible");
		$('#modalVideoWrap').css('visibility', 'visible');
		$('#modalVideoBG').css('opacity', .99);
		$('#modalVideoWrap').css('opacity', 1);
	});
	$('#modalClose').on('mouseover', function() {
		$('#modalClose').css('color', 'gray');
		$('#modalClose').css('border-color', 'gray');
	});
	$('#modalClose').on('mouseout', function() {
		$('#modalClose').css('color', 'white');
		$('#modalClose').css('border-color', 'white');
	});
	$('#modalClose').on('click', function() {
		$('#modalVideo').remove()
		$('#modalVideoBG').css('opacity', 0);
		$('#modalVideoWrap').css('opacity', 0);
		$('#modalVideoBG').css("visibility", "hidden");
		$('#modalVideoWrap').css('visibility', 'hidden');
	});

	//code for loading screen ball bouncing? can't use animate with calc so i'm animating in the css



	function timerFunc() {
		$('#timeText').text(timer);
		timer++;
	}
	timerInt = setInterval(timerFunc, 1000);
	$(document).ready(function() {
		setTimeout(function() {
			$('#loadingScreen').remove();
		}, 10000);
	});


	//code for slides on page 6 dunking



	$('.dunkingSelector').on('click', function() {
		if ($(this).hasClass('firstSelector') && $(this).prev().hasClass('dunkingSelector')) {

			//code for shiftingslideshow Right

			$('.firstSelector').removeClass('firstSelector');
			$(this).prev().addClass('firstSelector');
			$('.thirdSelector').removeClass('thirdSelector');
			$(this).next().addClass('thirdSelector');
			$('#slideshow').css('left', '0px')

			//code for which video shows up

			$('.activeSelector').css('height', '55px');
			$('.activeSelector').find('img').css('height', '55px');
			$('.activeSelector').removeClass('activeSelector');
			$('.activeVideo').removeClass('activeVideo');
			$(this).addClass('activeSelector');
			$(this).css('height', '60px');
			$(this).find('img').css('height', '60px');
			$('#' + $(this).attr('id').replace('Selector', 'Video')).addClass('activeVideo');
		} else if ($(this).hasClass('thirdSelector') && $(this).next().hasClass('dunkingSelector')) {

			//code for slideshow

			$('.thirdSelector').removeClass('thirdSelector');
			$(this).next().addClass('thirdSelector');
			$('.firstSelector').removeClass('firstSelector');
			$(this).prev().addClass('firstSelector');
			$('#slideshow').css('left', '-100px');			

			//code for shifting slideshow Left

			$('.activeSelector').css('height', '55px');
			$('.activeSelector').find('img').css('height', '55px');
			$('.activeSelector').removeClass('activeSelector');
			$('.activeVideo').removeClass('activeVideo');
			$(this).addClass('activeSelector');
			$(this).css('height', '60px');
			$(this).find('img').css('height', '60px');
			$('#' + $(this).attr('id').replace('Selector', 'Video')).addClass('activeVideo');
		} else {
			$('.activeSelector').css('height', '55px');
			$('.activeSelector').find('img').css('height', '55px');
			$('.activeSelector').removeClass('activeSelector');
			$('.activeVideo').removeClass('activeVideo');
			$(this).addClass('activeSelector');
			$(this).css('height', '60px');
			$(this).find('img').css('height', '60px');
			$('#' + $(this).attr('id').replace('Selector', 'Video')).addClass('activeVideo');
		}
	});
});