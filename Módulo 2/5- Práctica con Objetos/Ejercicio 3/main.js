/*
3-Escribe una clase que permita crear distintos objetos “rectángulos”,
con laspropiedades de alto y ancho, 
mas los métodos necesarios para modificar y
mostrar sus propiedades, calcular el perímetro y el área

*/

class Rectangulo {
    // Propiedades...

    alto
    ancho

    // Constructor

    constructor(alto, ancho){
        this.alto = alto
        this.ancho = ancho
    }

    // Métodos

    mostrarPropiedades() {
        alert(`El cuadrado tiene:
            De alto: ${this.alto}
            De ancho: ${this.ancho}
        `)
    }

    modificarAlto(alto){
        console.log(`Se modifico el alto anterior ${this.alto} a ${alto}`)
        this.alto = alto
    }

    modificarAncho(alto){
        console.log(`Se modifico el ancho anterior ${this.ancho} a ${ancho}`)
        this.ancho = ancho
    }

    calcularPerimetro(){
        perimetro = 2*this.ancho+2*this.alto

        alert(`El perimetro del rectangulo es: ${perimetro} unidades`)
    }

    calcularArea(){
        area = this.ancho * this.largo

        alert(`El area del rectangulo es: ${area} unidades cuadradas`)
    }
}