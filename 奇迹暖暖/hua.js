function Hua(left,tops,lefts,size){
					this.ops =1;
					this.tops = tops;
					this.lefts = lefts;
					this.top = 0;
					this.left = left;
					this.size = size;
					var that = this;
					this.box = document.createElement("div");
					this.box.style.position = "absolute"
					this.box.style.background = "url(img/huaban.png)"
					
					this.box.style.width = "40px";
					this.box.style.height = "70px";
					this.bdy = document.documentElement||document.body;
					// this.bdy.style.backgroundColor = "black";
					this.bdy.appendChild(this.box);
					this.box.style.top = this.top + "px";
					this.box.style.left = this.left + "px";
					this.box.style.opacity = this.ops;
					this.box.style.fontSize = this.size;
					this.box.style.zIndex =999;
					this.num = 0;
					this.times = null;
					this.timer = null;
					this.action();
				};
				Hua.prototype.action = function(bian){
					var that = this;
					 this.timer = setInterval(function(){
					  	
					  	that.ops -=0.002;		
					  	that.top +=that.tops;
					  	that.left +=that.lefts;
					  	that.box.style.size = that.size;
					  
					  	if (that.top>3600) {
					  		that.remove();
					  		
					  	}
					  	if (that.ops<=0.2) {
					  		that.removes();
					  	}
					  	if (that.left>1800) {
					  		that.removes();
					  	}


					  	that.box.style.top = that.top + "px"
					  	that.box.style.left = that.left + "px"
					  	that.box.style.opacity = that.ops;
					  	that.box.style.fontSize = that.size + "px";
					  	// console.log(that.box.style.opacity)

					  },100)

				}
				Hua.prototype.removes = function(){
					this.bdy.removeChild(this.box);
					clearInterval(this.timer)
				}
				Hua.prototype.remove = function(){
					this.bdy.removeChild(this.box);
					clearInterval(this.timer)
					
				
				}

				setInterval(function(){
					new Hua(Math.random()*1800,Math.random()*(15-5)+5,Math.random()*(20-(-10))+(-10),Math.random()*(70-10)+10)
				},800)


			