function mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var numero=0;
	var respuesta='si';


do {

numero = parseInt(prompt("Ingrese un número"));
while (isNaN (numero)) {
numero = parseInt(prompt("Ese no es un número, por favor ingrese un número"));

}
if (numero >= 0){

positivo = numero + positivo;

}

else {
negativo = numero * negativo;
contador ++;
}
respuesta = prompt("Quiere seguir agregando números?");

}

while (respuesta == 's');

if(contador == 0)

negativo = 0;

document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN