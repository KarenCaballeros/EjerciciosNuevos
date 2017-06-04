var inCantidad = document.getElementById("cantidad");
var botonAgregar = document.getElementById("agregar");
var botonHisto = document.getElementById("histograma");
var numeros = document.getElementById("numeros");
listaNum = [];
filas = [];
var fila1 = 0;
var fila2 = 0;
var fila3 = 0;
var fila4 = 0;
var fila5 = 0;
var fila6 = 0;
var fila7 = 0;
var fila8 = 0;
var fila9 = 0;
var fila10 = 0;
botonAgregar.onclick = function() {
	if (inCantidad.value >= 0 && inCantidad.value <=100 ) {
		listaNum.push(inCantidad.value);
		numeros.innerHTML = listaNum;}
	else{ 
		window.alert("Ingrese un numero del 0 al 100");}	
}

botonHisto.onclick = function(){
//	filas[0] = fila1
	for(i in listaNum){
		if(i <= 10){
			fila1 += 1;}
		else if(i > 10 && i <= 20){
			fila2 += 1;}
		else if(i > 20 && i <= 30){
			fila3 += 1;}
		else if(i > 30 && i <= 40){
			fila4 += 1;}
		else if(i > 40 && i <= 50){
			fila5 += 1;}
		else if(i > 50 && i <= 60){
			fila6 += 1;}
		else if(i > 60 && i <= 70){
			fila7 += 1;}
		else if(i > 70 && i <= 80){
			fila8 += 1;}	
		else if(i > 80 && i <= 90){
			fila9 += 1;}	
		else{
			fila10 += 1;}						
	}	
	filas[0] = fila1
	filas[1] = fila2
	filas[2] = fila3
	filas[3] = fila4
	filas[4] = fila5

	for (x = 0; x < 11; x++) { 
    	largo = 0;
    	largo = ((fila[x]) * 10);
    	window.alert(fila[x]);
    	window.alert(largo);
    	//var fila = document.createElement("div");
    	//fila.style.width = "10px";
		//fila.style.background = "red";
		//fila.style.height = "20px";
		//document.body.appendChild(fila);}
} 
