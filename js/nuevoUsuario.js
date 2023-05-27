let lista = [];

function agregar() {

	/*Variables para guardar los registros*/
	let identificacion = document.getElementById("identificacion").value;
	let nombre = document.getElementById("nombre").value;
	let apellido = document.getElementById("apellido").value;
	let edad = document.getElementById("edad").value;
	let telefono = document.getElementById("telefono").value;
	let ciudad = document.getElementById("ciudad").value;

	let objeto =
	{
		identificacion: identificacion,
		nombre: nombre,
		apellido: apellido,
		edad: edad,
		telefono: telefono,
		ciudad: ciudad
	};
	lista.push(objeto);
	actualizarTabla();

	/*Configuración de alerta*/
	const toastTrigger = document.getElementById('liveToastBtn')
	const toastLiveExample = document.getElementById('liveToast')

	if (toastTrigger) {
		const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
		toastTrigger.addEventListener('click', () => {
			toastBootstrap.show()
		})
	}
}

function actualizarTabla() {
	let tabla = document.getElementById("tabla");
	tabla.innerHTML = "";
	for (let i = 0; i < lista.length; i++) {
		let row = tabla.insertRow(i);
		let identificacionCell = row.insertCell(0);
		let nombreCell = row.insertCell(1);
		let apellidoCell = row.insertCell(2);
		let edadCell = row.insertCell(3);
		let telefonoCell = row.insertCell(4);
		let ciudadCell = row.insertCell(5);
		let accionesCell = row.insertCell(6);

		identificacionCell.innerHTML = lista[i].identificacion;
		nombreCell.innerHTML = lista[i].nombre;
		apellidoCell.innerHTML = lista[i].apellido;
		edadCell.innerHTML = lista[i].edad;
		telefonoCell.innerHTML = lista[i].telefono;
		ciudadCell.innerHTML = lista[i].ciudad;
		accionesCell.innerHTML =
			'<button id="liveToastBtnEditar" style="background-color: #ABEBC6; text-align: center; border-color: #ABEBC6; color: black; border-radius: 5px; font-family: Ubuntu Condensed, sans-serif;" type="button" onclick="editar(' + i + ')"><b>Editar</b></button> <button id="liveToastBtnBorrar" style="background-color: #E74C3C; text-align: center; border-color: #E74C3C; color: black; border-radius: 5px" font-family: Ubuntu Condensed, sans-serif;" type="button" onclick="eliminar(' + i + ')"><b>Eliminar</b></button> <button id="liveToastBtnActivarDesactivar" style="background-color: #5499C7; text-align: center; border-color: #5499C7; color: black; border-radius: 5px" font-family: Ubuntu Condensed, sans-serif;" type="button" onclick="acti_desa(' + i + ')"><b>Activar / Desactivar</b></button>';
	}
}

function editar(index) {
	/*Variables para permitir editar los registros*/
	let nombre = prompt("Nombre", lista[index].nombre);
	let apellido = prompt("Apellido", lista[index].apellido);
	let edad = prompt("Edad", lista[index].edad);
	let telefono = prompt("Teléfono", lista[index].telefono);
	let ciudad = prompt("Ciudad", lista[index].ciudad);

	lista[index].nombre = nombre;
	lista[index].apellido = apellido;
	lista[index].edad = edad;
	lista[index].telefono = telefono;
	lista[index].ciudad = ciudad;

	actualizarTabla();

	/*Configuración de alerta*/
	const toastTrigger = document.getElementById('liveToastBtnEditar')
	const toastLiveExample = document.getElementById('liveToastEditar')

	if (toastTrigger) {
		const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
		toastTrigger.addEventListener('click', () => {
			toastBootstrap.show()
		})
	}

}

function eliminar(index) {
	lista.splice(index, 1);
	actualizarTabla();

	/*Configuración de la ventana de confirmación*/
	let isBoss = confirm("¿Deseas borrar el usuario?");
	/*alert(isBoss);*/

	/*Configuración de alerta*/
	const toastTrigger = document.getElementById('liveToastBtnBorrar')
	const toastLiveExample = document.getElementById('liveToastBorrar')

	if (toastTrigger) {
		const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
		toastTrigger.addEventListener('click', () => {
			toastBootstrap.show()
		})
	}

}

function cancelar() {

	/*Configuración de alerta*/
	const toastTrigger = document.getElementById('liveToastBtnC')
	const toastLiveExample = document.getElementById('liveToastC')

	if (toastTrigger) {
		const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
		toastTrigger.addEventListener('click', () => {
			toastBootstrap.show()
		})
	}
}

function acti_desa(index) {
	lista.splice(index, 1);
	actualizarTabla();

	/*Configuración de la ventana de confirmación*/
	let isBoss = confirm("¿Deseas activar o desactivar el usuario?");
	/*alert(isBoss);*/

	/*Configuración de alerta*/
	const toastTrigger = document.getElementById('liveToastBtnActivarDesactivar')
	const toastLiveExample = document.getElementById('liveToastActivarDesactivar')

	if (toastTrigger) {
		const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
		toastTrigger.addEventListener('click', () => {
			toastBootstrap.show()
		})
	}

}