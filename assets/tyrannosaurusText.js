//TyrannosaurusText.js
function tText(c,w){

	this.class = c;
	this.width = w;

	var N = 0;

	this.set = function(){
		var len = document.getElementsByClassName(this.class).length;

		for(var i = 0; i<len; i++){
			string = this.getString(i);
			sizeable = this.insertP(string).join("").replace(/_/g," ");
			document.getElementsByClassName(this.class)[i].innerHTML = "<div class='TyrannosaurusText' id='TyrannosaurusText-" + i +"'>" + sizeable + "</div>";
		} 
		for(var i = 0; i<N; i++){
			this.setSize(i);
		}
		return;
	}

	this.getString = function(i){
		return document.getElementsByClassName(this.class)[i].innerHTML;
	}

	this.insertP = function(string){
		body = string.split(" ");
		for(var i = 0 ; i<body.length; i++){
			body[i] = "<span class='Saurus' id='Saurus-" + N + "'>" + body[i] + "</span><br />"
			N++;
		}
		return body;
	}

	this.setSize = function(id){
		span = document.getElementById("Saurus-"+id);
		for(var i = 0; span.offsetWidth<this.width; i++){
			span.style.fontSize = i;
		}
		return;
	}

}
