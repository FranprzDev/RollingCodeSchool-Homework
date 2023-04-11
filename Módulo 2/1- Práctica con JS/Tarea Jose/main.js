let sueldoPrimerEmpleado = parseInt(prompt("Ingrese el valor sueldo 1: "));
let sueldoSegundoEmpleado = parseInt(prompt("Ingrese el valor sueldo 2: "));
let sueldoTercerEmpleado = parseInt(prompt("Ingrese el valor sueldo 3: "));

let suma = sueldoPrimerEmpleado + sueldoSegundoEmpleado + sueldoTercerEmpleado;

if (suma > 1_000_000) {
    document.write("La liquidación superó el presupuesto mensual.");
}else{
    document.write("La liquidación está dentro del presupuesto esperado.");
}