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
	inCantidad.value = ""	
}

botonHisto.onclick = function(){
//	filas[0] = fila1
	window.alert(listaNum);
	for(i = 0; i < listaNum.length; i++){
		if(listaNum[i] <= 10){
			fila1 += 1;}
		if(listaNum[i] > 10 && listaNum[i] <= 20){
			fila2 += 1;}
		if(listaNum[i] > 20 && listaNum[i] <= 30){
			fila3 += 1;}
		if(listaNum[i] > 30 && listaNum[i] <= 40){
			fila4 += 1;}
		if(listaNum[i] > 40 && listaNum[i] <= 50){
			fila5 += 1;}
		if(listaNum[i] > 50 && listaNum[i] <= 60){
			fila6 += 1;}
		if(listaNum[i] > 60 && listaNum[i] <= 70){
			fila7 += 1;}
		if(listaNum[i] > 70 && listaNum[i] <= 80){
			fila8 += 1;}	
		if(listaNum[i] > 80 && listaNum[i] <= 90){
			fila9 += 1;}	
		if(listaNum[i] > 90 && listaNum[i] <= 100){
			fila10 += 1;}						
	}	
	filas[0] = fila1;
	filas[1] = fila2;
	filas[2] = fila3;
	filas[3] = fila4;
	filas[4] = fila5;
	filas[5] = fila6;
	filas[6] = fila7;
	filas[7] = fila8;
	filas[8] = fila9;
	filas[9] = fila10;

	for (x = 0; x < 10; x++) { 
    	largo = 0;
    	largo = ((filas[x]) * 10);
    	window.alert(filas[x]);
    	//window.alert(fila1);
    	//window.alert(fila2);
    	var fila = document.createElement("div");
    	fila.style.width = largo +"px";
		fila.style.background = "red";
		fila.style.height = "20px";
		document.body.appendChild(fila);
	}
} 
