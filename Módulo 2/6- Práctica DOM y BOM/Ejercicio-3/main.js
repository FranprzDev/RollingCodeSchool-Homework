/*

3 - Crea una web con bootstrap y js, que contenga un botón input donde se pueda cargar una tarea y un botón que al ser 
presionado agregue dicha tarea a una lista, cada elemento ingresado en la lista debe poder ser eliminado 
con un botón creado para ese fin. 

*/

// 2 --- Funciones


// 3 --- Inputs
tareaInput = document.getElementById('tareaInput')
aniadirTarea = document.getElementById('aniadirTarea')
let contador = 1

// 4 --- addEventListener

aniadirTarea.addEventListener('click', (e) => {
    e.preventDefault();

    if(tareaInput.value != ''){
        const tareas = document.getElementById('containerTareas');
        const nuevaTarea = document.createElement('div');
        nuevaTarea.classList.add('d-flex', 'justify-content-between');
        const tareaId = `tarea${contador}`;
        nuevaTarea.innerHTML = `<span id="tarea${contador}">Tarea ${contador}: 📌 ${tareaInput.value}</span>
            <button type="button" class="btn btn-outline-white text-end" id="borrarTarea${contador}">❌</button>
        `;
        tareas.appendChild(nuevaTarea);
    
        tareaInput.value = ''
        contador++;

        const borrarTarea = document.getElementById(`borrarTarea${contador}`);

        borrarTarea.addEventListener('click', () => {
            const tareaABorrar = document.getElementById(`tarea${contador}`);
            const contenedorTareas = tareaABorrar.parentNode;
            contenedorTareas.removeChild(tareaABorrar);
        })

        // NO ME ENCUENTRA LA TAREA PARA BORRAR A PESAR DE QUE LA GENERA :D
        // (...)
    }
});


