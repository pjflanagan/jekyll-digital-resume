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
		var time = Math.abs(1000*(slide-cSlide));
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










	/*
	$(document).ready(function() {
	    loadLatestTweet(1, "mrun");
	});
	String.prototype.parseURL = function() {
	    return this.replace(/[A-Za-z]+:\/\/[A-Za-z0-9-_]+\.[A-Za-z0-9-_:%&~\?\/.=]+/g, function(url) {
	        return url.link(url);
	    });
	};
	String.prototype.parseUsername = function() {
	    return this.replace(/[@]+[A-Za-z0-9-_]+/g, function(u) {
	        var username = u.replace("@","")
	        return u.link("http://twitter.com/"+username);
	    });
	};
	String.prototype.parseHashtag = function() {
	    return this.replace(/[#]+[A-Za-z0-9-_]+/g, function(t) {
	        var tag = t.replace("#","%23")
	        return t.link("http://search.twitter.com/search?q="+tag);
	    });
	};
	function parseDate(str) {
	    var v=str.split(' ');
	    return new Date(Date.parse(v[1]+" "+v[2]+", "+v[5]+" "+v[3]+" UTC"));
	}
	 
	function loadLatestTweet(numTweets, un){
	    var _url = 'https://api.twitter.com/1/statuses/user_timeline/' + un + '.json?callback=?&count='+numTweets+'&include_rts=1';
	    $.getJSON(_url,function(data){
	    for(var i = 0; i< data.length; i++){
	            var tweet = data[i].text;
	            var created = parseDate(data[i].created_at);
	            var createdDate = created.getDate()+'-'+(created.getMonth()+1)+'-'+created.getFullYear()+' at '+created.getHours()+':'+created.getMinutes();
	            //Uncomment below line to see the user Image
				//tweet = "<img src='"+data[i].user.profile_image_url+"' />";
				tweet = tweet.parseURL().parseUsername().parseHashtag();
	            //Uncomment below line to displ tweet date.
				//tweet += '<div class="tweeter-info"><p class="right">'+createdDate+'</p></div>'
	            $("#twitter-feed").append('<p>'+tweet+'</p>');
	        }
	    });
	}
	*/
}