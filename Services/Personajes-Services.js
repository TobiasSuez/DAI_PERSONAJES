import config from '../dbconfig-env.js';
import sql from 'mssql';
class PersonajesServices {

    getAll = async () => {
        let returnArray = null;
        console.log('Estoy en: Personaje.Servise.getAll()');
        try {
            let pool = await sql.connect(config);
            let result = await pool.request().query("SELECT * from Personajes");
            returnArray = result.recordsets[0];
        }
        catch (error) {
            console.log(error);
        }
        return returnArray;
    }

    getById = async (id) => {
        let returnEntity = null;
        console.log('Estoy en: PersonajesService.getById(id)');
        try {
            let pool = await sql.connect(config);
            let result = await pool.request()
                .input('pId', sql.Int, id)
                .query('SELECT * FROM Personajes WHERE idPersonaje = @pId');
            returnEntity = result.recordsets[0][0];
        } catch (error) {
            console.log(error);
        }
        return returnEntity;
    }

    insert = async (Personaje) => {
        let rowsAffected = 0;
        console.log('Estoy en: Personajes-Service.insert(Personaje)');

        try {
            let pool = await sql.connect(config);
            let result = await pool.request()
                .input('pNombre', sql.NChar, Personaje.Nombre)
                .input('pImagen', sql.NChar, Personaje.Imagen ?? '')
                .input('pEdad', sql.Float, Personaje.Edad ?? 0)
                .input('pHistoria', sql.NVarChar, Personaje.Historia ?? '')
                .input('pPeso', sql.Float, Personaje.Peso ?? 0)
                .input('pPeliculasSeriesAsociadas', sql.NChar, Personaje.PeliculasSeriesAsociadas ?? '')
                .query(`INSERT INTO Personajes (Imagen, Nombre, Edad, Peso,Historia,PeliculasSeriesAsociadas) VALUES (@pImagen,@pNombre, @pEdad,@pPeso, @pHistoria ,@pPeliculasSeriesAsociadas)`);
            rowsAffected = result.rowsAffected;
        } catch (error) {
            console.log(error);
        }
        return rowsAffected;
    }

    update = async (Personaje) => {
        let rowsAffected = 0;
        console.log('Estoy en: PizzaService.update(pizza)');

        try {
            let pool = await sql.connect(config);
            let result = await pool.request()
                .input('pId', sql.Int, Personaje.IdPersonaje ?? 1)
                .input('pNombre', sql.NChar, Personaje.Nombre)
                .input('pImagen', sql.NChar, Personaje.Imagen ?? '')
                .input('pEdad', sql.Float, Personaje.Edad ?? 0)
                .input('pHistoria', sql.NVarChar, Personaje.Historia ?? '')
                .input('pPeso', sql.Float, Personaje.Peso ?? 0)
                .input('pPeliculasSeriesAsociadas', sql.NChar, Personaje.PeliculasSeriesAsociadas ?? '')
                .query(`UPDATE Personajes SET Imagen= @pImagen, Nombre = @pNombre, Edad=@pEdad, Peso=@pPeso, Historia=@pHistoria,PeliculasSeriesAsociadas=@pPeliculasSeriesAsociadas WHERE idPersonaje=@pId`);
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
                .query('DELETE FROM Personajes WHERE idPersonaje = @pId');
            rowsAffected = result.rowsAffected;
        } catch (error) {
            console.log(error);
        }
        return rowsAffected;
    }
    getDetalles = async (id) => {
        let returnArray = null;
        console.log('Estoy en: Personaje.Servise.getDetalles()');
        try {
            let pool = await sql.connect(config);
            let result = await pool.request()
            .input('pId', sql.Int, id)
            .query("SELECT * FROM Relacion R JOIN Pelicula PE ON R.iDPelicula=PE.idPelicula JOIN Personajes P ON R.iDPersonajes=P.iDPersonaje WHERE R.IDPersonajes=@pId");
            returnArray = result.recordsets[0];
        }
        catch (error) {
            console.log(error);
        }
        return returnArray;
    }
    getByPeso = async (Peso) => {
        let returnEntity = null;
        console.log('Estoy en: PersonajesService.getByPeso(id)');
        try {
            let pool = await sql.connect(config);
            let result = await pool.request()
                .input('pPeso', sql.Int, Peso)
                .query('SELECT * FROM Personajes WHERE Peso = @pPeso');
            returnEntity = result.recordsets[0][0];
        } catch (error) {
            console.log(error);
        }
        return returnEntity;
    }
    getByNombre = async (Nombre) => {
        let returnEntity = null;
        console.log('Estoy en: PersonajesService.getByPeso(id)');
        try {
            let pool = await sql.connect(config);
            let result = await pool.request()
                .input('pNombre', sql.VarChar, Nombre)
                .query('SELECT * FROM Personajes WHERE Nombre = @pNombre');
            returnEntity = result.recordsets[0][0];
        } catch (error) {
            console.log(error);
        }
        return returnEntity;
    }

}

export default PersonajesServices;