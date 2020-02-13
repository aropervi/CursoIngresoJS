function mostrar()
{
//tomo la edad  
var mes = document.getElementById('mes').value;

switch (mes){

    case "Abril": case "Junio": case "Septiembre": case "Noviembre":

    alert ("Tienen 30 días");

break;

case "Febrero": 

alert ("Tiene 28 días");

break;

default: 

alert ("Tienen 31 días");

}



}//FIN DE LA FUNCIÓN