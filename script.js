var banters = ["Now in a fun sized package.","Always watching.","Here for you wherever you go that has cell service or Wi-Fi.",
"Avoid social interaction here!","New look! Same great taste!","New or improved!","Viewer discretion is advised.",
"Sending your private information to the cloud since 1889.","One One Zero One One!"];

window.onload = function(){
	var W = window.innerWidth, H = window.innerHeight;
	document.getElementById("banter").innerHTML = banters[Math.floor(Math.random()*banters.length)];

	/*POSITION BURGER*/
	var burger_holder_width = W/2-100;
	var burger_left = (W/2 + 100) + (burger_holder_width/2) - 30; 
				//Right point on logo + half of the holder width - burger_width
	$("#burger").css({ "left":burger_left });
	$("#title").css({"width":burger_left});


}

//add swiping up and down
const MENU_HEIGHT = 387; //(height + padding)*7 + border-bottom + border radius <-remeasure
var menu_top = -MENU_HEIGHT;
var menuIsOpen = false;
function show_menu(){
	document.getElementById("menu").style.top = menu_top +"px";
		//make this pixels and for the window height not doc %
	if(menu_top >= -1){
		document.getElementById("menu").style.top = 0 +"px";
		return;
	}
	menu_top += 10;
	play = setTimeout(show_menu,5);
	menuIsOpen = true;
	return;
}

function close_menu(){
	document.getElementById("menu").style.top = menu_top +"px";
		//make this pixels and for the window height not doc %
	if(menu_top <= -MENU_HEIGHT) return;
	menu_top -= 10;
	play = setTimeout(close_menu,5);
	menuIsOpen = false;
	return;
}

$("#menu").on("swipeup",function(){
	close_menu();
});

document.addEventListener("scroll", function(){
	var doc = document.getElementById("content");
	var offset = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);
	if(menuIsOpen) close_menu();

	if(offset<300){ //125
		document.getElementById("slideshow").setAttribute("style","-webkit-filter:blur(" + (offset/30) + "px)");
		//document.getElementById("slideshow").style.height = 200-offset +"px";
		//document.getElementById("slide-title").style.opacity = 0;
		//document.getElementById("logo").style.opacity = 1;

		//document.getElementById("burger").style.position = "absolute";
		//document.getElementById("burger").style.marginTop = "155px";

	}
	else{
		document.getElementById("slideshow").setAttribute("style","-webkit-filter:blur(" + (300/30) + "px)"); //(125/30) .setAttribute must go first
		//document.getElementById("slideshow").style.height = 200-125 +"px";
		//document.getElementById("slide-title").style.opacity = (offset-125)/200;
		//document.getElementById("logo").style.opacity = 1-(offset-125)/75;

		//BURGER
		//document.getElementById("burger").style.position = "fixed";
		//document.getElementById("burger").style.marginTop = "28px"; //marginTop-offset(125)
	}
},false);

function cycleImages(){
	//z index 5-7
	var $active = $('#slideshow .active');
		var $next = ($active.next().length > 0) ? $active.next() : $('#slideshow img:first');
    $next.css('z-index',6);//move the next image up the pile
    $active.fadeOut(2000,function(){//fade out the top image
		$active.css('z-index',5).show().removeClass('active');
		//reset the z-index and unhide the image
    	$next.css('z-index',7).addClass('active');
    	//make the next image the top one
		});
}
$(document).ready(function(){
	setInterval(cycleImages, 10000);
})