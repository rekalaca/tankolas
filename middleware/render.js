/**
 A views mappa index.ejs állományának renderelése, kilküldése a kliensre.
 */

 module.exports = (objRep) =>{
    return (req, res, next) =>{
        return res.render("index", { tankolasos : res.locals.adatokRendben});
    }
    
}