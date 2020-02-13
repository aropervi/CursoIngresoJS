/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
var precio1;

var precio2;

var precio3;

var resultado;

precio1 = parseFloat(document.getElementById("PrecioUno").value);

precio2 = parseFloat(document.getElementById("PrecioDos").value);

precio3 = parseFloat(document.getElementById("PrecioTres").value);

resultado = precio1 + precio2 + precio3;

alert ("la suma de los mismos es " + resultado);



}
function Promedio () 
{
    var precio1;

    var precio2;
    
    var precio3;
    
    var resultado;
    
    precio1 = parseFloat(document.getElementById("PrecioUno").value);
    
    precio2 = parseFloat(document.getElementById("PrecioDos").value);
    
    precio3 = parseFloat(document.getElementById("PrecioTres").value);

    resultado = (precio1 + precio2 + precio3) / 3;
    
    alert ("el promedio es " + resultado);

}
function PrecioFinal () 
{
	var precio1;

    var precio2;
    
    var precio3;
    
    var resultado1;

    var resultado2;
    
    precio1 = parseFloat(document.getElementById("PrecioUno").value);
    
    precio2 = parseFloat(document.getElementById("PrecioDos").value);
    
    precio3 = parseFloat(document.getElementById("PrecioTres").value);

    resultado1 = (((precio1 + precio2 + precio3) * 21) / 100);
    
    resultado2 = resultado1 + (precio1 + precio2 + precio3); 

    alert ("El importe total más el IVA es del " + resultado2);

}