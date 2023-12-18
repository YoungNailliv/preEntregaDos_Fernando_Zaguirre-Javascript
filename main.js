//Variables
let numeroOt = 1;
let idTrabajador = 0;
let idCliente = 0;
let clientes = [];
let trabajadores = [];
let ordenesDeTrabajos = [];
let encendido = true;
//Clientes

class Cliente {
    constructor(){
        this.idCliente = idCliente
        this.fechaIngreso = new Date().toDateString();
        this.nombreCliente = prompt("Ingresa el nombre del cliente:");
        this.rutCliente = prompt("Ingresa el rut  del cliente:");
        this.direccionCliente = prompt("Ingresa la direccion del cliente:");
        this.emailCliente = prompt("ingresa el correo del cliente:");
        this.telefonoCliente = prompt("Ingresa el telefono del cliente");
        this.personaReferenciaCliente = prompt("Algun contacto de referencia del cliente:");
    };

}


//Funcion para agregar clientes
const agregarUsuario = () => {
    const nuevoCliente = new Cliente();
    idCliente++;
    clientes.push(nuevoCliente);
}
//Funcion que elimina clientes
const eliminarCliente = () => {
    if(clientes.length > 0){
        let clienteEliminado = parseInt(prompt("Ingresa el ID del usuario a eliminar"));
    
        if(clientes.some(cliente => cliente.idCliente === clienteEliminado)){
            let tempList = clientes.filter(cliente => cliente.idCliente !== clienteEliminado);
            alert("Cliente eliminado!")
            clientes = tempList;
        }else{
            alert("Ese ID no existe")
            menuClientes();
        };
    }else{
        alert("No hay clientes ingresados")
    }

}
//Muestra una lista de todos los cliente y sus datos
const mostrarClientes =() => {
    if(clientes.length > 0){
        for(let cliente of clientes){
            console.log(`Nombre: ${cliente.nombreCliente}\n
            Id: ${cliente.idCliente}\n
            Rut: ${cliente.rutCliente}\n
            Fecha de ingreso: ${cliente.fechaIngreso}\n
            Direccion: ${cliente.direccionCliente}\n
            Email: ${cliente.emailCliente}\n
            Telefono: ${cliente.telefonoCliente}\n
            Persona referencia: ${cliente.personaReferenciaCliente}\n\n`);
        }
    }else{
        alert("No hay clientes ingresados")
    }
}

//Muestra solo una lista de los nombres de los clientes
const listaNombresClientes = () => {
    let tempListNombresClientes = clientes.map((cliente) => cliente.nombreCliente);
    console.log(tempListNombresClientes.join("\n"));
    alert("Mira la consola para ver la lista de clientes");
}

//Trabajadores

class Trabajador {
    constructor(){
        this.idTrabajador = idTrabajador;
        this.fechaIngresoTrabajador = new Date().toDateString();
        this.inicioContrato = prompt("Ingresa fecha del inicio del contrato")
        this.nombreTrabajador = prompt("Ingresa el nombre del Trabajador:");
        this.rutTrabajador = prompt("Ingresa el rut  del Trabajador:");
        this.cargoTrabajador = prompt("Ingresa cargo del trabajador:");
    };
}
//Agregar Trabajadores
const agregarTrabajador = () => {
    const nuevoTrabajador = new Trabajador();
    idTrabajador++;
    trabajadores.push(nuevoTrabajador);
}
//Eliminar trabajadores
const eliminarTrabajador = () => {
    if(trabajadores.length > 0){
        let trabajadorEliminado = parseInt(prompt("Ingresa el ID del trabajadore a eliminar"));
    
        if(trabajadores.some(trabajador => trabajador.idTrabajador === trabajadorEliminado)){
            let tempList = trabajadores.filter(trabajador => trabajador.idTrabajador !== trabajadorEliminado);
            alert("Trabajador eliminado!")
            trabajadores = tempList;
        }else{
            alert("Ese ID no existe")
            menuClientes();
        };
    }else{
        alert("No hay trabajadores ingresados");
    };
};
//Muestra una lista de todos los trabajadores y sus datos
const mostrarTrabajadores =() => {
    if(trabajadores.length > 0){
        for(let trabajador of trabajadores){
            console.log(`Nombre: ${trabajador.nombreTrabajador}\n
            Id: ${trabajador.idTrabajador}\n
            Rut: ${trabajador.rutTrabajador}\n
            Fecha de ingreso: ${trabajador.fechaIngresoTrabajador}\n
            Inicio contrato: ${trabajador.inicioContrato}\n
            Cargo: ${trabajador.cargoTrabajador}\n\n`);
        }
    }else{
        alert("No hay trabajadores ingresados")
    }
}
//Muestra una lista solo de los nombres de los trabajadores
const listaNombresTrabajadores = () => {
    let tempListNombresTrabajadores = trabajadores.map((trabajador) => trabajador.nombreTrabajador);
    console.log(tempListNombresTrabajadores.join("\n"));
    alert("Mira la consola para ver la lista de trabajadores");
}

