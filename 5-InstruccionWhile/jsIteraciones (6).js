function mostrar()
{

	var contador=0;
	var acumulador=0;
    var numero;
	
while (contador <5)

{
	
	
numero = parseInt(prompt("Ingrese un número: "));

while (isNaN(numero)) 
	{
		var numero = parseInt(prompt("error por favor ingrese un numero, muchas gracias"));
	
	}
		acumulador = numero + acumulador;

contador ++;

}

document.getElementById("suma").value= acumulador; 
document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN