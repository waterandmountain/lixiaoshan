var xiala_1 = document.getElementById("xiala_1");
var quanbu = document.getElementById("quanbu");


quanbu.onmouseover = function(){
	xiala_1.style.display = "block";
}
quanbu.onmouseout = function(){
	xiala_1.style.display = "none";
}




// 轮播
var slideImg = document.getElementById("slideImg");
var warp = document.getElementById("warp");
/*var button = document.getElementById("button");
var buttons = button.getElementsTagName("span");*/
var buttons = document.querySelectorAll(".buttons span");
console.log(buttons);
var offset = 1920;//偏移量(轮播图的宽度)
var maxNum = buttons.length-1;
var posX = 0;
var timer = null;
var slideTime = 2000;//默认轮播图切换秒数
var index = 0;//用来保存步数(点击对应的序号)
//到下一个图片,当到达最后一个图片时,跳转第一个图
	function toRight(){
		index++;
		if (index > maxNum) {
			index = 0;
		}
		animate(-offset*index);
		buttonShow();
		// console.log("index的值为:" + index);
	}
//到上一个图片,当到达第一个图片时,跳转到最后一个图
	function toLeft(){
		index--;
		console.log(index);
		if (index < 0) {
			index = maxNum;
		}
		animate(-offset*index);
		buttonShow();
		// console.log("index的值为:" + index);
	}
//封装一个负责幻灯动画的函数
function animate(offsetNum){
	// console.log(offset);
	//接受offset后,修改变量posX的值,然后赋值给slideImg.style.left
	posX = offsetNum;
	if (posX < -(maxNum*offset)) {
		posX = 0;
	}
	if (posX > 0) {
		posX = -(maxNum*offset);
	}
	slideImg.style.left = posX + "px";
}
//封装一个定时器开始函数
function play(){
	timer = setInterval(function(){
		toRight();
	},slideTime);
}
play();
//封装一个定时器停止函数
function stop(){
	clearInterval(timer);
}
//封装一个控制导航按钮css的函数
function buttonShow(){
	for (var k = 0; k < buttons.length; k++) {
		buttons[k].className = "";
	}
	buttons[index].className = "on";
}
//当鼠标移入轮播图区域时,暂停播放
warp.onmouseover = function(){
	 stop();
}
//当鼠标离开轮播图区域时,继续播放
warp.onmouseout = function(){
	play();
}


//为导航按钮绑定点击事件(mouseover事件)
for (var i = 0; i < buttons.length; i++) {
	buttons[i].onclick = function(){
		for (var j = 0; j < buttons.length; j++) {
			buttons[j].className = " ";
			//找到被点击的对象
			if (this == buttons[j]) {
				//跳转到对应的图片
				index = j;
				console.log("index的值为:" + index);
				console.log("j的值为:" + j);
				//因为index是自动加1,而变量j是用户随机点击的,这里的index和j需要同步
				animate(-offset*j);
				buttons[j].className = "on";
			}
		}
	}
}




