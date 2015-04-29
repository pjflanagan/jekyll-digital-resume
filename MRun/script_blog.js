/*var banters = ["One One Zero One One, ya know?","Critically Acclaimed*",
	"West of Philadelphia, not born, but raised.", "New or Improved!",
	"The best thing until sliced bread.","New look! Same great taste!",
	"I do like jelly beans","The hyper-est text in the markup language dictionary.",
	"Kid tested, mother approved."]*/
window.onload = function(){
	var W = window.innerWidth, H = window.innerHeight;
	document.getElementById("banter").innerHTML = banters[Math.floor(Math.random()*banters.length)];
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
	document.getElementById("cover").style.display = "inline";
	return;
}

function close_menu(){
	document.getElementById("menu").style.top = menu_top +"px";
		//make this pixels and for the window height not doc %
	if(menu_top <= -MENU_HEIGHT) return;
	menu_top -= 10;
	play = setTimeout(close_menu,5);
	menuIsOpen = false;
	document.getElementById("cover").style.display = "none";
	return;
}

document.addEventListener("scroll", function(){
	var doc = document.getElementById("content");
	var offset = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);
	if(menuIsOpen) close_menu();
	if(offset<125){
		document.getElementById("slideshow").setAttribute("style","-webkit-filter:blur(" + (offset/30) + "px)");
		document.getElementById("slideshow").style.height = 200-offset +"px";
		document.getElementById("slide-title").style.opacity = 0;
		document.getElementById("logo").style.opacity = 1;

		document.getElementById("burger").style.position = "absolute";
		document.getElementById("burger").style.marginTop = "155px";

		$("#slideshow img").css({"margin-top":-220-offset/2});

	}
	else{
		document.getElementById("slideshow").setAttribute("style","-webkit-filter:blur(" + (125/30) + "px)"); //.setAttribute must go first
		document.getElementById("slideshow").style.height = 200-125 +"px";
		document.getElementById("slide-title").style.opacity = (offset-125)/200;
		document.getElementById("logo").style.opacity = 1-(offset-125)/75;

		//BURGER
		document.getElementById("burger").style.position = "fixed";
		document.getElementById("burger").style.marginTop = "28px"; //marginTop-offset(125)
	
		$("#slideshow img").css({"margin-top":-220-125/2});
	}
},false);

function cycleImages(){
	//z index 5-7
	var $active = $('#slideshow .active');
		var $next = ($active.next().length > 0) ? $active.next() : $('#slideshow img:first');
    $next.css('z-index',6);//move the next image up the pile
    $active.fadeOut(1500,function(){//fade out the top image
		$active.css('z-index',5).show().removeClass('active');
		//reset the z-index and unhide the image
    	$next.css('z-index',7).addClass('active');
    	//make the next image the top one
		});
}
$(document).ready(function(){
	setInterval('cycleImages()', 5000);
})
