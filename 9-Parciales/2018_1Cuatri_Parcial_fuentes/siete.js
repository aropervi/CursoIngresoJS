function mostrar()
{
var notas;
var sexo;
var acumuladorNotas =0;
var promedioNotas;
var notaBaja;
var SexoBajo;
var flag = 0;
var contadorVaronesMas6= 0; //recorda inicializar cada cosa que te pidan en el problema

for(i=0;i<5;i++){

notas= parseInt(prompt("ingrese la nota"));
while (isNaN(notas) || (notas<0) && (notas>10)) {
    notas = parseInt(prompt("Nota invalida, por favor reingrese"));
} 
    sexo= prompt("Ingrese el sexo del alumno");

while (sexo!== "m" && sexo!=="f" ){

sexo= prompt("Sexo invalido, por favor reingrese"); 
}
}

acumuladorNotas = acumuladorNotas + notas;

if (notas<notaBaja || flag==0) {
notaBaja = notas;
flag=1;
SexoBajo = sexo
}

else if (sexo== m && nota >6){

contadorVaronesMas6 ++;

}
alert ("Promedio = " + acumuladorNotas / 5 + "\n Nota mas baja = " + notaBaja + SexoBajo + "\n Cantidad de varones con nota menor a 6 = " + contadorVaronesMas6);


}





