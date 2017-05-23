var square = document.getElementById("square");
var selColor = document.getElementById("color");
var botonCrear = document.getElementById("crear");
var inCantidad = document.getElementById("cantidad");
botonCrear.onclick = function(){
	square.className = 'square';
	square.classList.add(selColor.value);
	var cantidad = parseInt(inCantidad.value);

	
}