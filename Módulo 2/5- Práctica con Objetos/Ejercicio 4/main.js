/*
4- Escribe una clase Producto para crear objetos. Estos objetos,
deben presentar las propiedades código, nombre y precio, 
además del método imprime datos, el cual escribe por pantalla 
los valores de sus propiedades. Posteriormente, cree tres instancias 
de este objeto y guárdalas en un array. Por último, utilice el método 
imprime datos para mostrar por pantalla los valores de los tres objetos instanciados
*/

class Product {
    code 
    price
    name
    
    constructor(code,name,price){
        this.code = code;
        this.name = name;
        this.price = price;
    }

    imprimirDatos(){
        alert(`
        El código del producto es: ${this.code}
        El nombre del producto es: ${this.name}
        El precio del producto es: ${this.price}
        `)
    }
}

const ProductArray = []
const firstProduct = new Product(1347, "Papitas Lays", 370)
const secondProduct = new Product(1348, `Papitas Singal's`, 320)
const thirdProduct = new Product(1349, "Papitas Pringles", 470)

ProductArray.push(firstProduct, secondProduct, thirdProduct)

for(let i = 0; i < ProductArray.length; i++){
    ProductArray[i].imprimirDatos()
}