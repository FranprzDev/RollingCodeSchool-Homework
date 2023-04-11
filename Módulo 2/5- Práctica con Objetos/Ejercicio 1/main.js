/*

1- Crea un objeto llamado auto que tenga algunas características como el color,
marca, modelo y si está encendido o apagado. Crea los métodos necesarios para
permitir encender y apagar el auto.
Output:
objeto.encender();
objeto.apadar()
auto encendido
El auto se apagó

*/

class Auto {
    constructor(color, marca, modelo, estado){
        color = this.color
        marca = this.marca
        modelo = this.modelo
        estado = this.estado
    }

    encender(){
        estado = true
        alert("El vehículo está encendido...")
    }

    apagar(){
        estado = false
        alert("El vehículo está apagado...")
    }
}
