const FilmDAO = require("../dao/filmDAO.js");

class Service{
    async findMany() {
        return await FilmDAO.findAll();

    }
    async findByID(id) {
        const movie = await FilmDAO.findOne(id);
            if (!movie) {
                throw new Error(`No film found with ${id} ID`);
            }
            return movie;
    }
    async create(data) {
       const existMovie = await FilmDAO.findOneByTitle(data.title);
       if(existMovie){
           throw new Error(`Movie with '${data.title}' title already exist`);
       }
       return await FilmDAO.create(data);
    }
    async update(id, data) {
        const existId = await FilmDAO.findOne(id);
        if (!existId) {
            throw new Error(`Movie with ${id} ID doesn't exist!`);
        }
        if (data.title){
            const existTitleMovie = await FilmDAO.findOneByTitle(data.title);
            if(existTitleMovie && existTitleMovie._id.toString() !== id){
                throw new Error(`Movie with '${data.title}' title already exist!`);
            }
        }

        return await FilmDAO.update(id, data);
    }
    async delete(id) {
        const existId = await FilmDAO.findOne(id);
        if (!existId) {
            throw new Error(`Movie with ${id} ID doesn't exist!`);
        }
        return await FilmDAO.delete(id);
    }
}
module.exports = Service;