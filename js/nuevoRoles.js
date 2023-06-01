let listaRoles = [];

function agregarRoles() {
    let nombre = document.getElementById("nombreRol").value;
    let estado = document.getElementById("estado_text").value;

    let objetoRoles =
    {
        nombre: nombre,
        estado: estado
    };

    listaRoles.push(objetoRoles);
    actualizarTablaRoles();

    /*Configuración de alerta*/
    const AlertConfig = document.getElementById('liveToastGuardar')
    const toastGuardar = bootstrap.Toast.getOrCreateInstance(AlertConfig)
    toastGuardar.show()
}

function actualizarTablaRoles() {
    let tabla = document.getElementById("tablaRoles");
    tabla.innerHTML = "";

    for (let i = 0; i < listaRoles.length; i++) {
        let row = tabla.insertRow(i);
        let nombreRol = row.insertCell(0);
        let estadoRol = row.insertCell(1);
        let accionesRolesCell = row.insertCell(2);

        nombreRol.innerHTML = listaRoles[i].nombre;
        estadoRol.innerHTML = listaRoles[i].estado;
        accionesRolesCell.innerHTML =
            '<button style="background-color: #ABEBC6; text-align: center; border-color: #ABEBC6; color: black; border-radius: 5px; font-family: Ubuntu Condensed, sans-serif;" type="button" onclick="editarRoles(' + i + ')"><i class="bi bi-pencil-square"></i><b> Editar</b></button> <button style="background-color: #E74C3C; text-align: center; border-color: #E74C3C; color: black; border-radius: 5px; font-family: Ubuntu Condensed, sans-serif;" type="button" onclick="elimiarRoles(' + i + ')"><i class="bi bi-trash"></i><b> Eliminar</b></button> <button style="background-color: #5499C7; text-align: center; border-color: #5499C7; color: black; border-radius: 5px; font-family: Ubuntu Condensed, sans-serif;" type="button" onclick="ActivarDesactivarRoles(' + i + ')"><i class="bi bi-question-circle"></i><b> Activar / Desactivar</b></button>';

        /*Cuando se guarde la información coloque los campos en blanco*/
        let nombre = document.getElementById("nombreRol").value = "";
        let estado = document.getElementById("estado_text").value = "";
    }
}

function editarRoles(index) {
    let nombre = prompt("Nombre", listaRoles[index].nombre);
    let estado = prompt("Estado", listaRoles[index].estado.value = "ACTIVO");

    listaRoles[index].nombre = nombre;
    listaRoles[index].estado = estado;

    /*Configuración de alerta*/
    const AlertConfig = document.getElementById('liveToastEditar')
    const toastEditar = bootstrap.Toast.getOrCreateInstance(AlertConfig)
    toastEditar.show()

    actualizarTablaRoles();
}

function elimiarRoles(index) {
    listaRoles.splice(index, 1);

    actualizarTablaRoles();

    /*Configuración de la ventana de confirmación*/
    let isBoss = confirm("¿Deseas borrar el rol?");

    /*Configuración de alerta*/
    const AlertConfig = document.getElementById('liveToastBorrar')
    const toastEliminar = bootstrap.Toast.getOrCreateInstance(AlertConfig)
    toastEliminar.show()
}

function cancelarRoles() {
    /*Configuración de alerta*/
    const AlertConfig = document.getElementById('liveToastCancelar')
    const toastCancelar = bootstrap.Toast.getOrCreateInstance(AlertConfig)
    toastCancelar.show()
}

function ActivarDesactivarRoles(index) {
    listaRoles.splice(index, 1);

    actualizarTablaRoles();

    /*Configuración de la ventana de confirmación*/
    let isBoss = confirm("¿Deseas activar o desactivar el rol?");

    /*Configuración de alerta*/
    const AlertConfig = document.getElementById('liveToastActivarDesactivar')
    const toastActivarDesactivar = bootstrap.Toast.getOrCreateInstance(AlertConfig)
    toastActivarDesactivar.show()
}