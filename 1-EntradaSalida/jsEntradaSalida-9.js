/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
   
    var resultado1;

    var resultado2;

    resultado1 = parseInt(document.getElementById("sueldo").value);

    resultado2 = resultado1 + (resultado1*10/ 100);
    
    document.getElementById("resultado").value = resultado2;

}
