const Service = require("../services/service.js");
const service = new Service();
class Controller {
    static async findMany(req, res) {
        try {
            const films = await service.findMany();
            res.json(films);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
    static async findByID(req, res) {
        try {
            const movie = await service.findByID(req.params.id);
            res.status(200).json((movie));
        } catch (error) {
            res.status(404).json({ message: error.message });
        }
    }
    static async create(req, res) {
        try {
            const {title, genre, description, director} = req.body;
            if (!title || !genre || !description || !director ) {
                return res.status(400).json({ message: "Not all required data was provided!" });
            }
            const movie = await service.create(req.body);
            res.status(201).json(movie);
        }catch (error) {
            res.status(error.message.includes("already exist") ? 404 : 500).json({message: error.message});
        }
    }
    static async update(req, res) {
        try{
            const updatedMovie = await service.update(req.params.id, req.body);
            res.status(200).json({ message: "Movie updated successfully", movie: updatedMovie });
        }catch (error) {
            res.status(error.message.includes("exist!") ? 404 : 500).json({message: error.message});
        }
    }

    static async delete(req, res) {
       try{
           const deletedMovie = await service.delete(req.params.id);
           res.status(200).json({ message: "Movie was deleted successfully", movie: deletedMovie});
       }catch(error){
           res.status(error.message.includes("exist!") ? 404 : 500).json({message: error.message});
       }
    }
};
module.exports = Controller;