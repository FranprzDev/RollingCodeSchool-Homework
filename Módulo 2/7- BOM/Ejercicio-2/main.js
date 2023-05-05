/*
    Con 30 minutos de bicicleta puedes quemar 192 calorías. Crear un script que muestre en consola las calorías 
    que vas quemando por segundo simulando que vas en bicicleta.

    aplico 3 simple:

    30 [min] ___ 192 [calorias]
    --- ADAPTO AL PROBLEMA ---
    1800 [s] ___ 192 [calorias]
    1    [s] ___ x [calorias]

    x = 192/1800 [calorias]
    x = 0.106 ; 6 periodico.
    x = 0.107
    Entonces planteamos:

*/

// funciones

function imprimirCalorias(caloriasQuemadas){
    let parentNode = document.getElementById('parentCalorias');
    let childNode = document.getElementById('caloriasQuemadas');
    childNode.classList.add('text-warning')
    childNode.innerHTML = `${caloriasQuemadas} [calorías]`
    parentNode.innerHTML = '' 
    parentNode.appendChild(childNode)
}

// variables
let caloriasQuemadas = 0
let intervalo = 0
let caloriasPS = 0.107
// se queman 0.107 calorías por segundo

// dom
let btnQuemador = document.getElementById('quemadorCalorias')
let dejarDeQuemar = document.getElementById('dejarDeQuemar')

btnQuemador.addEventListener('click', (e) => {
    e.preventDefault();
    intervalo = setInterval(() => {
        caloriasQuemadas += caloriasPS
        imprimirCalorias(caloriasQuemadas, 1)
    },1000)


})