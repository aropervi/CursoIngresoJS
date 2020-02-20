function mostrar()
{

	var numero = parseInt(prompt("ingrese un número entre 0 y 10."));

 
	while ( !(numero >=0 && numero <=10))
	{

	numero = parseInt(prompt("Error. Ingrese un número que esté entre el 0 y el 10"));

	}
	
	document.getElementById("Numero").value= numero;

	// a corregir
	
}//FIN DE LA FUNCIÓN