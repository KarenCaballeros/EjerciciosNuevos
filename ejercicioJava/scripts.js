var Square = document.getElementById("square");
var selColor = document.getElementById("color");
var botonCrear = document.getElementById("crear");
var inCantidad = document.getElementById("cantidad");
botonCrear.onclick = function(){
	square.className = "square";
	square.classList.add(selColor.value);
	var cantidad = parseInt(inCantidad.value);
	var cont = ""
	for (i = 0; i < cantidad ; i++) {
    	cont += square
    }
   caja.innerHTML = cont
}

//<div class='square'></div>"