function agregarTarea() {
    const tareaInput = document.getElementById("nueva-tarea");
    const tareaTexto = tareaInput.value.trim();

    if (tareaTexto === "") {
        alert("Por favor, escribe una tarea.");
        return;
    }

    const nuevaTarea = document.createElement("li");

    nuevaTarea.innerHTML = `
        ${tareaTexto}
        <button class="eliminar" onclick="eliminarTarea(this)">Eliminar</button>
    `;

    nuevaTarea.addEventListener("click", function() {
        nuevaTarea.classList.toggle("completada");
    });

    document.getElementById("lista-tareas").appendChild(nuevaTarea);

    tareaInput.value = "";
}

function eliminarTarea(boton) {
    const tarea = boton.parentElement;
    tarea.remove();
}
