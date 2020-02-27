function mostrar()
{
var numero1= parseFloat(prompt("ingrese el numero A"));
var numero2= parseFloat(prompt("ingrese el numero B"));

if (numero1 == numero2) {

    alert("Los numeros " + numero1 + numero2 + " son iguales")

}

else if (numero1>numero2) {

    alert("La resta es igual a " + (numero1 - numero2));

}

else {
    
    if (numero1 + numero2 >10){
        alert("la suma es de " + (numero1 + numero2) + " y supero el 10")
    }

    else{ alert ("la suma es igual a " + (numero1 + numero2))};

}

}
