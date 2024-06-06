//Cómo podemos añadir más participantes a una carrea y al buscar una carrera muestre los participantes y el auto de ella.
//eliminar por rut
//validaciones
class Conductor {
    constructor(rut, nombre, apellido, edad) {
        this._rut = rut;
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
    }

    get getRut() {
        return this._rut;
    }

    get getNombre() {
        return this._nombre;
    }

    get getApellido() {
        return this._apellido;
    }

    get getEdad() {
        return this._edad;
    }
}

class Auto{
    constructor(patente, marca, modelo, color, año){
        this._patente = patente;
        this._marca = marca;
        this._modelo = modelo;
        this._color = color;
        this._año = año
    }
    get getPatente(){
        return this._patente;
    }
    get getMarca(){
        return this._marca;
    }
    get getModelo(){
        return this._modelo;
    }
    get getColor(){
        return this._color;
    }
    get getAño(){
        return this._año
    }
}

class Carrera {
    constructor(numCarrera, fecha, direccion){
        this._numCarrera = numCarrera;
        this._fecha = fecha;
        this._direccion = direccion;
        this._participantes = [];
    }
    get getNumCarrera(){
        return this._numCarrera;
    }
    get getFecha(){
        return this._fecha;
    }
    get getDireccion(){
        return this._direccion;
    }
    get getParticipantes(){
        return this._participantes;
    }
    setParticipante(conductor){
        this._conductor = conductor
    }
    setAutos(auto){
        this._auto = auto
    }
}

let conductores = [];
let autos = [];
let carreras = [];
let participantes = {};

conductores.push(new Conductor("11.111.111-1", "Fanshesco", "Virgorini", 45));
conductores.push(new Conductor("22.222.222-2", "Carla", "Cristi", 23));
conductores.push(new Conductor("33.333.333-3", "Luis", "Martinez", 30));
conductores.push(new Conductor("44.444.444-4", "Ana", "Gonzalez", 34));
conductores.push(new Conductor("55.555.555-5", "Pedro", "Ramirez", 29));

autos.push(new Auto("aaaa11", "alo", "sipo", "Naranjo", 1800));
autos.push(new Auto("bbbb22", "nopo", "sipo", "Rojo", 1900));
autos.push(new Auto("cccc33", "pepe", "pepote", "Cafe", 2000));
autos.push(new Auto("dddd44", "Cyber", "Punk", "Amarillo", 2079));
autos.push(new Auto("eeee55", "shaaa", "meavola", "Verde", 2024));

console.log(conductores);

//validar rut
function validarRUT(rut) {
    let regex = /^\d{1,2}\.\d{3}\.\d{3}-[0-9kK]{1}$/;
    return regex.test(rut);
}

//Añadir objetos
let addConductor = function() {
    let rt = document.getElementById("con-rut").value;
    let nom = document.getElementById("con-nom").value;
    let ape = document.getElementById("con-ape").value;
    let edad = document.getElementById("con-edad").value;

    let isValid = true;

    if (!validarRUT(rt)) {
        document.getElementById("con-rut").classList.add("is-invalid");
        isValid = false;
    } else {
        document.getElementById("con-rut").classList.remove("is-invalid");
    }

    if (nom.trim() === '') {
        document.getElementById("con-nom").classList.add("is-invalid");
        isValid = false;
    } else {
        document.getElementById("con-nom").classList.remove("is-invalid");
    }

    if (ape.trim() === '') {
        document.getElementById("con-ape").classList.add("is-invalid");
        isValid = false;
    } else {
        document.getElementById("con-ape").classList.remove("is-invalid");
    }

    if (edad.trim() === '' || isNaN(edad) || edad <= 0) {
        document.getElementById("con-edad").classList.add("is-invalid");
        isValid = false;
    } else {
        document.getElementById("con-edad").classList.remove("is-invalid");
    }

    if (isValid) {
        let con = new Conductor(rt, nom, ape, parseInt(edad));
        conductores.push(con);
        alert("Conductor añadido");
        console.log(conductores);
        document.getElementById('conductor-form').reset();
        document.getElementById("con-rut").classList.remove("is-invalid");
        document.getElementById("con-nom").classList.remove("is-invalid");
        document.getElementById("con-ape").classList.remove("is-invalid");
        document.getElementById("con-edad").classList.remove("is-invalid");
    }  else {
        alert('Por favor, completa todos los campos.');
    }
}

