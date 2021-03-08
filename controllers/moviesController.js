const db = require('../database/models')

module.exports = {
    add : (req,res) => {

    },
    list : (req,res) => {
        db.Movie.findAll({
            include : 
            {
                association : "genre"
            }
        })
        .then(peliculas => {
            res.render('list',{
                peliculas
            })
        })
    }
}