//Cómo podemos añadir más participantes a una carrea y al buscar una carrera muestre los participantes y el auto de ella.
//eliminar por rut
//validaciones
class Conductor{
    constructor(rut, nombre, apellido, edad){
        this._rut = rut;
        this._nombre = nombre;
        this._apellido= apellido;
        this._edad = edad;
    }

    get getRut(){
        return this._rut;
    }
    get getNombre(){
        return this._nombre;
    }
    get getApellido(){
        return this._apellido;   
    }
    get getEdad(){
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
    addParticipante(conductor, auto){
        this._participantes.push({ conductor, auto });
    }
}

let conductores = [];
let autos = [];
let carreras = [];

conductores.push(new Conductor(1-1, "Fanshesco", "Virgorini", 45));
conductores.push(new Conductor(1-2, "Carla", "Cristi", 23));
conductores.push(new Conductor(1-3, "Luis", "Martinez", 30));
conductores.push(new Conductor(1-4, "Ana", "Gonzalez", 34));
conductores.push(new Conductor(1-5, "Pedro", "Ramirez", 29));
conductores.push(new Conductor(1-6, "Maria", "Fernandez", 40));
conductores.push(new Conductor(1-7, "Jose", "Lopez", 31));
conductores.push(new Conductor(1-8, "Lucia", "Sanchez", 27));
conductores.push(new Conductor(1-9, "Miguel", "Diaz", 33));
conductores.push(new Conductor(1-10, "Elena", "Perez", 36));

console.log(conductores);

//Añadir objetos
let addConductor = function(){
    let rt = document.getElementById("con-rut").value;
    let nom = document.getElementById("con-nom").value;
    let ape = document.getElementById("con-ape").value;
    let edad = parseInt(document.getElementById("con-edad").value);
    let con = new Conductor(rt, nom, ape, edad);

    conductores.push(con);
    alert("Conductor añadido");
    console.log(conductores);
}

let addAuto = function(){
    let pt = document.getElementById("a-pt").value;
    let mar = document.getElementById("a-mar").value;
    let mod = document.getElementById("a-mod").value;
    let color = document.getElementById("a-color").value;
    let año = parseInt(document.getElementById("a-año").value);


    let a = new Auto(pt, mar, mod, color, año);

    autos.push(a);
    alert("Auto añadido");
    console.log(autos);
}

let addCarrera = function() {
    let numC = document.getElementById("c-numC").value;
    let fecha = document.getElementById("c-fecha").value;
    let dirc = document.getElementById("c-dirc").value;

    let carrera = new Carrera(numC, fecha, dirc);
    let conductorRut = document.getElementsByName("c-rutCon");
    let autoPatentes = document.getElementsByName("c-auto");

    for(let i = 0; i < conductorRut.length; i++){
        let rutCon = conductorRut[i].value;
        let autoPatente = autoPatentes[i].value;

        let conductor = conductores.find(con => con.getRut === rutCon);
        let auto = autos.find(aut => aut.getPatente === autoPatente);

        if(conductor && auto){
            carrera.addParticipante(conductor, auto);
        }
    }

    carreras.push(carrera);
    alert("Carrera añadida");
    console.log(carreras);
}

//Busqueda de objetos

let findConductor = function(){

    let rC = document.getElementById("b-rut").value;
    let c = conductores.find(con => con.getRut === rC);
    if(c != undefined){
        alert("Conductor encontrado.");
        document.getElementById("rC-rutC").innerHTML = "<b>Rut: </b>"+c.getRut;
        document.getElementById("rC-nombreC").innerHTML = "<b>Nombre: </b>"+c.getNombre+" "+c.getApellido;
        document.getElementById("rC-edadC").innerHTML = "<b>Edad: </b>"+c.getEdad+" Años.";
    }else{
        alert("Conductor no encontrado.");
    }
}

let findAuto = function(){

    let pA = document.getElementById("b-pat").value;
    let a = autos.find(aut => aut.getPatente === pA);
    if(a != undefined){
        alert("Auto encontrado.");
        document.getElementById("rA-patA").innerHTML = "<b>Patente: </b>"+a.getPatente;
        document.getElementById("rA-marcA").innerHTML = "<b>Marca: </b>"+a.getMarca;
        document.getElementById("rA-modA").innerHTML = "<b>Modelo: </b>"+a.getModelo;
        document.getElementById("rA-colorA").innerHTML = "<b>Color: </b>"+a.getColor;
        document.getElementById("rA-añoA").innerHTML = "<b>Año: </b>"+a.getAño;
    }else{
        alert("Auto no encontrado.");
    }
}

let findCarrera = function(){

    let nC = document.getElementById("b-numC").value;
    let c = carreras.find(car => car.getNumCarrera === nC);
    if(c != undefined){
        alert("Auto encontrado.");
        document.getElementById("rC-numCar").innerHTML = "<b>Numero de Carrera: </b>"+c.getNumCarrera;
        document.getElementById("rC-fechaCar").innerHTML = "<b>Fecha: </b>"+c.getFecha;
        document.getElementById("rC-dircCar").innerHTML = "<b>Direccion: </b>"+c.getDireccion;
        document.getElementById("rC-numCar").innerHTML = "<b>NumeroCarrera: </b>"+c.getNumCarrera;
    }else{
        alert("Carrera no encontrada.");
    }
}