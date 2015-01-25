window.onload = function(){
	var H = window.innerHeight;
	var actions = true;

	var about = document.getElementById("s1")
	if( about.offsetHeight < about.scrollHeight){
		document.getElementById("p2").innerHTML = "";
	}
	if($("#xc").height() > 90){
    	document.getElementById("xc").innerHTML = "XC";
    	document.getElementById("tf").innerHTML = "T&F"
    }

	setTimeout(function(){
		$("#filler").css({
			"height":"100%"
		});
		$("#filler").animate({
			"margin-top":"-500px"
		},1000 );
	},1000);
	setTimeout(function(){
		$("#footer").animate({
			"bottom":0
		},300);
	},1700);
	setTimeout(function(){
		scrollTo(cSlide+1);
		cSlide++;
	},2500);

	var cSlide = 0;
	//scoll to slide command
	function scrollTo(slide){
		if(!actions)return;
		actions = false;
		//top offset of next slide
		var loc = (slide!=0) ? $('.slide[num="' + slide + '"]').offset().top : 0;

		//image
		if(slide==0||cSlide==0){
			$("#bg").css({
				"background-image":"none"
			});
		}
		else {
			var img_num = (cSlide<slide) ? cSlide : slide; //Math.floor($(document).scrollTop()/(H+750));
			$("#bg").css({
				"display":"inline",
				"background-image":"url('bg-" + img_num +".jpg')",
				"opacity":.5
			});
		}

		//calculate the amount of time to scroll for
		var time = 900 + Math.abs(100*(slide-cSlide));
		//animate
		$("body,html").animate({scrollTop: loc},time);
		if(slide!=0){
			$("#scroller").animate({
				"left": $('#footer table tr td[num="' + slide + '"]').offset().left
			},time);
		}
		setTimeout(function(){ actions = true; },time);
		return;
	}

	const SLIDES = 6; //exluding 0th
	document.addEventListener("keydown", function(e){
		if(!actions)return;
		var key = e.keyCode;
	   	if (cSlide<SLIDES && (key == 40 || key == 39)){//down|right
	    	scrollTo(cSlide+1);
	    	cSlide++;
	    }
		else if (cSlide>0 && (key == 38 || key == 37)){//up|left
			scrollTo(cSlide-1);
			cSlide--;
		}
	});

	var button = $("#footer table tr td");
	button.click(function(){
		if(!actions)return;
		var slide = $(this).attr("num");
		scrollTo(slide);
		cSlide = slide;
		setTimeout(function(){ actions = true; },time);
	});

	$("#scroll_link").click(function(){
		if(!actions)return;
		scrollTo(3);
		cSlide = 3;
		setTimeout(function(){ actions = true; },time);
	});

	$('body').bind('mousewheel', function(e){
    	if(e.originalEvent.wheelDelta /120 > 0) {
    		scrollTo(cSlide-1);
    		cSlide--;
    	}
    	else{
    		scrollTo(cSlide+1);
    		cSlide++;
    	}
    });

    function popup(){
    	actions = false;
    	$("#popup-back").css({
    		//"background":"rgba(0,0,0,.5)"
    		"display":"inline"
    	},500);
    	$("#popup").css({
    		"display":"inline"
    	});
    }

    function close_popup(){
    	actions = true;
    	$("#popup-back").css({
    		//"background":"rgba(0,0,0,.5)"
    		"display":"none"
    	},500);
    	$("#popup").css({
    		"display":"none"
    	});
    }

    $("#faq").click(function(){
    	$("#pop-content").load("faq.html", popup); 
    });

    $("#popup-back").click(function(){
    	close_popup();
    });
}
