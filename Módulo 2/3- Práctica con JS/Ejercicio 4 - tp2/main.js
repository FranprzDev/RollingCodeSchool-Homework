let suma = 0
let number = 0

while(true){
    number = prompt("Ingrese un numero: ")

    if(number === null){
        break;
    }

    number = Number(number)

    if(isNaN(number)){
        alert("No es un numero...")

        continue;
    }

    if(!isNaN(number)){
        suma += number
    }
}

document.write(`La suma total es: ${suma}`)