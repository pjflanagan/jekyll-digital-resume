window.onload = function(){
	var H = window.innerHeight;
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
		var time = Math.abs(1000*(slide-cSlide));
		//animate
		$("body,html").animate({scrollTop: loc},time);
		if(slide!=0){
			$("#scroller").animate({
				"left": $('#footer table tr td[num="' + slide + '"]').offset().left
			},time);
		}
	}

	const SLIDES = 6; //exluding 0th
	document.addEventListener("keydown", function(e){
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

	//Find links with class button
	var button = $("#footer table tr td");
	//when a button is clicked
	button.click(function(){
		//get new slide number
		var slide = $(this).attr("num");
		scrollTo(slide);
		cSlide = slide;
		/*animate();*/	
	});

	/*function wheel(e) {
		preventDefault(e);
	}

	function disable_scroll() {
		if (window.addEventListener) {
	    	window.addEventListener('DOMMouseScroll', wheel, false);
		}
		window.onmousewheel = document.onmousewheel = wheel;
		document.onkeydown = keydown;
	}*/
}