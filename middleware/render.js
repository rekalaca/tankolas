/**
 A views mappa index.ejs állományának renderelése, kilküldése a kliensre.
 */

 module.exports = (objRep,view) =>{
    return (req, res, next) =>{
        return res.render(view, res.locals);
    }
    
}