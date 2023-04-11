/*
2-Escribe un programa que cree un objeto "cuenta" con las siguientes propiedades:
● Una propiedad titular con el valor "Alex".
● Una propiedad saldo, teniendo como valor inicial 0.
● Un método ingresar() que permita añadir dinero a la cuenta, pasando la
cantidad como parámetro
● Un método extraer() que permita retirar la cantidad pasada como
parámetro.
● Un método informar() que retorne la información del estado de la cuenta.
Utiliza este objeto para mostrar la descripción, ingresar y extraer dinero y volver a
mostrar la descripción del estado de la cuenta.
Rectángulos
*/

class Cuenta {
    
    // Variables del constructor
    titular
    saldo

    // Constructor

    constructor(titular = "Alex", saldo = 0){
        this.titular = titular
        this.saldo = saldo
    }

    // Métodos
    ingresar(cantidad){
        this.saldo += cantidad
    }

    extraer(cantidad){
        this.saldo -= cantidad
    }

    informar(){
        alert(`La cuenta del Sr/Sra ${this.titular} posee un total de ${Number(this.saldo)}`)
    }

}