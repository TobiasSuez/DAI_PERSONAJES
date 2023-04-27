import config from '../dbconfig-env.js';
import sql from 'mssql';
class PersonajesServices{

getAll = async () => {
    let returnArray = null;
    console.log('Estoy en: Personaje.Servise.getAll()');
    try {
        let pool   = await sql.connect(config);
        let result = await pool.request().query("SELECT * from Personajes");
        returnArray = result.recordsets[0];
    }
    catch (error) {
        console.log(error);
    }
    return returnArray;
}
/*
getById = async (id) => {
    let returnEntity = null;
    console.log('Estoy en: PersonajeService.getById(id)');
    try {
        let pool   = await sql.connect(config);
        let result = await pool.request()
                            .input('pId', sql.Int, id)
                            .query('SELECT * FROM Personajes WHERE id = @pId');
        returnEntity = result.recordsets[0][0];
    } catch (error) {
        console.log(error);
    }
    return returnEntity;
}*/
/*
insert = async (Personaje) => {
    let rowsAffected = 0;
    console.log('Estoy en: Personajes-Service.insert(Personaje)');

    try {
        let pool = await sql.connect(config);
        let result = await pool.request()
            .input('pNombre'     , sql.NChar , Personaje?.nombre ?? '')
            .input('pLibreGluten', sql.Bit   , Personaje?.libreGluten ?? false)
            .input('pImporte'    , sql.Float , Personaje?.importe ?? 0)
            .input('pDescripcion', sql.NChar , Personaje?.descripcion ?? '')
            .query(`INSERT INTO Personajes (Nombre, LibreGluten, Importe, Descripcion) VALUES (@pNombre, @pLibreGluten, @pImporte, @pDescripcion)`);
        rowsAffected = result.rowsAffected;
    } catch (error) {
        console.log(error);
    }
    return rowsAffected;
}*/
/*
update = async (pizza) => {
    let rowsAffected = 0;
    console.log('Estoy en: PizzaService.update(pizza)');

    try {
        let pool = await sql.connect(config);
        let result = await pool.request()
            .input('pNombre'     , sql.NChar , pizza?.nombre ?? '')
            .input('pLibreGluten', sql.Bit   , pizza?.libreGluten ?? false)
            .input('pImporte'    , sql.Float , pizza?.importe ?? 0)
            .input('pDescripcion', sql.NChar , pizza?.descripcion ?? '')
            .input('pId'         , sql.Int   , pizza?.id ?? 0)
            .query(`UPDATE Pizzas SET Nombre = @pNombre, LibreGluten=@pLibreGluten, Importe=@pImporte, Descripcion=@pDescripcion WHERE Id=@pId`);
        rowsAffected = result.rowsAffected;
    } catch (error) {
        console.log(error);
    }
    return rowsAffected;
}

deleteById = async (id) => {
    let rowsAffected = 0;
    console.log('Estoy en: PizzaService.deleteById(id)');
    try {
        let pool   = await sql.connect(config);
        let result = await pool.request()
            .input('pId', sql.Int, id)
            .query('DELETE FROM Pizzas WHERE id = @pId');
        rowsAffected = result.rowsAffected;
    } catch (error) {
        console.log(error);
    }
    return rowsAffected;
}
*/

}