//Ordenes de trabajo
class OT {
    constructor(clienteOt,trabajoARealizar,valorOt,trabajadorOt,costoOt,descripcionOt){
        this.numeroOt = numeroOt;
        this.fechaOt = new Date().toDateString();
        this.clienteOt = clienteOt;
        this.trabajoARealizarOt = trabajoARealizar;
        this.valorOt = valorOt;
        this.trabajadorOt = trabajadorOt;
        this.costoOt = costoOt;
        this.estadoOt = "Pendiente";
        this.descripcionOt = descripcionOt;
    }
    cambiarEstado(nuevoEstado){
        this.estadoOt = nuevoEstado;
    }
    cambiarDescripcion(nuevaDescripcion){
        this.descripcionOt = nuevaDescripcion;
    }
}

//Chequeo si el cliente existe cliente para agregarlo a una orden de trabajo y devuelve el objeto cliente para agregarlo a la ot
const checkCliente = () => {
    let clienteOt = prompt("Escribe nombre cliente OT:\n");
    if ((clientes.some((cliente) => clienteOt.toLowerCase() === cliente.nombreCliente.toLowerCase()))){
        clienteOt = clientes.find(cliente => cliente.nombreCliente.toLowerCase() == clienteOt.toLowerCase());
        console.log(clienteOt)
        return clienteOt;
    }else{
        alert("Ingresa un cliente ingresado o deja el espacio en blanco");
        checkCliente();
    }
};
//Chequeo si el trabajador existe cliente para agregarlo a una orden de trabajo y devuelve el objeto trabajador para agregarlo a la ot
const checkTrabajador = () => {
    let trabajadorOt = prompt("Escribe Nombre Trabajador Asignado:\n");
    if ((trabajadores.some((trabajador) => trabajadorOt.toLowerCase() === trabajador.nombreTrabajador.toLowerCase()))){
        trabajadorOt = trabajadores.find(trabajador => trabajador.nombreTrabajador.toLowerCase() == trabajadorOt.toLowerCase());
        return trabajadorOt;
    }else{
        alert("Ingresa un trabajador ingresado o deja el espacio en blanco");
        checkTrabajador();
    }
}
//Chequea si lo introducido en el valor de la ot es un numero y mayor que 0
const checkValor = () => {
    let valorOt = parseInt(prompt("Ingresa el valor de la OT en pesos"));
    if (!isNaN(valorOt) && valorOt > 0){
        return valorOt;
    }else{
        alert("Solo puedes ingresar numeros");
        checkValor();
    }
}
//Chequea si lo introducido en el costo de la ot es un numero y mayor que 0
const checkCosto = () => {
    let costoOt = parseInt(prompt("Ingresa el costo de la OT en pesos (Materiales,etc...)\n"));
    if (!isNaN(costoOt) && costoOt > 0){
        return costoOt;
    }else{
        alert("Solo puedes ingresar numeros");
        checkCosto();
    }
}
//Menu de las opciones de los estados de la ot
const estadosOrdenesDeTrabajo = () => {
    let nuevoEstado = parseInt(prompt("Elige el nuevo estado de la Ot\n1.- Pagada\n2.-Pendiente\n3.-Nula"));
    switch (nuevoEstado) {
        case 1:
            return "Pagada";
        case 2:
            return "Pendiente";
        case 3:
            return "Nula";    
        default:
            alert("Ingresa una opcion correcta");
            estadosOrdenesDeTrabajo();
            break;
    }
}
//Agregar una Ot
const agregarOt = () => {
    listaNombresClientes();
    let clienteOt = checkCliente();
    let trabajoARealizar = prompt("Trabajo a realizar:\n");
    let valorOt = checkValor();
    listaNombresTrabajadores();
    let trabajadorOt = checkTrabajador();   
    let costoOt = checkCosto();
    let descripcionOt = prompt("Ingresa una descripcion del trabajo que se realizo")
    let nuevaOt = new OT(clienteOt,trabajoARealizar,valorOt,trabajadorOt,costoOt,descripcionOt);
    numeroOt++;
    ordenesDeTrabajos.push(nuevaOt);
}
//Cambiar el estado de una ot
const cambiarEstadoOt = () => {
    alert("Mira en la consola las OT");
    mostrarOt();
    let numeroOtACambiar = parseInt(prompt("Ingresa el numero de la OT que deseas cambiar el estado: "));
    let otEncontrada = ordenesDeTrabajos.find((ot) => ot.numeroOt === numeroOtACambiar);
    if (otEncontrada){
        let nuevoEstado = estadosOrdenesDeTrabajo();
        otEncontrada.cambiarEstado(nuevoEstado);
    }else{
        alert(`No se encontro la ot numero ${numeroOtACambiar}`);
    };
}
//Cambiar la descripcion de una ot
const cambiarDescripcionOt = () => {
    alert("Mira en la consola las OT");
    mostrarOt();
    let numeroOtACambiar = parseInt(prompt("Ingresa el numero de la OT que deseas cambiar la descripcion: "));
    let otEncontrada = ordenesDeTrabajos.find((ot) => ot.numeroOt === numeroOtACambiar);
    if (otEncontrada){
        let nuevaDescripcion = prompt("Ingresa una nueva descripcion");
        otEncontrada.cambiarDescripcion(nuevaDescripcion);
    }else{
        alert(`No se encontro la ot numero ${numeroOt}`);
    };
}

