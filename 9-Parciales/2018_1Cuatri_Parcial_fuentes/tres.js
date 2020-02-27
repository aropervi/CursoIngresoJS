function mostrar()
{
var precio = parseFloat(prompt("por favor ingrese el precio del producto"));

var porcentajeDescuento = parseFloat(prompt("Por favor ingrese el descuento obtenido"));

var descuento = (precio * porcentajeDescuento) / 100 ;

document.getElementById("elPrecioFinal").value = precio - descuento;

// Anotar las validaciones

}
