$(function(){
	$(".one_lis").on("mouseenter",function(){
	$(this).children().fadeIn(500);
	$(this).css("background-color","black")
})
$(".one_lis").on("mouseleave",function(){
$(this).children().fadeOut(500);
	$(this).css("background-color","rgba(0,0,0,0)")
})
})
$(function(){
	var bdy = document.documentElement || document.body;
	$(document).on("scroll",function(){
		if(bdy.scrollTop>10){
			$("#tops").css({
				"background-color":"black",
				"opacity":".7"
			})
		}else{
			$("#tops").css("background-color","rgba(0,0,0,0)")
		}
	})
})
$(function(){
	var leftss = true;
	$(".max_top_xiala").on("click",function(){
		if(leftss){
			$(".max_xiala_centent").css({
				"right":"0"
			})
			$(".max_top_xiala span").removeClass("s-gang")
			$(".max_top_xiala span").addClass("x_hao")
			leftss = false;
		}else{
			$(".max_xiala_centent").css({
				"right":"-100%"
			})
			
			$(".max_top_xiala span").removeClass("x_hao")
			$(".max_top_xiala span").addClass("s-gang")
			leftss = true;
		}
		
	})
})
$(function(){
	var kai = true;
	$(".max_xiala_li").on("click",function(){
		if(kai){
			$(this).css("height","25rem");
		kai = false;
		}else{
			$(this).css("height","5rem");
		kai = true;
		}
	})
})


