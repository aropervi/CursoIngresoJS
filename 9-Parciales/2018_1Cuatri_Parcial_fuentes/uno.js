
function mostrar()
{
var ancho;
var largo;

ancho = parseFloat(prompt("Por favor ingrese el ancho del rectangulo" ));
largo = parseFloat(prompt("Por favor ingrese el Largo del rectangulo"));

var perimetro = (largo * 2) + (ancho *2);

while (isNaN(ancho) || isNaN(largo) || ancho<0 || largo<0) {

alert("Por favor reingrese los datos de manera que el largo y el ancho del rectangulo sean numeros positivos");

ancho = prompt ("Reingrese el ancho");
largo = prompt ("Reingrese el largo");
}
alert("El perímetro de su rectangulo es de " + perimetro);

}
