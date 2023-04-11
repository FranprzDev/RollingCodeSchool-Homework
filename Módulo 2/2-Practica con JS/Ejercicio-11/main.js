/*
11- Realiza un script que pida por teclado 3 edades y 3 nombres e indique el
nombre del mayor. *
*/

let nombre1 = prompt("Ingrese el nombre 1: ");
let edad1 = parseInt(prompt("Ingrese la edad 1: "));
let nombre2 = prompt("Ingrese el nombre 2: ");
let edad2 = parseInt(prompt("Ingrese la edad 2: "));
let nombre3 = prompt("Ingrese el nombre 3: ");
let edad3 = parseInt(prompt("Ingrese la edad 3: "));

let edadMayor = Math.max(edad1, edad2, edad3);

if(edadMayor == edad1){
    document.write(`La persona con mayor edad es ${nombre1} con ${edad1}`);
}
if(edadMayor == edad2){
    document.write(`La persona con mayor edad es ${nombre2} con ${edad2}`);
}
if(edadMayor == edad3){
    document.write(`La persona con mayor edad es ${nombre3} con ${edad3}`);
}
