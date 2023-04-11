/*
    Escribir el código de una función a la que se pasa como parámetro un número
    entero y devuelve como resultado una cadena de texto que indica si el número es
    par o impar. Mostrar por pantalla el resultado devuelto por la función.
*/

function cookiesDeSalmon(numero){
    if(numero % 2 == 0){
        return "Es par"
    }else{
        return "Es impar"
    }
}

let numero = prompt("Ingrese un numero: ");

document.write(`El numero es: ${cookiesDeSalmon(numero)}`)