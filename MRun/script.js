window.onload = function(){

//-------------------------------------------------------------------------
//								SET UP
//-------------------------------------------------------------------------
	
	var H = window.innerHeight, W = window.innerWidth;
	var actions = false;

	//SIZING
	if ((W<940 && H<1000) || isMobile()) { //### = width of pixels in my screenshot
		window.location = "m.html";
	}
	function isMobile() {
	  var check = false;
	  (function(a,b){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera);
	  return check;
	}

	var about = document.getElementById("s1")
	if( about.offsetHeight < about.scrollHeight){
		document.getElementById("p2").innerHTML = "";
	}
	if($("#xc").height() > 90){
    	document.getElementById("xc").innerHTML = "XC";
    	document.getElementById("tf").innerHTML = "T&F"
    }


//-------------------------------------------------------------------------
//								LOADING
//-------------------------------------------------------------------------
	setTimeout(function(){
		$("#loading").animate({
			"bottom":-40
		},300);
		$("#filler").css({
			"height":"100%"
		});
		$("#filler").animate({
			"margin-top":"-500px"
		},1000 );
	},400);
	setTimeout(function(){
		$("#footer").animate({
			"bottom":0
		},300);
		document.getElementById("loading").style.display = "none";
	},800);
	setTimeout(function(){
		actions = true; enable_scroll();
		scrollTo(cSlide+1);
		cSlide++;
	},1000);
	setTimeout(function(){
		setBackground(1);
	},2000)


//-------------------------------------------------------------------------
//								BACKGROUND
//-------------------------------------------------------------------------
	const IMAGES = 15;
	function changeBackground(slide){
		if(cSlide==0||slide==0){
			$("#bg").css({
				"background-image":"none"
			});
		}
		else {
			var img_num = Math.floor(Math.random()*IMAGES)+1;//(img_num==IMAGES) ? 1 : img_num+1;  
			setBackground(img_num);
		}
	}

	function setBackground(img_num){
		$("#bg").css({
				"display":"inline",
				"background-image":"url('bg/bg-" + img_num +".jpg')",
				"opacity":.74
			});
	}


//-------------------------------------------------------------------------
//								SCROLLING
//-------------------------------------------------------------------------

	var cSlide = 0;

	function scrollTo(slide){
		if(!actions)return;
		actions = false;
		disable_scroll();

		//top offset of next slide
		var loc = (slide!=0) ? $('.slide[num="' + slide + '"]').offset().top : 0;

		
		//calculate the amount of time to scroll for
		var time = 900 + Math.abs(100*(slide-cSlide));
		//animate
		$("body,html").animate({scrollTop: loc},time);
		setScroller(slide,time);
		setTimeout(function(){ actions = true; enable_scroll(); enable_scroll(); },time);
		return;
	}

	function setScroller(slide,time){
		if(time==null)time = 400;
		if(slide!=0){
			$("#scroller").animate({
				"left": $('#footer table tr td[num="' + slide + '"]').offset().left
			},time);
		}
	}

//-------------------------------------------------------------------------
//							SCROLL LISTENERS
//-------------------------------------------------------------------------
	const SLIDES = 6; //exluding 0th

	/*$('body').bind('mousewheel', function(e){
		if(!actions)return;
    	if(cSlide>0 && e.originalEvent.wheelDelta /120 > 0) {
    		scrollTo(cSlide-1);
    		cSlide--;
    	}
    	else if(cSlide<SLIDES){
    		scrollTo(cSlide+1);
    		cSlide++;
    	}
    	//actions = true; enable_scroll();
    	setTimeout(function(){ actions = true; enable_scroll(); },1000);
    	return;
    });

	document.addEventListener("scroll",function(){
		//change picture when in between slides
	});
	*/

	document.addEventListener("keydown", function(e){
		if(!actions)return;
		var key = e.keyCode;
	   	if (cSlide<SLIDES && (key == 39)){//down|right key == 40 || 
	    	scrollTo(cSlide+1);
	    	cSlide++;
	    }
		else if (cSlide>0 && (key == 37)){//up|left key == 38 || 
			scrollTo(cSlide-1);
			cSlide--;
		}

		changeBackground(slide);
		return;
	});

	var button = $("#footer table tr td");
	button.click(function(){
		if(!actions)return;
		var slide = $(this).attr("num");
		scrollTo(slide);
		cSlide = slide;

		changeBackground(slide);
		setTimeout(function(){ actions = true; enable_scroll(); },time);
		return;
	});

	$("#scroll_link").click(function(){
		if(!actions)return;
		scrollTo(3);
		cSlide = 3;

		changeBackground(slide);
		setTimeout(function(){ actions = true; enable_scroll(); },time);
	});

	$("#scroll_link_2").click(function(){
		if(!actions)return;
		scrollTo(4);
		cSlide = 3;

		changeBackground(slide);
		setTimeout(function(){ actions = true; enable_scroll(); },time);
	});

	$("#results").click(function(){
		if(!actions)return;
		scrollTo(4);
		cSlide = 4;

		changeBackground(slide);
		setTimeout(function(){ actions = true; enable_scroll(); },time);
	});

//-------------------------------------------------------------------------
//							SNAP SCROLLING
//-------------------------------------------------------------------------
setInterval(function(){
	if(!actions)return;
	var top = (window.pageYOffset || document.scrollTop)  - (document.clientTop || 0);
	for(var i = 1; i<=SLIDES; i++){
		var slideTop =  $('.slide[num="' + i + '"]').offset().top;
		var diff = Math.abs(top-slideTop);
		if(diff==0 && i!=SLIDES)return;
		if(diff<H/2){
			scrollTo(i);
			setTimeout(function(){
				changeBackground();
				cSlide = i;
			},1000)
			return;
		}
	}
},2000);

//-------------------------------------------------------------------------
//								POP UP
//-------------------------------------------------------------------------
    function popup(){
    	actions = false;
    	disable_scroll();
    	$("#popup-back").css({
    		"pointer-events":"auto"
    	});
    	$("#popup-back").animate({
    		"opacity":".95"
    	},500);
    	$("#popup").animate({
    		"top":0
    		//"display":"inline"
    	},500);
    }

    function close_popup(){
    	actions = true; enable_scroll();
    	enable_scroll();
    	$("#popup-back").css({
    		"pointer-events":"none"
    	});
    	$("#popup-back").animate({
    		"opacity":"0"
    	},500);
    	$("#popup").animate({
    		"top":"110%"
    		//"display":"inline"
    	},500);
    }

    $(".faq").click(function(){
    	 document.getElementById("pop-content").innerHTML = faq_code; //put all code directly in these and make a popup folder
    	popup();
    });

    $("#results_xc").click(function(){
    	 document.getElementById("pop-content").innerHTML = results_xc_code;
    	popup();
    });

    $("#results_tf").click(function(){
    	 document.getElementById("pop-content").innerHTML = results_tf_code;
    	popup();
    });

    $("#schedule_xc").click(function(){
    	 document.getElementById("pop-content").innerHTML = schedule_xc_code;
    	popup();
    });

    $("#schedule_tf").click(function(){
    	 document.getElementById("pop-content").innerHTML = schedule_tf_code;
    	popup();
    });

    $("#newsletter").click(function(){
    	document.getElementById("pop-content").innerHTML = news_code;
       	popup();
    });

    $("#calendar").click(function(){
    	document.getElementById("pop-content").innerHTML = calendar_code;
    	popup();
    });

    $("#pace").click(function(){
    	document.getElementById("pop-content").innerHTML = pace_code;
    	popup();
    });

    $("#swag").click(function(){
    	document.getElementById("pop-content").innerHTML = "";
    	popup();
    });


    $("#relay").click(function(){
    	document.getElementById("pop-content").innerHTML = relay;
    	popup();
    });

    $("#triumph").click(function(){
    	document.getElementById("pop-content").innerHTML = triumph;
    	popup();
    });

    $("#shoe").click(function(){
    	document.getElementById("pop-content").innerHTML = shoe;
    	popup();
    });

    $(".popup-close").click(function(){
    	document.getElementById("pop-content").innerHTML = "";
    	close_popup();
    });


//-------------------------------------------------------------------------
//								OFFICERS
//-------------------------------------------------------------------------
    var officer = $("#s3 table tr td");
	officer.on("click",function(){
		var imgSelected = $(this).css("background-image");
		var imgName = $(this).css('background-image').replace(/^url|[\(\)]/g, '');
		imgName = imgName.slice(imgName.lastIndexOf('/')+1, imgName.length-4);
		var imgOpen = $("#officer-open").css("background-image");
		$(this).css({ "background-image":imgOpen });
		$("#officer-open").css({ "background-image":imgSelected });
		document.getElementById("officer-title").innerHTML = imgName.replace(/_/g, ' ');

		for(var i = 0; i<officer_data.length; i++){
			if(officer_data[i]==imgName){
				document.getElementById("officer-name").innerHTML = officer_data[i+1];
				document.getElementById("officer-email").innerHTML = officer_data[i+2];
				document.getElementById("officer-email-link").href="mailto:" + officer_data[i+2]; 
				document.getElementById("bio").innerHTML = officer_data[i+3];
				return;
			}
		}
	});
}


//-------------------------------------------------------------------------
//								innerHTML
//-------------------------------------------------------------------------

var faq_code = '<iframe src="faq.html" width="800" height="100%"></iframe>';
var results_xc_code = '<iframe src="results_xc.html" width="800" height="100%"></iframe>';
var results_tf_code = '<iframe src="results_tf.html" width="800" height="100%"></iframe>';
var schedule_xc_code = '<iframe src="schedule_xc.html" width="800" height="100%"></iframe>';
var schedule_tf_code = '<iframe src="schedule_tf.html" width="800" height="100%"></iframe>';
var relay = '<iframe src="relay.html" width="800" height="100%"></iframe>';
var triumph = '<iframe src="triumph.html" width="800" height="100%"></iframe>';
var shoe = '<iframe src="shoe.html" width="800" height="100%"></iframe>';
var calendar_code = '<div class="headline">CALENDAR</div><div class="subline">any time, any place, any function</div><br /><br /><br /><iframe src="https://www.google.com/calendar/embed?showTitle=0&amp;showNav=0&amp;showDate=0&amp;showPrint=0&amp;showCalendars=0&amp;mode=MONTH&amp;height=400&amp;wkst=2&amp;bgcolor=%23FFFFFF&amp;src=mrunclub%40gmail.com&amp;color=%232952A3&amp;ctz=America%2FNew_York" style=" border-width:0 " width="800" height="480" frameborder="0" scrolling="no"></iframe>';
var news_code = '<iframe src="news.pdf" width="800" height="100%"></iframe>';
var pace_code = '<iframe src="http://www.pjflanagan.me/PaceCalculator/index.html" width="800" height="100%"></iframe>';

var officer_data = [
	"president" , "John Holms", "mrunpresident@umich.edu", "Hello! I'm a senior studying Movement Science and do a little physics on the side. I'm always looking to get a good run in and make some new friends.  As President for the 2015-2016 school year, I'll be making sure that the club operates smoothly and making sure your MRun experience is as good as it possibly can be. While MRun is first and foremost a running club, we also take part in community service and hold social events.  MRun has something to offer for everyone so if you've got any questions about the club or just wanna talk about running, let me know!",
	"vice_president", "Cassie Hoffman", "____", "",
	"marketing", "Jenn Smith", "____", "",
	"swag", "Alex Choi", "mrun.swag@umich.edu", "Hey, Everyone! My Name is Alex and I'm your new S.W.A.G (Sportswear Apparel and Gear) chair. I love Mrun, running, and coffee -but with lots of  cream and sugar. I'm a junior studying biochemistry and I'm super excited to get you guys wearing some cool new MRun gear. If you ever want to boost your S.W.A.G levels or have comments/suggestions for gear and apparel just let me know!",
	"travel", "Connor Foley", "confo@umich.edu", "Hey everyone! I'm Connor Foley, and I'll be your Travel Coordinator for the 2014-2015 year. This means I'm responsible for getting you to and from meets, so if you have any questions about that, let me know!  I'm from Maryland, and I've been a huge U of M fan my whole life. I'm very into sports, particularly football, baseball, and basketball (ball is life).  Oh and I guess running is purty cool too...  If you have any questions about anything, from travel to running to how to hang out with MRun even more than you ever wanted, feel free to email me at confo@umich.edu or just come up and talk to me at practice one day. Can't wait to meet you!",
	"treasurer", "Robert Rose", "____", "",
	"distance_training", "Colleen Conroy", "mruntrainingchairs@umich.edu", "Hi! I'm Colleen Conroy, and I am so excited to be the distance training chair for the coming seasons of running! I'm a junior in the School of Kinesiology majoring in Movement Science who loves being outside, hanging out with friends, anything to do with running, and all things MRun! Part of my job is creating workouts, picking runs, and helping schedule races. I look forward to an amazing season full of hard work, fast times, and most importantly fun with the the best club on campus!! If you have any questions, comments, or suggestions about running, new routes, or workouts, feel free to contact me:)",
	"sprint_training", "Tyler Kristoff", "mruntrainingchairs@umich.edu", "Hey all! My name is Tyler Kristoff and I am a pre-med senior in the School of Kinesiology majoring in movement science with a minor in biochemistry. As the Sprint/Field Training Chair, I am the one in charge of planning and coordinating workouts for all those runners who don't like running multiple laps around the track, as well as scheduling the track meets for the Winter. If you like jumping, throwing, running in the fast lane, random dancing, bass drops, or having a great time while running then you may just be a sprinter. I'm excited for the coming year and looking forward to meeting a bunch of new sprinterz.",
	"social_chair", "Taylor Flynn", "mrunsocialchairs@umich.edu", "Hi friends!! My name is Taylor, and I am a senior in the School of Nursing. I am beyond excited to be one of your social chairs this year!! Ross and I will be planning tons of fun events over the year, like ice cream socials, a cider mill run, and a trip to a corn maze, all because MRun bonding is the best! :) I cannot wait to meet each and every one of you! If you ever want to chat about baking, running, Jane Austen novels, or just how your day is going, I'm your girl! <3",
	"social_chair_", "Ross Pendergast", "mrunsocialchairs@umich.edu", "What's up kids! I'm Ross and I can't wait to be one of your social chairs this year! I'm a sophomore from DC majoring in Political Science and minoring in Applied Statistics and History. My favorite event in track is probably the mile, but I also enjoy running the 4x100 in Hokas. MRun has meant so much to my college experience, and I'm pumped for what this next year has in store! <br/>Taylor and I are going to be putting on awesome events to promote inter club bonding! Look forward to the cider mill run, the holiday party, and MRun Prom. Let us know if you have any suggestions, as we want to make sure you're having the most fun possible!",
	"club_sports", "Matt LeDuc", "____", "",
	"service", "Emily Furuichi", "furuichi@umich.edu", "Hiii! My name is Fooch, but a few people call me Emily. My initials spell ELF and I am coincidentally short, so that's something. I am a senior studying movement science in the School of Kinesiology. Some of my favorite things include playing soccer, hanging out with friends, Starbucks, running, MRun, half marathons, and puppies. As community service chair, I will provide volunteering opportunities through multiple organizations such as Girls on the Run, MyTEAM TRIUMPH, and Relay for Life. Community service is just one aspect that makes our club so awesome and well rounded, so I encourage everyone to get involved. If you have any questions or suggestions, feel free to email me. The previous service chair once said (while quoting someone else) \"a runner's heart grows strong from training, but an MRunner\'s heart also grows big from giving back.\"<3",
	"webmaster","Peter Flanagan", "mrun-webmaster@umich.edu", "Hi everyone, I'm Peter Flanagan and if you've clicked around this far on the website well, congratulations and thank you! I'm a sophomore studying Computer Science and Engineering and I'm also your MRun Webmaster. I've been running since 7th grade and found that it was the best experience of my life and I never wanted to let go of that, so MRun was the place for me, as it probably is for you too!"
];



/*
function extractUrl(input){
		// remove quotes and wrapping url()
		return input.replace(/"/g,"").replace(/url\(|\)$/ig, "");
	}

*/


//-------------------------------------------------------------------------
//						DISSABLE AND ENABLE SCROLLING
//-------------------------------------------------------------------------

var keys = [37, 38, 39, 40];

function preventDefault(e) {
  e = e || window.event;
  if (e.preventDefault)
      e.preventDefault();
  e.returnValue = false;  
}

function keydown(e) {
    for (var i = keys.length; i--;) {
        if (e.keyCode === keys[i]) {
            preventDefault(e);
            return;
        }
    }
}

function wheel(e) {
  preventDefault(e);
}

function disable_scroll() {
  if (window.addEventListener) {
      window.addEventListener('DOMMouseScroll', wheel, false);
  }
  window.onmousewheel = document.onmousewheel = wheel;
  document.onkeydown = keydown;
}

function enable_scroll() {
    if (window.removeEventListener) {
        window.removeEventListener('DOMMouseScroll', wheel, false);
    }
    window.onmousewheel = document.onmousewheel = document.onkeydown = null;  
}