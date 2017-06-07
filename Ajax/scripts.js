var botonAhora = document.getElementById("ahora");
var preResult = document.getElementById("result");

botonAhora.onclick = function(){
	var envio = new XMLHttpRequest();
	envio.open("GET", "https://reqres.in/api/products/3");
	envio.onload = function() {
		if(envio.status === 200){
			preResult.innerHTML = envio.responseText;
		}
		else{
			alert("Request failed. Returned status of " + envio.status);
		}
	};
	envio.send();
}