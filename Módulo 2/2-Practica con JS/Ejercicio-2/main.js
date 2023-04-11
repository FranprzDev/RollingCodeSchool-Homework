/*
2- Escribir un programa que solicite una nota (número) de 0 a 10. Luego mostrar
la calificación en un alert según los siguientes rangos de nota:
0-2: Muy deficiente
3-4: Insuficiente
5-6: Suficiente
7: Bien
8-9: Notable
10: Sobresaliente
Si ingreso un número que no esté dentro del rango de 0 a 10 mostrar un mensaje
de “número erróneo”. Si el número ingresado no es válido mostrar el mensaje
“Introduce un número válido”.

*/

let nota = parseInt(prompt("Ingrese una nota: "));

if(nota >= 0 && nota <= 10){
    if(nota >= 0 && nota <= 2){
        document.write("Calificación muy deficiente.");
    }else if(nota > 2 && nota <= 4){
        document.write("Calificación insuficiente.");
    }else if(nota > 4 && nota <= 6){
        document.write("Calificación suficiente.");
    }else if(nota > 6 && nota < 8){
        document.write("Calificación buena.");
    }else if(nota >= 8 && nota <= 9){
        document.write("Calificación sobresaliente");
    }else if(nota > 9 && nota <= 10){
        document.write("Nota sobresaliente...");
    }
}