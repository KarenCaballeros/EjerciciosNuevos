var inCantidad = document.getElementById("cantidad");
var botonAgregar = document.getElementById("agregar");
var botonHisto = document.getElementById("histograma");
listaNum = [];
botonAgregar.onclick = function() {
	if (inCantidad.value >= 0 && inCantidad.value <=100 ) {
		listaNum.push(inCantidad.value);
		numeros.innerHTML = listaNum;}
	else{ 
		window.alert("Ingrese un numero del 0 al 100");}	
}
botonHisto.onclick = function(){
	
    } 
