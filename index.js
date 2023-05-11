import Pelicula from './modulos/Pelicula.js'
import Personajes from './modulos/Personajes.js'
import PeliculaServices from './Services/Peliculas-Services.js';
import PersonajesServices from './Services/Personajes-services.js';


//await test_getAll();
//await test_getById();
//await test_insert();
//await test_update();
//await test_deleteById();
//await Test_Detalles();
//await Buscar_x_Peso();
//await Buscar_x_Nombre();

/////////PELICULAS//////////

//await test_getAllPelis();
//await test_insertPELIS();
//await test_updatePELIS();
//await test_deleteByIdPELIS();
//await Test_DetallesPelis();
//await Buscar_x_Titulo();
//await getAllASCDESC();
/*

async function test_getAll() { 
    let svc = new PersonajesServices();
    let data;

    data = await svc.getAll();
    console.log(data);  //muestro todas las pizzas

    //console.log(data[0].Id);
    //console.log(data[0].id);
    //console.log(data[0].Id);
}

async function test_getById() {
    let svc = new PersonajesServices();
    let data;
    data = await svc.getById(2);
    console.log(data);
}

async function test_insert() {
    let svc = new PersonajesServices();
    let data;
    let NuevoPersonaje = new Personajes();

    NuevoPersonaje.Nombre = 'sapeeeeeee';
    NuevoPersonaje.Imagen = "";
    NuevoPersonaje.Edad = 750;
    NuevoPersonaje.Historia = 'Pizza con sabor a hamburguesa';
    NuevoPersonaje.Peso = 6;
    NuevoPersonaje.PeliculasSeriesAsociadas = 'CHUCHAAAAAAAAAAAA';
    console.log('\nNuevoPersonaje: ');
    console.log(NuevoPersonaje);

    data = await svc.insert(NuevoPersonaje);
    console.log(data);
}

async function test_update() {
    let svc = new PersonajesServices();
    let data;
    let ElPersonaje;

    ElPersonaje = await svc.getById(9);
    if (ElPersonaje != null) {
        ElPersonaje.IdPersonaje=4
        ElPersonaje.Nombre="A"
        ElPersonaje.Imagen="a"
        ElPersonaje.Edad = 1075;
        ElPersonaje.Historia="A"
        ElPersonaje.Peso=15
        ElPersonaje.PeliculasSeriesAsociadas="A"

        data = await svc.update(ElPersonaje);
        console.log(data);
    } else {
        console.log('\ElPersonaje: ');
        console.log(ElPersonaje);
    }
}

async function test_deleteById() {
    let svc = new PersonajesServices();
    let data;

    data = await svc.deleteById(9);
    console.log(data);
}

async function Test_Detalles(){
    let svc= new PersonajesServices();
    let data;
    data = await svc.getDetalles(6);
    console.log(data);
    
}

async function Buscar_x_Peso(){
    let svc= new PersonajesServices();
    let data;
    data = await svc.getByPeso(250);
    console.log(data);
    
}

async function Buscar_x_Nombre(){
    let svc= new PersonajesServices();
    let data;
    data = await svc.getByNombre("Perry");
    console.log(data);

}

/////////////////////PELICULAS//////////////////////////


async function test_getAllPelis() { 
    let svc = new PeliculaServices();
    let data;

    data = await svc.getAll();
    console.log(data);  //muestro todas las pizzas

    //console.log(data[0].Id);
    //console.log(data[0].id);
    //console.log(data[0].Id);
}

async function test_insertPELIS() {
    let svc = new PeliculaServices();
    let data;
    let NuevaPelicula = new Pelicula();

    NuevaPelicula.Titulo = 'sapeeeeeee';
    NuevaPelicula.Imagen = "sape.jpg";
    NuevaPelicula.Fecha_de_creacion = 2007-10-17;
    NuevaPelicula.Calificacion = 10;
    NuevaPelicula.Personajes_asociados = 6;
    console.log('\NuevaPelicula: ');
    console.log(NuevaPelicula);

    data = await svc.insert(NuevaPelicula);
    console.log(data);
}

async function test_updatePELIS() {
    let svc = new PeliculaServices();
    let data;
    let LaPeli;

    LaPeli = await svc.getById(4);
    if (LaPeli != null) {
        LaPeli.idPelicula=6
        LaPeli.Titulo="A"
        LaPeli.Imagen="a.jpg"
        LaPeli.Fecha_de_creacion = 2067-10-27;
        LaPeli.Calificacion=7
        LaPeli.Personajes_asociados=2

        data = await svc.update(LaPeli);
        console.log(data);
    } else {
        console.log('\LaPeli: ');
        console.log(LaPeli);
    }
}

async function test_deleteByIdPELIS() {
    let svc = new PeliculaServices();
    let data;

    data = await svc.deleteById(8);
    console.log(data);
}

async function Test_DetallesPelis(){
    let svc= new PeliculaServices();
    let data;
    data = await svc.getDetalles(6);
    console.log(data);
    
}

async function Buscar_x_Titulo(){
    let svc= new PeliculaServices();
    let data;
    data = await svc.getByNombre("ToyStory");
    console.log(data);

}

async function getAllASCDESC(){
    let svc= new PeliculaServices();
    let data;
    data = await svc.getAllASCDESC("DESC");
    console.log(data);

}



*/
/*



app.get('/characters',PersonajesServices.getAll(req,res),{
    res.send("HOLA")
})
app.get(' /characters?name=nombre',PersonajesServices.getByNombre(Nombre),{
    res.send(data)
})
app.get(' /characters?age=edad',PersonajesServices.getByEdad(Edad),{
    res.send(data)
})
app.get(' /characters?movies=idMovie',PersonajesServices.getDetalles(id),{
    res.send(data)
})
app.get('/movies',PeliculaServices.getAll(),{
    res.send(data)
})
app.get(' /movies?name=nombre',PeliculaServices.getByNombre(Nombre),{
    res.send(data)
})
app.get('/movies?order=ASC ',PeliculaServices.getAllASCDESC(ASC),{
    res.send(data)
})*/