///////////////////////////



//////////////////////////
//validacion auto
let addAuto = function() {
    let pt = document.getElementById("a-pt");
    let mar = document.getElementById("a-mar");
    let mod = document.getElementById("a-mod");
    let color = document.getElementById("a-color");
    let año = document.getElementById("a-año");

    let valid = true;

    if (!pt.value || !/^[A-Za-z]{4}\d{2}$/.test(pt.value) || pt.value.length !== 6) {
        pt.classList.add('is-invalid');
        valid = false;
    } else {
        pt.classList.remove('is-invalid');
    }

    if (!mar.value) {
        mar.classList.add('is-invalid');
        valid = false;
    } else {
        mar.classList.remove('is-invalid');
    }

    if (!mod.value) {
        mod.classList.add('is-invalid');
        valid = false;
    } else {
        mod.classList.remove('is-invalid');
    }

    if (!color.value) {
        color.classList.add('is-invalid');
        valid = false;
    } else {
        color.classList.remove('is-invalid');
    }

    if (!año.value) {
        año.classList.add('is-invalid');
        valid = false;
    } else {
        año.classList.remove('is-invalid');
    }

    if (valid) {
        let a = new Auto(pt.value, mar.value, mod.value, color.value, parseInt(año.value));
        autos.push(a);
        alert("Auto añadido");
        console.log(autos);
    } else {
        alert('Por favor, completa todos los campos.');
    }
};

function addCarrera() {
    let numC = document.getElementById("c-numC").value;
    let fechaInput = document.getElementById("c-fecha");
    let fechaValue = fechaInput.value;
    let direccionInput = document.getElementById("c-dirc");
    let direccionValue = direccionInput.value;

    let isValid = true;

    // Expresión regular para validar el formato del número de carrera (una letra seguida de hasta tres dígitos)
    let numRegex = /^[A-Za-z]\d{0,3}$/;

    // Expresión regular para validar si la fecha es un valor numérico
    let fechaRegex = /^\d{4}-\d{2}-\d{2}$/;

    // Expresión regular para validar el formato de la dirección (texto seguido de números, coma y texto)
    let direccionRegex = /^[A-Za-z\s]+\s\d+,\s[A-Za-z\s]+$/;

    // Validar el formato de entrada del número de carrera
    if (!numRegex.test(numC)) {
        isValid = false;
        document.getElementById("c-numC").classList.add("is-invalid"); // Agrega la clase "is-invalid" para resaltar en rojo
    } else {
        document.getElementById("c-numC").classList.remove("is-invalid"); // Elimina la clase "is-invalid" si la entrada es válida
    }

    // Validar el formato de entrada de la fecha
    if (!fechaRegex.test(fechaValue)) {
        isValid = false;
        fechaInput.classList.add("is-invalid"); // Agrega la clase "is-invalid" para resaltar en rojo
    } else {
        fechaInput.classList.remove("is-invalid"); // Elimina la clase "is-invalid" si la entrada es válida
    }

    // Validar el formato de entrada de la dirección
    if (!direccionRegex.test(direccionValue)) {
        isValid = false;
        direccionInput.classList.add("is-invalid"); // Agrega la clase "is-invalid" para resaltar en rojo
    } else {
        direccionInput.classList.remove("is-invalid"); // Elimina la clase "is-invalid" si la entrada es válida
    }

    // Si todos los campos son válidos, procede con el resto del código para agregar la carrera
    if (isValid) {
        // Crear un nuevo objeto de carrera con los datos ingresados
        let nuevaCarrera = new Carrera(numC, fechaValue, direccionValue);

        // Agregar la nueva carrera al arreglo de carreras
        carreras.push(nuevaCarrera);

        // Muestra un mensaje de confirmación
        alert("Carrera añadida");

        // Limpiar los campos del formulario después de agregar la carrera
        document.getElementById("c-numC").value = "";
        fechaInput.value = "";
        direccionInput.value = "";
    } else {
        alert('Por favor, completa todos los campos correctamente.');
    }
}



