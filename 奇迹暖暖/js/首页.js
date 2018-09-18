	// 获取所有元素
		var carousel = document.getElementById('carousel');
		// 左右按钮，小圆点列表，图片列表
		var carousel_leftBtn = document.getElementById('carousel_leftBtn');
		var carousel_rightBtn = document.getElementById('carousel_rightBtn');

		var circlesLis = document.getElementById('circles').getElementsByTagName('li');
		var imagesListLis = document.getElementById('imagesList').getElementsByTagName('li');

		// 信号量
		var img_idx = 0; //正在显示的图片是哪一张，合法值是0 1 2 3 4
		var timer = null;

		// ➡右按钮点击事件
		carousel_rightBtn.onclick = rightBtnHandle;
		// 自动轮播
		timer = setInterval(rightBtnHandle,2000);

		function rightBtnHandle() {
			// 改变信号量
			img_idx++;
			// 判断不能大于4
			if (img_idx > 2) {
				img_idx = 0;
			}

			// 切换图片  切换小圆点
			changePic(img_idx,img_idx == 0 ? 2: img_idx - 1);

		}

		// 当鼠标覆盖carousel时，停止定时器
		carousel.onmouseover = function() {
			clearInterval(timer);
		}
		carousel.onmouseout = function() {
			timer = setInterval(rightBtnHandle,2000);
		}

		// 做按钮点击
		carousel_leftBtn.onclick = function() {
			// 改变信号量
			img_idx--;
			// 判断不能大于4
			if (img_idx < 0) {
				img_idx = 2;
			}

			// 切换图片  切换小圆点
			changePic(img_idx,img_idx == 2? 0 : img_idx + 1);

		}

		// 小圆点切换图片
		for(var i = 0;i < circlesLis.length;i++){
			// 自定义属性
			circlesLis[i].index = i;
			// 每一个小圆点添加鼠标悬浮监听
			circlesLis[i].onmouseover = function() {
				var n = img_idx;
				// 改变信号量
				img_idx = this.index;
				// 切换图片
				changePic(img_idx,n);

			}
		}

		// 切换图片的函数封装
		function changePic(img_idx,old_idx) {
			// img_idx下标的图片缓慢显示，old_idx下标的图片缓慢隐藏
			animate(imagesListLis[old_idx],{"opacity":0},600);
			animate(imagesListLis[img_idx],{"opacity":1},600);

			// 改变小圆点
			for(var i = 0;i < circlesLis.length;i++){
				circlesLis[i].className = '';
			}
			circlesLis[img_idx].className = 'current';
		}
		//tab切换
		var hd = document.getElementById('hd');
		var oAs = hd.getElementsByTagName('a');
		console.log(oAs);
		var warp = document.getElementById('warp');
		var oDivs = warp.children;
		console.log(oDivs);

		for (var i = 0; i < oAs.length; i++) {
			(function(index){
				oAs[i].onmouseover = function(){
					for (var i = 0; i < oAs.length; i++) {
						oAs[i].className = "";
						oDivs[i].style.display = "none";
					}
					this.className = "on";
					oDivs[index].style.display = "block";
				}
			})(i)
		}

