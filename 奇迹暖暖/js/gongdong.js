var youbian = document.getElementById('youbian');
var ass = youbian.getElementsByTagName('a');
ass[0].onclick = function(){
	huanDongFnw(100);
	// window.scrollTo(0,0);
	this.className = "chu";
	ass[1].className = "";
	ass[2].className = "";
	ass[3].className = "";
	ass[4].className = "";
}
ass[1].onclick = function(){
	huanDongFnw(1100)
	// window.scrollTo(0,736);
	this.className = "chu";
	ass[0].className = "";
	ass[2].className = "";
	ass[3].className = "";
	ass[4].className = "";
}
ass[2].onclick = function(){
	huanDongFnw(1800);
	// window.scrollTo(0,1516);
	this.className = "chu";
	ass[1].className = "";
	ass[0].className = "";
	ass[3].className = "";
	ass[4].className = "";
}
ass[3].onclick = function(){
	huanDongFnw(2400);
	// window.scrollTo(0,2248);
	this.className = "chu";
	ass[1].className = "";
	ass[2].className = "";
	ass[0].className = "";
	ass[4].className = "";
}
ass[4].onclick = function(){
	huanDongFnw(3100);
	// window.scrollTo(0,3020);
	this.className = "chu";
	ass[1].className = "";
	ass[2].className = "";
	ass[3].className = "";
	ass[0].className = "";
}
ass[5].onclick = function(){
	huanDongFnw(0);
	// window.scrollTo(0,3020);
	this.className = "chu";
	ass[1].className = "";
	ass[2].className = "";
	ass[3].className = "";
	ass[0].className = "";
}
var limiaoss = 0,timesssss = null;
var bds = document.documentElement||document.body;
	function huanDongFnw(dumeiyao){	
	   clearInterval(timesssss);
	   limiaoss = bds.scrollTop;
       timesssss = setInterval(function(){
          limiaoss = limiaoss + (dumeiyao-limiaoss)/5;
          		if(limiaoss>dumeiyao){
					limiaoss = Math.floor(limiaoss); 
				}else{
					limiaoss = Math.ceil(limiaoss);
				}
          if (limiaoss == dumeiyao) {
          	clearInterval(timesssss);
          }
            console.log(limiaoss,dumeiyao);
           window.scrollTo(0,limiaoss);
       },20);
	}
