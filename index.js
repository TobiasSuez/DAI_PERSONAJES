import PersonajesServices from './Services/Personajes-services.js'
import Pelicula from './modulos/Pelicula.js'
import Personajes from './modulos/Personajes.js'


//await test_getAll();
//await test_getById();
//await test_insert();
//await test_update();
//await test_deleteById();
await Test_Detalles();
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
    data = await svc.getById(3);
    console.log(data);
    
}

process.exit();
