/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
var Numero1;

var Numero2;

var resultado;

Numero1 = document.getElementById("numeroUno").value;

Numero1 = parseInt (Numero1) ;

Numero2 = document.getElementById("numeroDos").value;

Numero2 = parseInt (Numero2) ;

resultado = Numero1 + Numero2 ;

alert ("la suma es " + resultado);


}

