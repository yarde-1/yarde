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

<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="css/styles.css">
    <script src="JS/script.js"></script>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
</head>

<body>
    <div class="container">
        <h1 class="mt-5 text-center">Carreras</h1>

        <div class="card my-3">
            <div class="card-header">
                <h2>Datos del Conductor</h2>
            </div>
            <div class="card-body">
                <form>
                    <div class="form-group">
                        <label for="con-rut">RUT:</label>
                        <input type="text" class="form-control" id="con-rut" name="con-rut"
                            placeholder="Ej: xx.xxx.xxx-x">
                    </div>
                    <div class="form-group">
                        <label for="con-nom">Nombre:</label>
                        <input type="text" class="form-control" id="con-nom" name="con-nom"
                            placeholder="Ej: Juan Alberto">
                    </div>
                    <div class="form-group">
                        <label for="con-ape">Apellido:</label>
                        <input type="text" class="form-control" id="con-ape" name="con-ape"
                            placeholder="Ej: Colina Marin">
                    </div>
                    <div class="form-group">
                        <label for="con-edad">Edad:</label>
                        <input type="number" class="form-control" id="con-edad" name="con-edad" placeholder="Ej: 21">
                    </div>
                    <button type="button" class="btn btn-primary" onclick="addConductor()">Agregar</button>
                </form>
            </div>
        </div>
        
        <!---->
        <script>
            function addConductor() {
                var rut = document.getElementById('con-rut');
                var nombre = document.getElementById('con-nom');
                var apellido = document.getElementById('con-ape');
                var edad = document.getElementById('con-edad');
        
                // Remover cualquier clase de error existente
                rut.classList.remove('is-invalid');
                nombre.classList.remove('is-invalid');
                apellido.classList.remove('is-invalid');
                edad.classList.remove('is-invalid');
        
                // Validar RUT en formato chileno
                if (!validarRutChileno(rut.value.trim())) {
                    rut.classList.add('is-invalid');
                    return;
                }
        
                // Validar otros campos
                if (nombre.value.trim() === '') {
                    nombre.classList.add('is-invalid');
                    return;
                }
        
                if (apellido.value.trim() === '') {
                    apellido.classList.add('is-invalid');
                    return;
                }
        
                if (edad.value.trim() === '') {
                    edad.classList.add('is-invalid');
                    return;
                }
        
                // Si todos los campos son válidos, puedes hacer lo que necesites
                // Por ejemplo:
                // enviarFormulario();
                // agregarConductorALista(rut.value, nombre.value, apellido.value, edad.value);
            }
        
            // Función para validar RUT chileno
            function validarRutChileno(rut) {
                var regex = /^\d{1,2}\.\d{3}\.\d{3}-[0-9kK]{1}$/;
                return regex.test(rut);
            }
        </script>
        
        
        <!---->

        <div class="card my-3">
            <div class="card-header">
                <h2>Datos del Auto</h2>
            </div>
            <div class="card-body">
                <form>
                    <div class="form-group">
                        <label for="a-pt">Patente:</label>
                        <input type="text" class="form-control" id="a-pt" name="a-pt" placeholder="Ej: BBCL34">
                    </div>
                    <div class="form-group">
                        <label for="a-mar">Marca:</label>
                        <input type="text" class="form-control" id="a-mar" name="a-mar" placeholder="Ej: Subaru">
                    </div>
                    <div class="form-group">
                        <label for="a-mod">Modelo:</label>
                        <input type="text" class="form-control" id="a-mod" name="a-mod" placeholder="Ej: Crosstrek">
                    </div>
                    <div class="form-group">
                        <label for="a-color">Color del auto:</label>
                        <input type="text" class="form-control" id="a-color" name="a-color" placeholder="Ej: Plateado">
                    </div>
                    <div class="form-group">
                        <label for="a-año">Año del auto:</label>
                        <input type="number" class="form-control" id="a-año" name="a-año" placeholder="Ej: 2024">
                    </div>
                    <button type="button" class="btn btn-primary" onclick="addAuto()">Agregar</button>
                </form>
            </div>
        </div>
        <div class="card my-3">
            <div class="card-header">
                <h2>Agregar Carrera</h2>
            </div>
            <div class="card-body">
                <form>
                    <div class="form-group">
                        <label for="c-numC">Numero de Carrera:</label>
                        <input type="text" class="form-control" id="c-numC" name="c-numC"
                            placeholder="Numero de carrera:" placeholder="Ej: 12">
                    </div>
                    <div class="form-group">
                        <label for="c-fecha">Fecha:</label>
                        <input type="date" class="form-control" id="c-fecha" name="c-fecha"
                            placeholder="Fecha de la carrera:">
                    </div>
                    <div class="form-group">
                        <label for="c-dirc">Dirección:</label>
                        <input type="text" class="form-control" id="c-dirc" name="c-dirc" placeholder="Direccion:">
                    </div>
                    <button type="button" class="btn btn-primary" onclick="addCarrera()">Agregar Carrera</button>

                    <div id="participantes-container">
                        <h4>Añadir participante a la carrera</h4>

                        <div class="form-group participante">
                            <label for="c-rutCon">Numero de carrera a participar:</label>
                            <input type="text" class="form-control" name="c-numC" placeholder="A12">
                            <label for="c-rutCon">RUT del Conductor:</label>
                            <input type="text" class="form-control" name="c-rutCon" placeholder="Ej: xx.xxx.xxx-x">
                            <label for="c-auto">Patente del Auto:</label>
                            <input type="text" class="form-control" name="c-auto" placeholder="Ej: BBCL34">
                        </div>
                    </div>
                    <button type="button" class="btn btn-secondary" onclick="addParticipante()">Agregar
                        Participante</button>
                </form>
            </div>
        </div>
        <!--busqueda-->
        <div class="card my-3">
            <div class="card-header">
                <h2>Buscar Carrera por Número</h2>
            </div>
            <div class="card-body">
                <form>
                    <div class="form-group">
                        <label for="b-numCarrera">Número de Carrera:</label>
                        <input type="text" class="form-control" id="b-numCarrera" name="b-numCarrera"
                            placeholder="Ej: A12">
                    </div>
                    <button type="button" class="btn btn-primary" onclick="findCarrera()">Buscar</button>
                </form>
                <div class="mt-3">
                    <p id="rC-numCarrera"></p>
                    <p id="rC-fecha"></p>
                    <p id="rC-direccion"></p>
                    <ul id="rC-participantes"></ul>
                </div>
            </div>
        </div>

        <div class="card my-3">
            <div class="card-header">
                <h2>Buscar Conductor por RUT</h2>
            </div>
            <div class="card-body">
                <form>
                    <div class="form-group">
                        <label for="b-rut">RUT:</label>
                        <input type="text" class="form-control" id="b-rut" name="b-rut" placeholder="Ej: xx.xxx.xxx-x">
                    </div>
                    <button type="button" class="btn btn-primary" onclick="findConductor()">Buscar</button>
                </form>
                <div class="mt-3">
                    <p id="rC-rutC"></p>
                    <p id="rC-nombreC"></p>
                    <p id="rC-edadC"></p>
                </div>
            </div>
        </div>
        <div class="card my-3">
            <div class="card-header">
                <h2>Buscar Auto por Patente</h2>
            </div>
            <div class="card-body">
                <form>
                    <div class="form-group">
                        <label for="b-pat">Patente:</label>
                        <input type="text" class="form-control" id="b-pat" name="b-pat" placeholder="Ej: BBCL34">
                    </div>
                    <button type="button" class="btn btn-primary" onclick="findAuto()">Buscar</button>
                </form>
                <div class="mt-3">
                    <p id="rA-patA"></p>
                    <p id="rA-marcA"></p>
                    <p id="rA-modA"></p>
                    <p id="rA-colorA"></p>
                    <p id="rA-añoA"></p>

                </div>
            </div>
        </div>
    </div>
    <!--eliminar-->
    <div class="card my-3">
        <div class="card-header">
            <h2>Eliminar Participante por RUT</h2>
        </div>
        <div class="card-body">
            <form>
                <div class="form-group">
                    <label for="e-rut">RUT:</label>
                    <input type="text" class="form-control" id="e-rut" name="e-rut" placeholder="Ej: xx.xxx.xxx-x">
                </div>
                <button type="button" class="btn btn-danger" onclick="deleteParticipante()">Eliminar</button>
            </form>
            <div class="mt-3">
                <p id="rE-result"></p>
            </div>
        </div>
        
    </div>
    

</body>

</html>
