var selColor = document.getElementById("color");
var botonCrear = document.getElementById("crear");
var inCantidad = document.getElementById("cantidad");
var divContenedor = document.getElementById("contenedor");
botonCrear.onclick = function(){
	var cantidad = parseInt(inCantidad.value);
	for (i = 0; i < cantidad ; i++) {
    	var square = document.createElement("div");
		square.className = "square";
		square.classList.add(selColor.value);
    	// TODO ?????????

    	divContenedor.appendChild(square);


    }
}

//<div class='square'></div>"