// Intentaria hacer que se pueda crear lo siguiente:

/*
    CUANDO TENGA TIEMPO LO HAGO...

    3 INTENTOS POR CADA oportunidad de numero -> un unico numero, 3 intentos.
        Los cuento generando una clase que me permita almacenar la cantidad de intentos:

        class Intentos{
            intentos
            
            constructor(intentos = 1){
                this.intentos = intentos
            }

            aumentarContador(){
                this.intentos++
            }

            resetearIntentos(){
                this.intentos = 1
            }
        }

        Esta clase me permitira guardar los intentos y hacer mas dinamica la idea esta...

    Generar una clase de numeros randoms para usarlo con local storage y generar por pantalla los numeros segun corresponda.

    class RandomNumber{
        numeroRandom 

        constructor(){
            this.numeroRandom = Math.floor((Math.random() * 100) + 1)
        }

        informarIntentos(){
            if(intentos <= 3) {
                // todo codigo asociado al intento
                intentos.aumentarContador()
            }else{
                intentos.resetearIntentos()
            }            
        }
    }

    Cuando se generen los códigos, se tendrán que generar los 2 objetos por igual...
    EL objeto "NumeroRandom" y el objeto "intentos"

        una vez acabada la cantidad de intentos permitidos, se borrará el objeto y se pasara a otro objeto llamado "almacenamiento"
        para así registrarlo y dejarlo guardada en el localstorage para poder escribirlo proximamente en la pantalla según sea necesario.

*/

function generarNumero(){
    return Math.floor((Math.random() * 100) + 1)
}

function adivinarNumero(event){
    event.preventDefault()

    let numero = generarNumero()

    // no tengo acceso a este nuemro... 
    // es por temas del scope, no?


    if(numero == numberInput.value){
        alert("El numero coincide... ¡Ganaste!")
    }else{
        alert(`El numero no coincide... ¡Perdiste! El numero era ${numero}`)
    }
}

// Declaraciones de elementos html para dom y bom
const numberInput = document.getElementById("numberForm")
const buttonAdivinar = document.getElementById("adivinarButton")
buttonAdivinar.addEventListener('click', adivinarNumero)
