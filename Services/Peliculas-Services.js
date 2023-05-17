import config from '../dbconfig-env.js';
import sql from 'mssql';
class PeliculaServices {
    getAll = async () => {
        let returnArray = null;
        console.log('Estoy en: Personaje.Servise.getAll()');
        try {
            let pool = await sql.connect(config);
            let result = await pool.request().query("SELECT idPelicula,Imagen,Titulo,Fecha_de_creacion from Pelicula");
            returnArray = result.recordsets[0];
        }
        catch (error) {
            console.log(error);
        }
        return returnArray;
    }
    getById = async (id) => {
        let returnEntity = null;
        console.log('Estoy en: PeliculaService.getById(id)');
        try {
            let pool = await sql.connect(config);
            let result = await pool.request()
                .input('pId', sql.Int, id)
                .query('SELECT * FROM Pelicula WHERE idPelicula = @pId');
            returnEntity = result.recordsets[0][0];
        } catch (error) {
            console.log(error);
        }
        return returnEntity;
    }
    getDetalles = async (id) => {
        let returnArray = null;
        console.log('Estoy en: Pelicula.Servise.getDetalles()');
        try {
            let pool = await sql.connect(config);
            let result = await pool.request()
            .input('pId', sql.Int, id)
            .query("SELECT * FROM Relacion R JOIN Pelicula PE ON R.iDPelicula=PE.idPelicula JOIN Personajes P ON R.iDPersonajes=P.iDPersonaje WHERE R.idPelicula=@pId");
            returnArray = result.recordsets[0];
        }
        catch (error) {
            console.log(error);
        }
        return returnArray;
    }

    insert = async (Pelicula) => {
        let rowsAffected = 0;
        console.log('Estoy en: Pelicula-Service.insert(Personaje)');

        try {
            let pool = await sql.connect(config);
            let result = await pool.request()
                .input('pTitulo', sql.NChar, Pelicula.Titulo ?? '')
                .input('pImagen', sql.NChar, Pelicula.Imagen ?? '')
                .input('pFechaCreacion', sql.DateTime, Pelicula.Fecha_de_creacion ?? 0)
                .input('pCalificacion', sql.Int, Pelicula.Calificacion ?? 1)
                .input('pPersonajeA', sql.Int, Pelicula.Personajes_asociados ?? 0)
                .query(`INSERT INTO Pelicula (Imagen, Titulo, Fecha_de_Creacion, Calificacion,Personajes_asociados) VALUES (@pImagen,@pTitulo, @pFechaCreacion,@pCalificacion, @pPersonajeA)`);
            rowsAffected = result.rowsAffected;
        } catch (error) {
            console.log(error);
        }
        return rowsAffected;
    }

    update = async (Pelicula) => {
        let rowsAffected = 0;
        console.log('Estoy en: PizzaService.update(pizza)');

        try {
            let pool = await sql.connect(config);
            let result = await pool.request()
            .input('pId',sql.Int,Pelicula.id ?? 1)
            .input('pTitulo', sql.NChar, Pelicula.Titulo ?? '')
            .input('pImagen', sql.NChar, Pelicula.Imagen ?? '')
            .input('pFechaCreacion', sql.DateTime, Pelicula.Fecha_de_creacion ?? 0)
            .input('pCalificacion', sql.Int, Pelicula.Calificacion ?? 1)
            .input('pPersonajeA', sql.Int, Pelicula.Personajes_asociados ?? 0)
            .query(`UPDATE Pelicula SET Imagen= @pImagen, Titulo = @pTitulo, Fecha_de_creacion=@pFechaCreacion, Calificacion=@pCalificacion, Personajes_asociados=@pPersonajeA WHERE idPelicula=@pId`);
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
                .query('DELETE FROM Pelicula WHERE idPelicula = @pId');
            rowsAffected = result.rowsAffected;
        } catch (error) {
            console.log(error);
        }
        return rowsAffected;
    }
    getByNombre = async (Titulo) => {
        let returnEntity = null;
        console.log('Estoy en: PersonajesService.getByNombre(id)');
        try {
            let pool = await sql.connect(config);
            let result = await pool.request()
                .input('pTitulo', sql.VarChar, Titulo)
                .query('SELECT * FROM Pelicula WHERE Titulo = @pTitulo ');
            returnEntity = result.recordsets[0][0];
        } catch (error) {
            console.log(error);
        }
        return returnEntity;
    }

    getAllASCDESC = async (ASC) => {
        let returnArray = null;
        console.log('Estoy en: PersonajesService.Orden(id)');
        try {
            if(ASC=="ASC"){

                let pool = await sql.connect(config);
                let result = await pool.request()
                    .input('pASC', sql.VarChar, ASC ?? "ASC")
                    .query('SELECT * FROM Pelicula ORDER BY Titulo ASC');
                    returnArray = result.recordsets[0];
            }
            else{
                let pool = await sql.connect(config);
                let result = await pool.request()
                    .input('pASC', sql.VarChar, ASC ?? "ASC")
                    .query('SELECT * FROM Pelicula ORDER BY Titulo DESC');
                    returnArray = result.recordsets[0];
            }
        } catch (error) {
            console.log(error);
        }
        return returnArray;
    }

}
export default PeliculaServices;