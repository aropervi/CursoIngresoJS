function mostrar()
{

var numero = parseInt(prompt("Ingrese un numero"));
//var contadorPares = 0
// SINO PONGO EL == ESTOY DECLARANDO VARIABLES, OJO!

for (var contador = 1; (numero % 2) == 0; contador ++){
    
    document.write("</br>" + contador);

    if (contador >= numero){
        break;
    }
}


//*while (isNaN(numero) || numero <1 ) {
// numero = parseInt(prompt("Dato invalido. Ingrese un numero: "));
//}

//for (var contador = 1; contador <= numero; contador ++){
 //   if (contador % 2 == 0){
   //     cibsike,kig(contador);
     //   contadorPares ++;
    //}
//}
//console.log("Cnatidad de pares: " + contadorPares);
}//FIN DE LA FUNCIÓN