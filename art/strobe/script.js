//events
/*document.addEventListener("keydown", function(e){
	if(e.keyCode==40){ //darr
		nextSong = (nextSong==library.length-1) ? 0 : nextSong+1
	}
	else if(e.keyCode==38){ //uarr
		nextSong = (nextSong==0) ? library.length-1 : nextSong-1;
	}
	else if(e.keyCode==37 && isPlaying){ //larr
		pause();
	}
	else if(e.keyCode==39 && !isPlaying){ //rarr
		play();
	}
	else if(e.keyCode==13 && currentSong!=nextSong){ //return
			pause();
			currentSong = nextSong;
			makeMenu();
			setSong(currentSong);//exits loop immediatley when reached
	}
	else if(e.keyCode==32){//space
		if(isPlaying) pause(); 
		else if(!isPlaying) play(); 
	}
	else {
		return; //if it isn't a functional key
				//leave the function without displaying
	}
	makeMenu();
	
}, false);*/
document.addEventListener("click", function(){
	if(isPlaying) pause();
	else play();
},false);

//menu
function makeMenu(){
	song_min1 = (nextSong==0) ? songStr(library.length-1) : songStr(nextSong-1);
	song = songStr(nextSong);
	song_plus1 = (nextSong==library.length-1) ? songStr(0) : songStr(nextSong+1);
	
	next_min1.innerHTML = song_min1;
	next.innerHTML = song;
	next_plus1.innerHTML = song_plus1;
	
	if(currentSong==nextSong && isPlaying)
		next.style.background = "rgba(255, 255, 255, .2)";
	else
		next.style.background = "rgba(255, 255, 255, .05)";
}

function songStr(num){
	if(num==currentSong)
		return "<span style='font-weight:bold;'>" +library[num].substring(0,library[num].length-4) +"<span>";
	return library[num].substring(0,library[num].length-4);
}

function displayOverlay(disp){
	overlay = document.getElementById("overlay");
	if(disp) overlay.style.opacity = 1;
	else overlay.style.opacity = 0;
}

//audio
function setSong(songNum){
	audio = document.getElementById("audio");
	audio.removeAttribute("src");
	audio.setAttribute("src", library[songNum]);
	
	currentSong = songNum;
	
	source =  audioCtx.createMediaElementSource(audio);
	source.connect(analyser);
	analyser.connect(audioCtx.destination);
			 
	analyser.fftSize = 2048; 
	bufferLength = analyser.fftSize;
	dataArray = new Uint8Array(bufferLength);
	analyser.getByteTimeDomainData(dataArray);
}

function play(){
	audio.play();
	isPlaying = true;
	draw();
}

function pause(){
	audio.pause();
	isPlaying = false;
	drawVisual = cancelAnimationFrame(drawVisual);
	drawMenu();	
}

//canvas
function drawBackground(color){ //background appearance
	canvasCtx.globalCompositeOpteration = "source-over";
	canvasCtx.fillStyle = color;
	canvasCtx.fillRect(0,0,W,H);
}

function drawBar(x,y,wid){ //bar appearance
	canvasCtx.lineWidth = wid;
	canvasCtx.strokeStyle = rainbowColor(x+rot,W);
	canvasCtx.beginPath();
	canvasCtx.moveTo(x, y);
	canvasCtx.lineTo(x, H-y);//y+30
	canvasCtx.stroke();
	canvasCtx.closePath();
}

function rgba(r,g,b,a){ //return rgba quicker
	return "rgba(" +r+ "," +g+ "," +b+ "," +a+ ")";
}

function rando(min,max){ //random number
	return Math.floor(Math.random()*max)+min;	
}

function rainbowColor(n,d){
	var ratio = n/d; 
		var hue = Math.floor(360*ratio);
	var sat = 100;
		var lum = 50;
	return "hsl(" + hue + "," + sat + "%," + lum + "%)";
}

function draw() { 
	rot = (rot==W) ? 0 : rot+1; //rotate the rainbow
	drawVisual = requestAnimationFrame(draw);
	analyser.getByteTimeDomainData(dataArray);
	
	if(isPlaying){
		drawBackground("#0A0A0A");
	}
	
	var wid = 2, //7
		gap = 5; //4
	//f+gap is the selection range within dataArray
	
	var x = 0;
	var sum = 0; //sum of values in interval f
	for(var i = 0; i < bufferLength; i+=1) {
		var v = dataArray[i] / 128.0;
		
		v = (v < .5) ? Math.pow(v,2) + .25 : v;
		v = (v > 1.5) ? Math.sqrt(v) + .25 : v;
		
		var y = v * H/2;
		sum += y;
		if(i % (wid+gap) == 0){  //if i reaches wid + gap
			if(x==0)drawBar(x,sum/(wid/2),wid); //if first bar
			else drawBar(x,sum/(wid+gap),wid);
			sum = 0;
			x += wid + gap;
		}
		if(x>W) i = bufferLength; //if it reached W then end
	}
};


//MAIN
//If you add more songs just add them into this list
var library = ["Verbiage.mp3","H.Y.F.A.Y.H.I..mp3"]

var next = document.getElementById("nextSong"),
	next_min1 = document.getElementById("nextSong_min1"),
	next_plus1 = document.getElementById("nextSong_plus1");

var currentSong = rando(0,library.length-1);
var nextSong = currentSong;
makeMenu();
var rot = 0;
var isPlaying = false;
var drawVisual;
drawBackground("#0A0A0A");
drawMenu();
setSong(currentSong);







//To add:
//change song when song ends
//create library array dynamically
//selection menu only appears when the arrow keys are pressed
//physical versions




function drawMenu(){

	canvasCtx.fillStyle = "#FFFFFF";
	canvasCtx.beginPath();
    canvasCtx.moveTo(W/2-50,H/2-50);
    canvasCtx.lineTo(W/2+50,H/2);
    canvasCtx.lineTo(W/2-50,H/2+50);
    canvasCtx.fill();
    canvasCtx.closePath();

	/*
	canvasCtx.lineWidth = 10;
	canvasCtx.strokeStyle = "#FFFFFF";
	canvasCtx.beginPath();
	canvasCtx.moveTo(W/2-100, H/2-100);
	canvasCtx.lineTo(W/2+100, H/2+100);//y+30
	canvasCtx.stroke();
	canvasCtx.closePath();

	canvasCtx.lineWidth = 10;
	canvasCtx.strokeStyle = "#FFFFFF";
	canvasCtx.beginPath();
	canvasCtx.moveTo(W/2+100, H/2-100);
	canvasCtx.lineTo(W/2-100, H/2+100);//y+30
	canvasCtx.stroke();
	canvasCtx.closePath();*/
}

/*
function intro(){
	i = 0;
	//setInterval(function(){
//		i += .01;
		drawMenu(i);
//	},20)   
}*/
