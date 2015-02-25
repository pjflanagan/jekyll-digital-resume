document.addEventListener("click", function(){
	if(isPlaying) pause();
	else play();
},false);

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
	canvasCtx.fillRect(0,0,W,H-(29+10+20));
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
var library = ["Verbiage.mp3","H.Y.F.A.Y.H.I..mp3"]
var currentSong = rando(0,library.length-1);
var nextSong = currentSong;
var rot = 0;
var isPlaying = false;
var drawVisual;
drawBackground("#0A0A0A");
setTimeout(intro,500);
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


function intro(){
	//write in song name and show play pause buttons ??? HTML????
	plusBar();
	var h = 0;
	var p = setInterval(function(){
		h+=2;
		plusBar(h,0,0);
		if(h>=20)clearInterval(p);
	},10);
	var w = 0;
	setTimeout(function(){
		var p2 = setInterval(function(){
			w+=10;
			plusBar(h,w,0);
			if(w>=W){
				clearInterval(p2);
				document.getElementById("title").innerHTML = "";
			}
		},2);
	},300);
	setTimeout(function(){
		var b = 0;
		var p3 = setInterval(function(){
			b+=20;
			drawBackground("#0A0A0A");
			plusBar(h,w,b);
			if(b>=H/2-(29+10))
				clearInterval(p3);
		},10);
	},1500);
}

function plusBar(h,w,b){
	canvasCtx.fillStyle = "#FFFFFF";
	canvasCtx.beginPath();
    canvasCtx.moveTo(W/2-110-w*.8,H/2-12-h+b);
    canvasCtx.lineTo(W/2-110-w*.8,H/2+29+h+b);
    canvasCtx.lineTo(W/2-97+w,H/2+29+h+b);
    canvasCtx.lineTo(W/2-97+w,H/2-12-h+b);
    canvasCtx.fill();
    canvasCtx.closePath();
}
