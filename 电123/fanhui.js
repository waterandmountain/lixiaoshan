var fanhui = document.getElementById('fanhui_1');
var times = null;
			fanhui.onclick = function(){
				window.scrollTo(window.scrollY,0)
			}
			document.body.onscroll = function(){
				 if (window.scrollY>500) {
				 	 fanhui.style.display = 'block'
				 }else{
				 	 fanhui.style.display = 'none'
				 }
			}

var fanhui1 = document.getElementById('fanhui_3');
var weixin = document.getElementById('weixin');
	fanhui1.onmouseover = function(){
		weixin.style.display = 'block'
	}

	weixin.onmouseout = function(){
		weixin.style.display = 'none'
	}