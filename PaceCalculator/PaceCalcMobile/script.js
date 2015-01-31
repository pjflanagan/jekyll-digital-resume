// JavaScript Document
window.onload = function(){
	/*
	// Touch events courtesy of PADILICIOUS.COM and MACOSXAUTOMATION.COM
	var triggerElementID = null; // this variable is used to identity the triggering element
	var fingerCount = 0;
	var startX = 0;
	var startY = 0;
	var curX = 0;
	var curY = 0;
	var deltaX = 0;
	var deltaY = 0;
	var horzDiff = 0;
	var vertDiff = 0;
	var minLength = 39; // the shortest distance the user may swipe 72
	var swipeLength = 0;
	var swipeAngle = null;
	var swipeDirection = null;
	/* The 4 Touch Event Handlers
	   NOTE: the touchStart handler should also receive the ID of the triggering element
	   make sure its ID is passed in the event call placed in the element declaration, like:
	   <div id="picture-frame" ontouchstart="touchStart(event,'picture-frame');"  ontouchend="touchEnd(event);" ontouchmove="touchMove(event);" ontouchcancel="touchCancel(event);">
	function touchStart(event,passedName) {
		event.preventDefault();// disable the standard ability to select the touched object
		fingerCount = event.touches.length;// get the total number of fingers touching the screen
		if ( fingerCount == 1 ) {// check that only one finger was used
			// get the coordinates of the touch
			startX = event.touches[0].pageX;
			startY = event.touches[0].pageY;
			triggerElementID = passedName;// store the triggering element ID
		} else {
			touchCancel(event);// more than one finger touched so cancel
		}
	}
	function touchMove(event) {
		event.preventDefault();
		if ( event.touches.length == 1 ) {
			curX = event.touches[0].pageX;
			curY = event.touches[0].pageY;
		} else {
			touchCancel(event);
		}
	}
	function touchEnd(event) {
		event.preventDefault();
		// check to see if more than one finger was used and that there is an ending coordinate
		if ( fingerCount == 1 && curX != 0 ) {
			//length of the swipe and appropriate responses
			swipeLength = Math.round(Math.sqrt(Math.pow(curX - startX,2) + Math.pow(curY - startY,2)));
			if ( swipeLength >= minLength ) {
				caluculateAngle();
				determineSwipeDirection();
				processingRoutine();
				touchCancel(event); // reset the variables
			} else {
				touchCancel(event);
			}	
		} else {
			touchCancel(event);
		}
	}
	function touchCancel(event) {
		// reset the variables back to default values
		fingerCount = 0;
		startX = 0;
		startY = 0;
		curX = 0;
		curY = 0;
		deltaX = 0;
		deltaY = 0;
		horzDiff = 0;
		vertDiff = 0;
		swipeLength = 0;
		swipeAngle = null;
		swipeDirection = null;
		triggerElementID = null;
	}
	
	function caluculateAngle() {
		var X = startX-curX;
		var Y = curY-startY;
		var Z = Math.round(Math.sqrt(Math.pow(X,2)+Math.pow(Y,2))); //the distance - rounded - in pixels
		var r = Math.atan2(Y,X); //angle in radians (Cartesian system)
		swipeAngle = Math.round(r*180/Math.PI); //angle in degrees
		if ( swipeAngle < 0 ) { swipeAngle =  360 - Math.abs(swipeAngle); }
	}
	
	function determineSwipeDirection() {
		if ( (swipeAngle <= 45) && (swipeAngle >= 0) ) {
			swipeDirection = 'left';
		} else if ( (swipeAngle <= 360) && (swipeAngle >= 315) ) {
			swipeDirection = 'left';
		} else if ( (swipeAngle >= 135) && (swipeAngle <= 225) ) {
			swipeDirection = 'right';
		} else if ( (swipeAngle > 45) && (swipeAngle < 135) ) {
			swipeDirection = 'down';
		} else {
			swipeDirection = 'up';
		}
	}
	function processingRoutine() {
		var swipedElement = triggerElementID;
		if (swipeDirection=='left')
			$('body, html').scrollLeft(W);
		else if(swipeDirection=='right')
			slides.animate({ "left": slides.offset().left+W },300);
		else if( swipedElement == "")
			return;
	};	
	*/
	
	var W = window.innerWidth, H = window.innerHeight;
	
	$(".slide").on("swipeleft", function () {
		var right = parseInt($(this).attr("right"));
  		$('body, html').animate({scrollLeft: right*W}, 300);
	});
	
	$(".slide").on("swiperight", function () {
		var left = parseInt($(this).attr("left"));
  		$('body, html').animate({scrollLeft: left*W}, 300);
	});
	
}