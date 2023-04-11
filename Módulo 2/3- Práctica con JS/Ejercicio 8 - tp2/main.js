/*
    Crea script para generar pirámide siguiente con los números del 1 al número
    que indique el usuario (no mayor de 50)

    1
    12
    123
    1234
    12345
    123456
*/

let numero = parseInt(prompt("Ingrese un numero (max 50): "))

if(numero <= 50){
    for(let i = 1; i <= numero; i++){
        console.log(`${i}`.repeat(i))
    }
    // uso de la funcion repeat para esto
}else{
    alert("El numero excede el máximo.")
}
