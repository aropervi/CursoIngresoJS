function mostrar()
{

var sexo = prompt("ingrese f ó m .").toUpperCase();

while (sexo !="F" && sexo != "M")

{

    var sexo = prompt("Sexo indefinido, por favor intentar de nuevo").toUpperCase(); //Lo paso a mayúscula antes de que procese.
}

document.getElementById('Sexo').value=sexo;

}//FIN DE LA FUNCIÓN