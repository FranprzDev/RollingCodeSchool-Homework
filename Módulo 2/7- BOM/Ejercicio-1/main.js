/*

Crear un script que luego de 3 segundos muestre en el navegador la fecha del día.

*/

let fecha = new Date();

setTimeout(() => {
    let parentNode = document.getElementById('fecha')
    let childNode = document.createElement('h1')
    childNode.classList.add('text-warning')

    childNode.innerHTML = `${fecha.getDate() + "/" + (fecha.getMonth() +1) + "/" + fecha.getFullYear() }`
    parentNode.innerHTML = ''

    parentNode.appendChild(childNode)
},3000)