let addParticipante = function(){
    let numC = document.getElementById("p-numC").value;
    let rut = document.getElementById("p-rutCon").value;
    let patente = document.getElementById("p-auto").value;

    let carrera = carreras.find(carre => carre.numCarrera == numC);
    if(carrera !== undefined){
        let conductor = conductores.find(con => con.getRut() == rut);
        if (conductor !== undefined) {
            carrera.añadirConductor(conductor);
        }else{
            alert("Conductor no encontrado.");
        }

        let auto = autos.find(a => a.getPatente() == patente);
        if(auto !== undefined) {
            carrera.añadirAuto(auto);
        }else{
            alert("Auto no encontrado.");
        }

        alert("Participante y auto añadidos a la carrera.");
        console.log(carrera.participantes);
        console.log(carrera.autos);
        document.getElementById('participante-form').reset();
    }else{
        alert("Carrera no encontrada.");
    }
}

//Busqueda de objetos

let findConductor = function() {
    let rC = document.getElementById("b-rut").value;
    if (!validarRUT(rC)) {
        alert("RUT inválido. Por favor, ingrese un RUT válido en formato xx.xxx.xxx-x.");
        document.getElementById("b-rut").classList.add("is-invalid");
        return;
    } else {
        document.getElementById("b-rut").classList.remove("is-invalid");
    }
    
    let c = conductores.find(con => con.getRut === rC);
    if (c !== undefined) {
        alert("Conductor encontrado.");
        document.getElementById("rC-rutC").innerHTML = "<b>Rut: </b>" + c.getRut;
        document.getElementById("rC-nombreC").innerHTML = "<b>Nombre: </b>" + c.getNombre + " " + c.getApellido;
        document.getElementById("rC-edadC").innerHTML = "<b>Edad: </b>" + c.getEdad + " Años.";
    } else {
        alert("Conductor no encontrado.");
    }
}

//buscar por patente
let findAuto = function() {
    let pA = document.getElementById("b-pat").value;
    let a = autos.find(aut => aut.getPatente === pA);

    if (a !== undefined) {
        alert("Auto encontrado.");
        document.getElementById("rA-patA").innerHTML = "<b>Patente: </b>" + a.getPatente;
        document.getElementById("rA-marcA").innerHTML = "<b>Marca: </b>" + a.getMarca;
        document.getElementById("rA-modA").innerHTML = "<b>Modelo: </b>" + a.getModelo;
        document.getElementById("rA-colorA").innerHTML = "<b>Color: </b>" + a.getColor;
        document.getElementById("rA-añoA").innerHTML = "<b>Año: </b>" + a.getAño;
    } else {
        alert("Auto no encontrado.");
    }
};

function findCarrera() {
    let nC = document.getElementById("b-numC").value;
    let c = carreras.find(car => car.numCarrera == nC);
    if(c !== undefined){
        alert("Carrera encontrada.");
        document.getElementById("rC-numCar").innerHTML = "<b>Numero de Carrera: </b>" + c.numCarrera;
        document.getElementById("rC-fechaCar").innerHTML = "<b>Fecha: </b>" + c.fecha;
        document.getElementById("rC-dircCar").innerHTML = "<b>Direccion: </b>" + c.direccion;
        document.getElementById("rC-participantesCar").innerHTML = "<b>Participantes: </b>" + c.participantes.map(p => p.getNombre + " " + p.getApellido).join(", ");
        document.getElementById("rC-autosCar").innerHTML = "<b>Autos: </b>" + c.autos.map(a => a.getMarca + " " + a.getModelo).join(", ");
    }else{
        alert("Carrera no encontrada.");
    }
}

//validacion
//eliminar por rut 
let deleteCarreraByRut = function() {
    let rut = document.getElementById("d-rut").value;

    if (rut.trim() === '') {
        alert("Por favor, ingrese el Rut.");
        document.getElementById("d-rut").classList.add("is-invalid");
        return;
    } else {
        document.getElementById("d-rut").classList.remove("is-invalid");
    }
    
    let index = carreras.findIndex(carrera => carrera.getRut() === rut);
    if (index !== -1) {
        carreras.splice(index, 1);
        alert("Carrera eliminada correctamente.");
        console.log("Carrera eliminada:", rut);
        console.log("Lista de carreras actualizada:", carreras);
        document.getElementById('delete-form').reset();
    } else {
        alert("No se encontró ninguna carrera con ese Rut.");
    }
}

///
