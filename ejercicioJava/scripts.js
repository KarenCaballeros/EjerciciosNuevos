var square = document.getElementById("square");
var selColor = document.getElementById("color");
var botonCrear = document.getElementById("crear");
botonCrear.onclick = function(){
	square.classList.add(selColor.value);
}