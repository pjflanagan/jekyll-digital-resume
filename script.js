var banters = ["Now in a fun sized package.","Always watching.","Here for you wherever you go that has cell service or Wi-Fi.",
"Avoid social interaction here!","New look! Same great taste!","New or improved!","Viewer discretion is advised.",
"Sending your private information to the cloud since 1889.","One One Zero One One!"];

var userAgent = navigator.userAgent.toLowerCase();
var isiPhone = (userAgent.indexOf('iphone') != -1 || userAgent.indexOf('ipod') != -1) ? true : false;
clickEvent = isiPhone ? 'tap' : 'click';

window.onload = function(){
	var W = window.innerWidth, H = window.innerHeight;
	document.getElementById("banter").innerHTML = banters[Math.floor(Math.random()*banters.length)];

	/*POSITION BURGER*/
	var burger_holder_width = W/2-100;
	var burger_left = (W/2 + 100) + (burger_holder_width/2) - 30; 
				//Right point on logo + half of the holder width - burger_width
	$("#burger").css({ "left":burger_left });
	$("#title").css({"width":burger_left});
	close_menu();
	document.getElementById("cover").style.display = "none";
}

function show_menu(){
	document.getElementById("menu").style.display = "inline";
}

function close_menu(){
	document.getElementById("menu").style.display = "none";
}

//make a random image function and use that
function cycleImages(){
	//z index 5-7
	var active = $('#slideshow .active');
		var next = (active.next().length > 0) ? active.next() : $('#slideshow img:first');
    next.css('z-index',6);//move the next image up the pile
    active.fadeOut(2000,function(){//fade out the top image
		active.css('z-index',5).show().removeClass('active');
		//reset the z-index and unhide the image
    	next.css('z-index',7).addClass('active');
    	//make the next image the top one
		});
}
/*$(document).ready(function(){
	setInterval(cycleImages, 10000);
})*/