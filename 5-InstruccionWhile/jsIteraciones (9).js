function mostrar()
{
	var numero= 0;
	var respuesta = "sí"
	var maximo;
	var minimo; 
    var flag = 0
	
	
do {

numero = parseInt(prompt("Ingrese un número"));
while (isNaN (numero)) {

numero = parseInt(prompt("Ese no es un número, por favor ingrese un número"));
	
}

if (flag == 0 || numero > maximo) {

	maximo = numero;

}

if (flag == 0 || numero < minimo){
	minimo = numero;
}

respuesta = prompt("Queres seguir agregando números?");

flag = 1;

}
while (respuesta == 's');

document.getElementById("maximo").value = maximo;
document.getElementById("minimo").value = minimo;



}//FIN DE LA FUNCIÓN