/*
    Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo,
    luego crear una función para calcular su perímetro y mostrarlo por pantalla.
*/

function calcularPerimetro(a,b){
    return (2*(a+b))
}

let a = Number(prompt("Lado A: "))
let b = Number(prompt("Lado B: "))

alert(`El perimetro es: ${calcularPerimetro(a, b)}`)