import express from 'express'

var app = express();	// Create an express app

// Creamos una ruta para el camino por defecto
app.get('/characters', function(req, res) {
    async function test_getAll() { 
        let svc = new PersonajesServices();
        let data;
    
        data = await svc.getAll();
        //console.log(data);  //muestro todas las pizzas
    
     
        res.send(data)
    }
    test_getAll()
})

app.get('/insert', function(req, res) {
    async function test_insert() {
        let svc = new PersonajesServices();
        let data;
        let NuevoPersonaje = new Personajes();
    
        NuevoPersonaje.Nombre = 'sapeeeeeee';
        NuevoPersonaje.Imagen = "";
        NuevoPersonaje.Edad = 750;
        NuevoPersonaje.Historia = 'Pizza con sabor a hamburguesa';
        NuevoPersonaje.Peso = 6;
        NuevoPersonaje.PeliculasSeriesAsociadas = 2;
        console.log('\nNuevoPersonaje: ');
        console.log(NuevoPersonaje);
    
        data = await svc.insert(NuevoPersonaje);
        res.send(data)
    }
    test_insert()
})

app.get('/update', function(req, res) {
    async function test_update() {
        let svc = new PersonajesServices();
        let data;
        let ElPersonaje;
    
        ElPersonaje = await svc.getById(9);
        if (ElPersonaje != null) {
            ElPersonaje.IdPersonaje=4
            ElPersonaje.Nombre="A"
            ElPersonaje.Imagen="a"
            ElPersonaje.Edad = 1075;
            ElPersonaje.Historia="A"
            ElPersonaje.Peso=15
            ElPersonaje.PeliculasSeriesAsociadas=5
    
            data = await svc.update(ElPersonaje);
            console.log(data);
        } else {
            console.log('\ElPersonaje: ');
            console.log(ElPersonaje);
        }
        res.send(data)
    }
    test_update()
})

