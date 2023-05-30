let listaProductos = [];

function agregarProductos() {
    /*Guardar Productos*/
    let nombre = document.getElementById("nombre").value;
    let descripcion = document.getElementById("descripcion").value;
    let precio = document.getElementById("precio").value;
    let estado = document.getElementById("estado_text").value;

    let objetoProductos =
    {
        nombre: nombre,
        descripcion: descripcion,
        precio: precio,
        estado: estado
    };

    listaProductos.push(objetoProductos);
    actualizarTablaProductos();
}

function actualizarTablaProductos() {
    let tabla = document.getElementById("tablaProductos");
    tabla.innerHTML = "";

    for (let i = 0; i < listaProductos.length; i++) {
        let row = tabla.insertRow(i);
        let nombreCell = row.insertCell(0); 
        let descripcionProducto = row.insertCell(1);
        let precioCell = row.insertCell(2);
        let estadoProducto = row.insertCell(3);
        let accionesProdCell = row.insertCell(4);

        nombreCell.innerHTML = listaProductos[i].nombre;
        descripcionProducto.innerHTML = listaProductos[i].descripcion;
        precioCell.innerHTML = listaProductos[i].precio;
        estadoProducto.innerHTML = listaProductos[i].estado;

        const toastLiveExample = document.getElementById('liveToastGuardar')
        const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
        toastBootstrap.show()

        accionesProdCell.innerHTML =
            '<button style="background-color: #ABEBC6; text-align: center; border-color: #ABEBC6; color: black; border-radius: 5px; font-family: Ubuntu Condensed, sans-serif;" type="button" onclick="editarProducto(' + i + ')"><i class="bi bi-pencil-square"></i><b> Editar</b></button> <button style="background-color: #E74C3C; text-align: center; border-color: #E74C3C; color: black; border-radius: 5px; font-family: Ubuntu Condensed, sans-serif;" type="button" onclick="eliminarProducto(' + i + ')"><i class="bi bi-trash"></i><b> Eliminar</b></button> <button style="background-color: #5499C7; text-align: center; border-color: #5499C7; color: black; border-radius: 5px; font-family: Ubuntu Condensed, sans-serif;" type="button" onclick="activarDesactivar(' + i + ')"><i class="bi bi-question-circle"></i><b> Activar / Desactivar</b></button>';
    }
}

function editarProducto(index) {
    let nombre = prompt("Nombre", listaProductos[index].nombre);
    let descripcion = prompt("Descripción", listaProductos[index].descripcion);
    let precio = prompt("Precio", listaProductos[index].precio);
    let estado = prompt("Estado", listaProductos[index].estado);

    listaProductos[index].nombre = nombre;
    listaProductos[index].descripcion = descripcion;
    listaProductos[index].precio = precio;
    listaProductos[index].estado = estado;

    actualizarTablaProductos();

    /*Configuración de alerta*/
    const toastLiveExample = document.getElementById('liveToastEditar')
    const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
    toastBootstrap.show()
}

function eliminarProducto(index) {
    listaProductos.splice(index, 1);

    actualizarTablaProductos();

    /*Configuración de la ventana de confirmación*/
    let isBoss = confirm("¿Deseas borrar el producto?");

    /*Configuración de alerta*/
    const toastLiveExample = document.getElementById('liveToastBorrar')
    const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
    toastBootstrap.show()
}

function cancelarProducto() {
    /*Configuración de alerta*/
    const toastLiveExample = document.getElementById('liveToastCancelar')
    const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
    toastBootstrap.show()
}

function activarDesactivar(index){
    listaProductos.splice(index, 1);

    actualizarTablaProductos();

    /*Configuración de la ventana de confirmación*/
    let isBoss = confirm("¿Deseas borrar el producto?");

    /*Configuración de alerta*/
    const toastLiveExample = document.getElementById('liveToastActivarDesactivar')
    const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
    toastBootstrap.show()

}