/*
    Crear un script que solicite al usuario mediante un prompt el nombre de
    ciudades y almacenarlas en un arreglo, cuando el usuario selecciona cancelar se
    debe mostrar el arreglo generado, luego realizar las siguientes acciones:
    ● Mostrar la longitud del arreglo.
    ● Mostrar en el documento web los ítems de las posiciones primera, tercera y
    última.
    ● Añade en última posición la ciudad de París.
    ● Escribe por pantalla el elemento que ocupa la segunda posición.
    ● Sustituye el elemento que ocupa la segunda posición por la ciudad de
    'Barcelona'
*/

let ciudades = []; 
let nombreCiudades

while(true){
    
    nombreCiudades = prompt("Ingrese el nombre de una ciudad: ")

    if(nombreCiudades === null){
        break;
    }

    ciudades.push(nombreCiudades)
}

console.log(ciudades)

alert(`Longitud del arreglo: ${ciudades.length}`)

document.write(`Primera posicion: ${ciudades[0]} <br>`)
document.write(`Segunda posicion: ${ciudades[2]} <br>`)
document.write(`Ultima posicion: ${ciudades[ciudades.length-1]} <br>`)

ciudades.push("París")

document.write(`<br><br> El elemento en la segunda posición es: ${ciudades[1]}`)

ciudades.splice(1,1,"Barcelona")

console.log(ciudades)