//Mostrar resumen de las ot(Ordenes de trabajo)
const mostrarOt =() => {

    if(ordenesDeTrabajos.length > 0){
        for(let ot of ordenesDeTrabajos){
            console.log(`Numero de Orden de Trabajo: ${ot.numeroOt}\t Fecha: ${ot.fechaOt}\n
            Cliente: ${ot.clienteOt.nombreCliente}\t Direccion: ${ot.clienteOt.direccionCliente} \t Telefono: ${ot.clienteOt.telefonoCliente}
            Trabajo a Realizar: ${ot.trabajoARealizarOt}\n
            Trabajador Designado: ${ot.trabajadorOt.nombreTrabajador}\n
            Descripcion: ${ot.descripcionOt}\n
            Costo Ot: ${ot.costoOt}\n
            Estado Ot: ${ot.estadoOt}\n`);
        }
    }else{
        alert("No hay Ordenes de Trabajo");
    };
}

//Busqueda OT

const filtrarOtPorCliente = () => {
    mostrarClientes();
    alert("Mira la lista de clientes en la consola");
    let clienteBuscado = prompt("Ingresa el nombre del cliente por el que quieres filtrar las OT")
    let clientesFiltrados = ordenesDeTrabajos.filter((ot) => ot.clienteOt.nombreCliente == clienteBuscado);
    if(clientesFiltrados.length > 0){
        for(let ot of clientesFiltrados){
            console.log(`Numero de Orden de Trabajo: ${ot.numeroOt}\t Fecha: ${ot.fechaOt}\n
            Cliente: ${ot.clienteOt.nombreCliente}\t Direccion: ${ot.clienteOt.direccionCliente} \t Telefono: ${ot.clienteOt.telefonoCliente}
            Trabajo a Realizar: ${ot.trabajoARealizarOt}\n
            Trabajador Designado: ${ot.trabajadorOt}\n
            Descripcion: ${ot.descripcionOt}\n
            Costo Ot: ${ot.costoOt}\n
            Estado Ot: ${ot.estadoOt}\n`);
        }
    }else{
        alert("No hay Ordenes de Trabajo con ese nombre de cliente");
    };
}



//Resumen Financiero

