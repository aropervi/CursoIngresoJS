/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
     var precio = 35;
     var cantidad = parseInt(document.getElementById("Cantidad").value);
     var descuento = 0;
     var bruto= precio * cantidad;
     var impuestos = 0
     var marca = document.getElementById('Marca').value;
    
while (isNaN(document.getElementById("Cantidad").value)){

    document.getElementById("Cantidad").value =  parseInt( prompt (("por favor complete todos los campos para poder calcular su descuento")));
}

switch (marca) {
    case ("ArgentinaLuz"):

    if (cantidad = 5) {
    descuento = (bruto *40) / 100; 
}
    if (cantidad = 4) {
        descuento = (bruto *25) / 100;
    }
    if (cantidad = 3) {
        descuento = (bruto *15) / 100; 
    }
break;

    case ("FelipeLamparas"):

        if (cantidad = 4) {
            descuento = (bruto *25) / 100;
        }
if (cantidad = 3) {
    descuento = ( bruto *10) / 100; 
}  
    break;

    default: 

    if (cantidad>=6)

    {
    descuento = bruto / 2; 

    }
    
    if (cantidad = 5) {
    descuento = (bruto *30) / 100; 

}

if (cantidad = 4) {

    descuento = (bruto *20) / 100; 

}
if (cantidad = 3) {
    descuento = (bruto *05) / 100; 
}   

}

if (bruto - descuento > 120) {
impuestos = ((bruto - descuento) * 10) / 100;

alert ("IIBB Usted pago $ "  + (bruto - descuento) + " siendo $ " + impuestos + " el impuesto que se pagó");

    document.getElementById("precioDescuento").value= (bruto - descuento) + impuestos;
}
else;

document.getElementById("precioDescuento").value = parseFloat(cantidad * precio - descuento); 

}
