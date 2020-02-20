function mostrar()
{

var numero =0;
var respuesta;
var acumNeg = 0;
var acumPos = 0;
var contadorPos = 0;
var contadorNeg = 0;
var contadorCero = 0;
var cantidadpar = 0;

	do {

numero = parseInt(prompt("Ingrese un numero"));

while (isNaN(numero)) {

	numero = parseInt (prompt("ese no es un numero, por favor ingrese un numero"));
}

if (numero > 0) {

acumPos = numero + acumPos;
contadorPos ++;

}

else if (numero< 0) {

acumNeg = numero + acumNeg;

contadorNeg ++;

}

else {

contadorCero ++;

}
if (numero % 2 == 0){
cantidadpar ++;

}

respuesta = prompt("Desea agregar otro numero?");

}
	
while (respuesta == 's');

document.write("1 -La suma de los negativos es " + acumNeg + "</br>");
document.write("2 -La suma de los positivos es " + acumPos + "</br>");
document.write("3 -La cantidad de los positivos es " + contadorPos + "</br>");
document.write("4 -La cantidad de los negativos es " + contadorNeg + "</br>");
document.write("5 -La cantidad de ceros es " + contadorCero + "</br>");
document.write("6 -La cantidad de los numeros pares es de " + cantidadpar + "</br>");

if (contadorPos != 0){
document.write("7 -El promedio de los numeros positivos es de " + (acumPos / contadorPos) + "</br>");
}
if (contadorNeg != 0){
document.write("8 -El promedio de los negativos es de " + (acumNeg / contadorNeg) + "</br>");
}
document.write("9 Diferencia entre positivos y Negativos " + (contadorPos - contadorNeg) + "</br>");
//</br">
	
	



}//FIN DE LA FUNCIÓN