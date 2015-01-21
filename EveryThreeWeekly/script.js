var banters = ["Now in a fun sized package.","Always watching.","Here for you wherever you go that has cell service or Wi-Fi.",
"Avoid social interaction here!","New look! Same great taste!","New or improved!","Viewer discretion is advised.",
"Sending your private information to the cloud since 1889.","One One Zero One One!"];

var userAgent = navigator.userAgent.toLowerCase();
var isiPhone = (userAgent.indexOf('iphone') != -1 || userAgent.indexOf('ipod') != -1) ? true : false;
clickEvent = isiPhone ? 'tap' : 'click';

window.onload = function(){
	var W = window.innerWidth;
	document.getElementById("banter").innerHTML = banters[Math.floor(Math.random()*banters.length)];
	var burger_holder_width = W/2-100;
	var burger_left = (W/2 + 100) + (burger_holder_width/2) - 30; 
	$("#burger").css({ "left":burger_left });
	$("#title").css({"width":burger_left});
	document.getElementById("slideshow").innerHTML = '<img src="header-' + Math.round(Math.random()*4) + '.png" />';
	close_menu();
	document.getElementById("cover").style.display = "none";
}

function show_menu(){ document.getElementById("menu").style.display = "inline"; }
function close_menu(){ document.getElementById("menu").style.display = "none"; }