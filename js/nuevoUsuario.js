let lista = [];

function agregar() {
	let identificacion = document.getElementById('identificacion').value;
	let nombre = document.getElementById("nombre").value;
	let edad = document.getElementById("edad").value;
	
	let objeto = {identificacion: identificacion, nombre: nombre, edad: edad};
	lista.push(objeto);
	actualizarTabla();
}

function actualizarTabla() {
	let tabla = document.getElementById("tabla");
	tabla.innerHTML = "";
	for (let i = 0; i < lista.length; i++) {
		let row = tabla.insertRow(i);
		let nombreCell = row.insertCell(0);
		let edadCell = row.insertCell(1);
		let accionesCell = row.insertCell(2);
		nombreCell.innerHTML = lista[i].nombre;
		edadCell.innerHTML = lista[i].edad;
		accionesCell.innerHTML = '<button type="button" onclick="editar(' + i + ')">Editar</button><button type="button" onclick="eliminar(' + i + ')">Eliminar</button>';
	}
}

function editar(index) {
	let nombre = prompt("Ingrese el nuevo nombre", lista[index].nombre);
	let edad = prompt("Ingrese la nueva edad", lista[index].edad);
	lista[index].nombre = nombre;
	lista[index].edad = edad;
	actualizarTabla();
}

function eliminar(index) {
	lista.splice(index, 1);
	actualizarTabla();
}
