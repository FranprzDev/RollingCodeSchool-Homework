// let numero1 = parseInt(prompt("Ingrese un numero: "));
// let numero2 = parseInt(prompt("Ingrese otro numero: "));

// let resultado = numero1 + numero2;

// alert(`El resultado es ${resultado}`);
// console.log(`El resultado es ${resultado}`);
// document.write(`El resultado es ${resultado}`);

// // alert("")  -> comillas dobles
// // alert('')  -> comillas simples
// // alert(``)  -> backtips o template string

// let edad = parseInt(prompt("Ingrese una edad: "))

// if (edad >= 18) {
//     alert("Puedes pasar al boliche...")
// }else{
//     alert("No puedes pasar al boliche...")
// }

// alert(`
//     1. Sandwich de Milanesa
//     2. Guiso de Lentejas
//     3. Pizza
// `)

// let opcion = parseInt(prompt("Ingrese la comida que quiera: "))

// switch(opcion) {
//     case 1:
//         alert(`Eligió el Sandwich de Milanesa`)
//         break;
//     case 2:
//         alert(`Eligió el Guiso de Lentejas`)
//         b3reak;
//     case :
//         alert(`Eligió el Pizza`)
//         break;
// }

/*
    --- Bucles ---
    Forma de repetir partes de código hasta cumplir una condición..

    1. While()
    2. Do{} While()
    3. For()

*/

// console.log("1");
// console.log("2");
// console.log("3");
// console.log("4");
// console.log("5");
// console.log("6");
// console.log("7");
// console.log("8");
// console.log("9");
// console.log("10");

let contador = 1

while(contador <= 10){
    // 1 < 10 => true
    // 2 < 10 => true
    // 3 < 10 => true
    // 4 < 10 => true
    
    console.log(`${contador}`)
    contador++

    // contador++ 
    // contador += 1 
    // contador = contador + 1
    // son exactamente las mismas formas de escribir que un contador se le incremtan en uno.

 }
//  pregunta (condición) --> hace...

// // // console.log("--------")
// // // contador = 1

// // // do{
// // //     console.log(`${contador}`)
// // //     contador++;
// // // }while(contador <= 10)
// // // // hace --> pregunta (condición)...

for(let i = 0; contador <= 10; i++){
    console.log(`${contador}`)
}

let edad = 19
const edad2 = 19