app.get('/delete', function(req, res) {
    async function test_deleteById() {
        let svc = new PersonajesServices();
        let data;
    
        data = await svc.deleteById(13);
        console.log(data);
        res.send(data)
    }
    test_deleteById()
})

app.get('/detalles', function(req, res) {
    async function Test_Detalles(){
        let svc= new PersonajesServices();
        let data;
        data = await svc.getDetalles(6);
        console.log(data);
        res.send(data)
    }
    Test_Detalles()
})

app.get('/movies', function(req, res) {
    async function test_getAllPelis() { 
        let svc = new PeliculaServices();
        let data;
    
        data = await svc.getAll();
        res.send(data)

    }
    
    test_getAllPelis()
})

app.get('/xNombre', function(req, res) {
    async function Buscar_x_Nombre(){
        let svc= new PersonajesServices();
        let data;
        data = await svc.getByNombre("Perry");
        console.log(data);
        res.send(data)
    }
    Buscar_x_Nombre()
})


app.get('/detallePelis', function(req, res) {
    async function Test_DetallesPelis(){
        let svc= new PeliculaServices();
        let data;
        data = await svc.getDetalles(6);
        console.log(data);
        res.send(data)
    }
    Test_DetallesPelis()
})
app.get('/insertPeli', function(req, res) {
    async function test_insertPELIS() {
        let svc = new PeliculaServices();
        let data;
        let NuevaPelicula = new Pelicula();
    
        NuevaPelicula.Titulo = 'sapeeeeeee';
        NuevaPelicula.Imagen = "sape.jpg";
        NuevaPelicula.Fecha_de_creacion = 2007-10-17;
        NuevaPelicula.Calificacion = 10;
        NuevaPelicula.Personajes_asociados = 6;
        console.log('\NuevaPelicula: ');
        console.log(NuevaPelicula);
    
        data = await svc.insert(NuevaPelicula);
        console.log(data);
        res.send(data)
    }
    test_insertPELIS()
})

app.get('/updatePelis ', function(req, res) {
    async function test_updatePELIS() {
        let svc = new PeliculaServices();
        let data;
        let LaPeli;
    
        LaPeli = await svc.getById(4);
        if (LaPeli != null) {
            
            LaPeli.idPelicula=4
            LaPeli.Titulo="A"
            LaPeli.Imagen="a.jpg"
            LaPeli.Fecha_de_creacion = 2067-10-27;
            LaPeli.Calificacion=7
            LaPeli.Personajes_asociados=2
    
            data = await svc.update(LaPeli);
            console.log(data);
            
        } else {
            console.log('\LaPeli: ');
            console.log(LaPeli);
        }
        res.send(data)
    }
    test_updatePELIS()
})

app.get('/deletePelis', function(req, res) {
    async function test_deleteByIdPELIS() {
        let svc = new PeliculaServices();
        let data;
    
        data = await svc.deleteById(1);
        res.send(data)
    }
    test_deleteByIdPELIS()
})

app.get('/movies?name=nombre', function(req, res) {
    async function Buscar_x_Titulo(){
        let svc= new PeliculaServices();
        let data;
        data = await svc.getByNombre("ToyStory");
        console.log(data);
        
    }
    Buscar_x_Titulo()
    res.send(data)

})
app.get('/movies?order=ASC', function(req, res) {
    async function getAllASCDESC(){
        let svc= new PeliculaServices();
        let data;
        data = await svc.getAllASCDESC("DESC");
        console.log(data);

    }
    getAllASCDESC()
    res.send(data)

})

// Iniciamos el servidor
app.listen(3000, function() {
    console.log('Example app listening on port 3000!');
})
