function mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='s';
	var promedio;
	var numero;

	do {

		numero = parseInt(prompt("Ingrese un número"));

		acumulador = acumulador + numero;
		contador++;

		respuesta = prompt("Quiere ingresar otro numero?");

	} while(respuesta == "s" );

	promedio = acumulador / contador;

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=promedio;

}//FIN DE LA FUNCIÓN