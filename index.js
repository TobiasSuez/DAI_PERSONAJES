import Pelicula from './modulos/Pelicula.js'
import Personajes from './modulos/Personajes.js'
import PeliculaServices from './Services/Peliculas-Services.js';
import PersonajesServices from './Services/Personajes-services.js';


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
        data = await svc.getByNombre("Shrek");
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

app.get('/PelisAC ', function(req, res) {
    console.log("j");
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

app.get('/moviesName', function(req, res) {
    async function Buscar_x_Titulo(){
        let svc= new PeliculaServices();
        let data;
        data = await svc.getByNombre("ToyStory");
        console.log(data);
        res.send(data)
        
    }
    Buscar_x_Titulo()

})
app.get('/moviesorder', function(req, res) {
    async function getAllASCDESC(){
        let svc= new PeliculaServices();
        let data;
        data = await svc.getAllASCDESC("ASC");
        console.log(data);
        res.send(data)

    }
    getAllASCDESC()

})

// Iniciamos el servidor
app.listen(3000, function() {
    console.log('Example app listening on port 3000!');
})
