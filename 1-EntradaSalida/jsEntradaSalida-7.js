/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
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

function restar()
{
    var num1;
    var num2;
    var resultado;


    resultado = parseInt(document.getElementById("numeroUno").value) - parseInt(document.getElementById("numeroDos").value);
    

    alert ("la resta es " + resultado);

}

function multiplicar()
{ 
    var num1;
    var num2;
    var num3;

    var resultado;

 num1 = document.getElementById("numeroUno").value;
 num2 = document.getElementById("numeroDos").value;

 parseInt (num1);
 parseInt (num2);

 resultado = (num1 * num2);  

 alert  ("la multiplicación es " + resultado);
}

function dividir()
{
	
}

