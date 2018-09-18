var tab1 = document.getElementById('tab1');
var tab2 = document.getElementById('tab2');
var neirong1 = document.getElementById('neirong1');
var divs = neirong1.getElementsByTagName('div');
tab1.onclick = function(){
 tab1.style.color = "white";
 tab2.style.color = "black";
 divs[0].style.display = "block";
 divs[1].style.display = "none"
}
tab2.onclick = function(){
 tab2.style.color = "white";
 tab1.style.color = "black";
 divs[1].style.display = "block";
 divs[0].style.display = "none"
}