const resumenFinanciero = () => {
    let ordenesDeTrabajoPagadas = ordenesDeTrabajos.filter((ot) => ot.estadoOt === "Pagada");
    let ordenesDeTrabajoResumen = ordenesDeTrabajos.filter((ot) => ot.estadoOt !== "Nula");
    let sumaTotalCostoOrdenes = ordenesDeTrabajoResumen.reduce((total, ot) => total + ot.costoOt,0);
    let sumaTotalOrdenesPagadas = ordenesDeTrabajoPagadas.reduce((total, ot) => total + ot.valorOt,0);
    let sumaTotalOrdenes = ordenesDeTrabajoResumen.reduce((total, ot) => total + ot.valorOt,0);
    let balanceTeorico = sumaTotalOrdenes - sumaTotalCostoOrdenes;
    let balanceReal = sumaTotalOrdenesPagadas - sumaTotalCostoOrdenes;
    let porcentajeOrdenesPagadas = Math.round((ordenesDeTrabajoPagadas.length/ordenesDeTrabajoResumen.length*100));

    console.log(
        `
        Total de ordenes realizadas: ${ordenesDeTrabajoResumen.length}
        Total de Ordenes pagadas: ${ordenesDeTrabajoPagadas.length}
        Estan pagadas el : ${porcentajeOrdenesPagadas.toFixed(2)}%
        Venta Total: $${sumaTotalOrdenes}
        Ganancia Teorica: $${balanceTeorico}
        Ganancia Real: $${balanceReal}
        `
        )
    alert("Revisa tu consola para ver el resumen");
}


//Menus
const menuFiltradoOt = () => {
    let opcionMenu = parseInt(prompt("Filtrado de ordenes de trabajo - Ingresa una opcion\n1.- Mostrar Ot\n2.-Filtrar por nombre cliente\n3.-Salir"));
    switch (opcionMenu){
        case 1:
            mostrarOt();
            menuFiltradoOt();
            break;
        case 2:
            filtrarOtPorCliente();
            menuFiltradoOt();
            break;
        case 3:
            menuOrdenesDeTrabajo();
            break;
        default:
            menuFiltradoOt();
            break;
    }; 
};


const menuClientes = () => {
    let opcionMenu = parseInt(prompt("Menu Clientes - Ingresa una opcion\n1.- Agregar nuevo cliente\n2.-Eliminar cliente\n3.-Ver listado de clientes\n4.-Salir"));
    switch (opcionMenu){
        case 1:
            agregarUsuario();
            menuClientes();
            break;
        case 2:
            eliminarCliente();
            menuClientes();
            break;
        case 3:
            mostrarClientes();
            menuClientes();
            break;
        case 4:
            menuPrincipal();
            break;
        default:
            menuClientes();
            break;
    }; 
};

const menuTrabajador = () => {
    let opcionMenu = parseInt(prompt("Menu Trabajadores - Ingresa una opcion\n1.- Agregar nuevo trabajador\n2.-Eliminar trabajador\n3.-Ver listado de trabajadores\n4.-Salir"));
    switch (opcionMenu){
        case 1:
            agregarTrabajador();
            menuTrabajador();
            break;
        case 2:
            eliminarTrabajador();
            menuTrabajador();
            break;
        case 3:
            mostrarTrabajadores();
            menuTrabajador();
            break;
        case 4:
            menuPrincipal();
            break;
        default:
            menuTrabajador();
            break;
    }; 
};

const menuOrdenesDeTrabajo = () => {
    let opcionMenu = parseInt(prompt("Menu Ordenes de Trabajo - Ingresa una opcion\n1.- Agregar Orden de Trabajo\n2.- Filtrado Ordenes de trabajo\n3.- Cambiar Estado\n4.- Cambiar Descripcion\n5.- Salir"));
    switch (opcionMenu){
        case 1:
            agregarOt();
            menuOrdenesDeTrabajo();
            break;
        case 2:
            menuFiltradoOt();
            break;
        case 3:
            cambiarEstadoOt();
            menuOrdenesDeTrabajo();
            break;
        case 4:
            cambiarDescripcionOt();
            menuOrdenesDeTrabajo();
            break;
        case 5:
            menuPrincipal();
            break;
        default:
            alert("Ingresa una opcion valida")
            menuOrdenesDeTrabajo();
            break;
    }; 
};



const menuPrincipal = () => {
    let opcionMenu = parseInt(prompt("Programa de Gestion Zaen Climatizacion - Ingresa una opcion\n1.- Ordenes de trabajo\n2.-Clientes\n3.-Trabajadores\n4.-Resumen Financiero\n5.-Salir"));
    switch (opcionMenu){
        case 1:
            if(clientes.length > 0 && trabajadores.length > 0){
                menuOrdenesDeTrabajo();
            }else{
                alert("Falta agregar un trabajador, cliente o ambos");
                menuPrincipal();    
            }
            break;
        case 2:
            menuClientes();
            break;
        case 3:
            menuTrabajador();
            break;
        case 4:
            resumenFinanciero();
            menuPrincipal();
            break;
        case 5:
            return;
        default:
            menuPrincipal();
            break;
    };
};

menuPrincipal();