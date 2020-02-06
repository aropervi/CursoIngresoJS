/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
    var importe1;
    
    var resultado1;

    importe1 = parseFloat(document.getElementById("importe").value);

    resultado1 = importe1 - (importe1* 25 /100);

  document.getElementById("resultado").value = resultado1;

}
