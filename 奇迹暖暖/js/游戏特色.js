function $(id){
			return document.getElementById(id);
		}
		 var content8 = $("content8");
		 var lis8 = $("range1").getElementsByTagName('li');
		 var times5 = null; 
		 var num5 = 0;
		 if (times5) {
		 	clearInterval(times5)
		 }
		var box_width = content1.offsetWidth;
		limiao5();
		  function limiao5(){
		  	times5 = setInterval(function(){
		   	num5++;
		   	if (num5>3) {
		   		num5=0;
		   	}
		   	huanman5(content1.scrollLeft,num5*box_width)
		 
		   },2000)
		}
		    function huanman5(start,end){
		  			change3();
		    	var willlength = end-start;
		    	var allstart = 25;
		    	var willnum5 = 0;
		    	var everylength = willlength/allstart;
		    	var times52 = setInterval(function(){
		    		willnum5++;
		    		content1.scrollLeft += everylength;
		    		if (willnum5==allstart) {
		    			clearInterval(times52);
		    			content1.scrollLeft = end;
		    		}
		    		
		    	},20)
		    }

		     for (var i = 0; i < lis8.length; i++) {
		     	lis8[i].index = i;

		     	lis8[i].onclick = function(){
		     		if (times5) {
		     		clearInterval(times5)
		     	}
		     		num5 = this.index;
		     		
		     		huanman5(content1.scrollLeft,num5*box_width);
		     		limiao5();
		     	}
		     }
		     function change3(){
		     	for (var i = 0; i < lis8.length; i++) {
		     		lis8[i].className = "";
		     	}
		     	 lis8[num5].className = "select1"
		     }

		   