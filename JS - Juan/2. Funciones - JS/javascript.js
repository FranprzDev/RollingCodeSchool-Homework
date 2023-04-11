// Alcance de una función
/*
    El alcance en JS se extiende hacia donde esten
    los "{}" definidos en ella. Si una variable está afuera
    de todos tendrá entonces un alcance global, si no 
    en caso contrario si se encuentra adentro tendrá
    un alcance local y será emitido unicamente a los que 
    esten adentro del propio {}
*/

let resultado = 0

if(resultado >= 0) {
    alert("El resultado es mayor que 0")
    let resultadoMayorQueCero = 0
}

alert(`El resultado es ${resultadoMayorQueCero}`)