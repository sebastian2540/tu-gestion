let listaPedidos = [];

function agregarPedido() {
    let fecha = document.getElementById("fecha_creacion").value;
    let codigo = document.getElementById("codigo_pedido").value;
    let cliente = document.getElementById("nombre_cliente").value;
    let mesa = document.getElementById("mesa_cliente").value;
    let estado = document.getElementById("estado_text").value;
    let comprobantePago = document.getElementById("codigo_pedido").value;
    let usuario = document.getElementById("usuario").value;

    let objetoPedido =
    {
        fecha: fecha,
        codigo: codigo,
        cliente: cliente,
        mesa: mesa,
        estado: estado,
        comprobantePago: comprobantePago,
        usuario: usuario
    }

    listaPedidos.push(objetoPedido);
    actualizarTablaPedidos();

    /*Configuración de alerta*/
    const AlertConfig = document.getElementById('liveToastGuardar')
    const toastGuardar = bootstrap.Toast.getOrCreateInstance(AlertConfig)
    toastGuardar.show()
}

function actualizarTablaPedidos() {
    let tabla = document.getElementById("tablaPedidos");
    tabla.innerHTML = "";

    for (let i = 0; i < listaPedidos.length; i++) {
        let row = tabla.insertRow(i);
        let fechaPedido = row.insertCell(0);
        let codigoPedido = row.insertCell(1);
        let clientePedido = row.insertCell(2);
        let mesaPedido = row.insertCell(3);
        let estadoPedido = row.insertCell(4);
        let comprobantePagoPedido = row.insertCell(5);
        let usuarioPedido = row.insertCell(6);
        let accionesPedido = row.insertCell(7);

        fechaPedido.innerHTML = listaPedidos[i].fecha;
        codigoPedido.innerHTML = listaPedidos[i].codigo;
        clientePedido.innerHTML = listaPedidos[i].cliente;
        mesaPedido.innerHTML = listaPedidos[i].mesa;
        estadoPedido.innerHTML = listaPedidos[i].estado;
        comprobantePagoPedido.innerHTML = listaPedidos[i].comprobantePago;
        usuarioPedido.innerHTML = listaPedidos[i].usuario;
        accionesPedido.innerHTML =
            '<button style="background-color: #ABEBC6; text-align: center; border-color: #ABEBC6; color: black; border-radius: 5px; font-family: Ubuntu Condensed, sans-serif;" type="button" onclick="editarPedido(' + i + ')"><i class="bi bi-pencil-square"></i><b> Editar</b></button> <button style="background-color: #E74C3C; text-align: center; border-color: #E74C3C; color: black; border-radius: 5px; font-family: Ubuntu Condensed, sans-serif;" type="button" onclick="eliminarPedido(' + i + ')"><i class="bi bi-trash"></i><b> Eliminar</b></button>';

        let fecha = document.getElementById("fecha_creacion").value = "";
        let codigo = document.getElementById("codigo_pedido").value = "";
        let cliente = document.getElementById("nombre_cliente").value = "";
        let mesa = document.getElementById("mesa_cliente").value = "";
        let estado = document.getElementById("estado_text").value = "";
        let comprobantePago = document.getElementById("codigo_pedido").value = "";
        let usuario = document.getElementById("usuario").value = "";
    }

}

function editarPedido(index) {
    let fecha = prompt("Fecha", listaPedidos[index].fecha);
    let cliente = prompt("Cliente", listaPedidos[index].cliente);
    let mesa = prompt("Mesa", listaPedidos[index].mesa);
    let estado = prompt("Estado", listaPedidos[index].estado);
    let usuario = prompt("Usuario", listaPedidos[index].usuario);

    listaPedidos[index].fecha = fecha;
    listaPedidos[index].cliente = cliente;
    listaPedidos[index].mesa = mesa;
    listaPedidos[index].estado = estado;
    listaPedidos[index].usuario = usuario;

    /*Configuración de alerta*/
    const AlertConfig = document.getElementById('liveToastEditar')
    const toastEditar = bootstrap.Toast.getOrCreateInstance(AlertConfig)
    toastEditar.show()

    actualizarTablaPedidos();
}

function eliminarPedido(index) {
    listaPedidos.splice(index, 1);

    actualizarTablaPedidos();

    /*Configuración de la ventana de confirmación*/
    let isBoss = confirm("¿Deseas borrar el pedido?");

    /*Configuración de alerta*/
    const AlertConfig = document.getElementById('liveToastBorrar')
    const toastEliminar = bootstrap.Toast.getOrCreateInstance(AlertConfig)
    toastEliminar.show()
}

function cancelarPedido() {
    /*Configuración de alerta*/
    const AlertConfig = document.getElementById('liveToastCancelar')
    const toastCancelar = bootstrap.Toast.getOrCreateInstance(AlertConfig)
    toastCancelar.show()
}

function cargaReporte() {
    /*Configuración de alerta*/
    const AlertConfig = document.getElementById('liveToastCargarReporte')
    const toastGuardar = bootstrap.Toast.getOrCreateInstance(AlertConfig)
    toastGuardar.show()
}
