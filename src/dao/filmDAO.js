const Movie = require("../models/Movie");
class FilmDAO {
    static async findAll() {
       return await Movie.find();
    }
    static async findOne(id) {
        return await Movie.findById(id);
    }
    static async findOneByTitle(title) {
        return await Movie.findOne({title});
    }
    static async create(data) {
        return await Movie.create(data);
    }
    static async update(id, data) {
        return await Movie.findByIdAndUpdate(id, data, {new: true});
    }
    static async delete(data) {
        return await Movie.findByIdAndDelete(data);
    }


}
module.exports = FilmDAO;