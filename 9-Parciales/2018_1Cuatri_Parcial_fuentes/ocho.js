function mostrar()
{
var letra;
var numero;
var numerosPar= 0;
var numerosImp= 0;
var cantidadCeros= 0;
var promedioPos;
var sumaPos= 0;
var sumaNeg = 0;
var MaximoL;
var MaximoN;
var minimL;
var minimN;
var seguir;
(numero>-100 && numero<-100)


do { numero= parseInt(prompt("Ingrese un numero"));

while (isNaN(numero) || numero>100 || numero<-100){

numero= parseInt(prompt("Ese no es un numero valido por favor reingreselo"));

}
if ((numero % 2)= 0) {
numerosPar ++;
}

else if (numero = 0){

cantidadCeros ++;
}
else {
numerosImp ++; 
}

if (numero<0){
sumaNeg ++;    
} 
else {
sumaPos ++;    
}

letra = prompt("Ingrese una letra");
while (letra < "a" || letra > "z" || letra < "A" || letra > "Z" ){
    letra = prompt("La letra ingresada no es valida, por favor reingresela");
}

seguir = prompt("Desea continuar el ingreso? Ingrese `s` o `n`");

} 

while (seguir == s)

document.write("Cantidad de numeros pares " + numerosPar + "<\br> ");

}
