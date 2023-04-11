/* Arrays */ 

// const nombreDelArreglo = []
// Posición -> Lugar donde se encuentra (Empieza desde 0)
// Elemento -> Lugar visual que nosotros vemos..
const computadora = [`Procesador`,`Memoria Ram`,`Cooler`,`Mother`,`Disco`,`Fuente`,`Gabinete`]

// alert(`${computadora[0]}`) // Posición: 0 Elemento: 1 
// alert(`${computadora[1]}`) // Posición: 1 Elemento: 2
// alert(`${computadora[2]}`) // Posición: 2 Elemento: 3
// alert(`${computadora[3]}`) // Posición: 3 Elemento: 4

// alert(`${computadora}`) // Te muestra el arreglo completo poniendo el nombre...


/* Agrega un elemento al final del arreglo */ 
    // alert(`Antes del push: ${computadora}`)
    // computadora.push("Placa de Video")
    // alert(`Despues del push: ${computadora}`)

/* Splice -> sirve para agregar en una posición específica */

    // alert(`Antes del splice: ${computadora}`)
    // computadora.splice(1,0,"Placa de Video")
    // alert(`Despues del push: ${computadora}`)

// /* Join -> Convertis mediante un patrón a cadena de texto*/
//     alert(`Antes del join: ${computadora}`)
//     alert(`Despues del join: ${computadora.join(" ")}`)

// for(let i = 0; i < computadora.length; i++) {
//     document.write(`${computadora[i]} <br>`)
// }

// document.write(`${computadora.join(` <br>`)}`)

// Funciones propias de JavaScript para no tener que ejecutar bucles.