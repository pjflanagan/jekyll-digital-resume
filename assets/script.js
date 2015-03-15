window.onload = function(){

	var phrases = ["west of philadelphia, not born but raised",
		"the best thing until sliced bread","new or improved",
		"easy. breezy. beautiful. beneful.","inverse trig is my arcnemesis",
		"two words: two words","the programmer formerly known as Prince",
		"hokey pokey addict until I turned myself around","the classiest clown"];
	document.getElementById("phrase").innerHTML = phrases[rando(0,phrases.length)]
	
	var mobile = isMobile();
	function isMobile() {
	  var check = false;
	  (function(a,b){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera);
	  return check;
	}

	var canvas = document.getElementById("pix");
	var ctx = canvas.getContext("2d");
	
	var W = window.innerWidth, H = window.innerHeight;
	canvas.width = W;
	canvas.height = H;

	if(W<=800){
		document.getElementById("name").style.fontSize = "36px";
		document.getElementById("name").style.marginTop = "70px";
	}
	
	var wid = (!mobile) ? 120 : 240,//240 or 70
		wid2 = wid/2;
		
	var hig = wid/2,
		hig2 = hig/2;
	
	function rando(min,max){
		return Math.floor(Math.random()*max)+min;	
	}
	
	function randomColor() {
		var rm = 255,
			gm = 255,
			bm = 255;
		var r = Math.round(Math.random()*rm);
		var g = Math.round(Math.random()*gm);
		var b = Math.round(Math.random()*bm);
		var a = (Math.random()*.3)+.4;
		var rgba = "rgba("+r+", "+g+", "+b+", "+a+")";
		return rgba;
	}

	var pixels = [];
	function setup(){
		var yGap = hig,
			xGap = wid + wid2; //50 gap
		var x = 0, y = hig*4;
		var i = 0;
		while(y<=10*H/11){//3*H/4){
			if(rando(0,8)>0)
				var cy = y+rando(-wid,wid);
				//cy = y;
				//cy -= (H-y)/10;
				//cy += (W-x)/10;
				pixels.push(new drawPixel(x+rando(wid/10,wid/2),H,randomColor(),cy));
				//pixels.push(new drawPixel(x,y+rando(-wid,wid),rainbowColor(y-hig*4,H),cy));
				//pixels.push(new drawPixel(x,y+rando(-wid,wid),rainbowColor(x,W),cy));
			x+=xGap;
			if(x>W+xGap){
				y+=yGap;
				if(i%2==0) x = wid2 + 25; //50/2
				else x = 0;
				i++;
			}
		}
	}
	
	function drawPixel(x,y,c,init){
		this.y = y;
		this.x = x;
		this.initY = init;
		this.c = c; //color
		this.d = rando(2,4);//rando((wid/10)/8,(wid/10)/6);//rate of change
		this.dir = (rando(1,2)==1) ? -1 : 1;
		this.goToY = y + this.dir*rando(wid2,wid);
		if(this.goToY < hig*3 || this.goToY > H){
			this.dir*=-1;
			this.goToY = y + this.dir*rando(wid2,wid);
		}
		
		//Top Diamond
		ctx.beginPath();
		ctx.moveTo(x,y);
		ctx.lineTo(x+wid2 , y+hig2);
		ctx.lineTo(x , y+hig);
		ctx.lineTo(x-wid2, y+hig2);
		ctx.fillStyle = "#555555";
		ctx.fill();
		ctx.closePath();
		
		//Left Side
		ctx.beginPath();
    	ctx.moveTo(x-wid2 , y+hig2);
		ctx.lineTo(x , y+hig);
		ctx.lineTo(x , y+hig+H);
		ctx.lineTo(x-wid2, y+H+hig2);
		ctx.lineTo(x-wid2, y+hig);
		ctx.fillStyle = "#444444";
		ctx.fill();
		ctx.closePath();
		
		//Right Side
		ctx.beginPath();
    	ctx.moveTo(x+wid2 , y+hig2);
		ctx.lineTo(x , y+hig);
		ctx.lineTo(x , y+hig+H);
		ctx.lineTo(x+wid2, y+H+hig2);
		ctx.lineTo(x+wid2, y+hig);
		ctx.fillStyle = "#222222";
		ctx.fill();
		ctx.closePath();
		
		//Color;
		ctx.beginPath();
		ctx.moveTo(x,y);
		ctx.lineTo(x+wid2 , y+hig2);
		//ctx.lineTo(x , y+hig);
		//ctx.lineTo(x-wid2, y+hig2);
		ctx.lineTo(x+wid2, y+hig2+H);
		ctx.lineTo(x, y+hig+H);
		ctx.lineTo(x-wid2, y+hig2+H);
		ctx.lineTo(x-wid2, y+hig2);
		ctx.lineTo(x,y);
		ctx.fillStyle = c;
		ctx.fill();
		ctx.closePath();
		return false;
	}
	
	//return { x: px, y: py };
	
	function drawBackground(){
		ctx.rect(0,0,W,H);
		ctx.fillStyle = "#1c1c1c";
		ctx.fill();
	}
	
	function animate(){
		drawBackground();
		//drawGround();
		var re = (rando(1,2)>1) ? false : true;
		for(var i = 0; i<pixels.length;i++){
			p = pixels[i];
			if(p.y>=p.goToY-10 && p.y<p.goToY+10){
				p.dir*=-1;
				//in not reset goToY, change to random
				if(!re) {
					p.goToY = p.y + p.dir*rando(wid2,wid);
				}
				//if reset and direction is correct, go to default
				
				else if((p.dir==-1 && p.initY < p.y) || (p.dir==1 && p.initY > p.y)){
					p.goToY = p.initY;
				}
				//if resent and direction is worng, go to default after direction change
				else {
					p.dir*= -1;
					p.goToY = p.initY;
				}
				
				//make sure goToY is in range
				if(p.goToY < hig*3 || p.goToY > H){
					p.dir=1;
					p.goToY = y + p.dir*rando(wid2,wid);
				}
				else if(p.goToY < 0 || p.y < hig*3){
					p.dir=1;
					p.goToY = H/4;
				}
			}
			p.y += p.d*p.dir;
			drawPixel(p.x , p.y , p.c, p.initY);
			//drawPixel(p.x,p.y,rainbowColor(p.y-hig*4,H),p.init);
		}
	}
	//MAIN
	setup();
	if(!mobile){
		setInterval(animate,32);
		document.addEventListener("scroll", function(){
			var top = $(document).scrollTop();
			var head = document.getElementById("head-shot");
			head.style.opacity = 1-top/H;
			head.style.width = 300-(top*10)/H;
			head.style.marginLeft = -(300-(top*10)/H)/2;
			document.getElementById("pix").style.opacity = 1-top/H;
		},false);
	}
	else {
		document.getElementById("pix").style.position = "absolute";
		document.getElementById("head-shot").style.position = "absolute";
		document.getElementById("name").style.position = "absolute";
		document.getElementById("sub-title").style.position = "absolute";
		document.getElementById("scroll-prompt").style.position = "absolute";
	}



		/*function scrollTo(id){
		if(id=="top")loc = 0;
		else loc = $("#"+id).offset().top;

		$("body,html").animate({scrollTop: loc},200);
		//setTimeout(function(){ actions = true; },time);
		return;
	}

	$('body').bind('mousewheel', function(e){
    	if(e.originalEvent.wheelDelta /120 > 0 && offset()<H) {
    		scrollTo("top");
    	}
    	else if(offset()<H){ //down
    		scrollTo("content");
    	}
    	else if(offset()>=H) {
    		e.default;
    	}
    	return;
    });*/

	//$("#scroll-prompt").click(function(){
	//	scrollTo("content");
	//});
}

