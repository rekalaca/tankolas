
/**
 * Itt történik meg az űrlap kiolvasása, az adatok feldolgozása
 * Ha nem adatokRendbenes akkor kilépünk, ,különben next()
 */

 module.exports = (objRep) =>{
    return (req, res, next) =>{
        res.locals.adatokRendben = false;
        res.locals.cars = null;
        res.locals.date = null;
        res.locals.litre = 0;
        res.locals.km = 0;
        console.log( req.body );

        if( req.body.litre > 0 && req.body.km > 0){
            res.locals.adatokRendben = true;
        }

        if(req.body.litre > 0 && req.body.km > 0){
            res.locals.cars = req.body.car;
            res.locals.date = req.body.date;
            res.locals.litre = req.body.litre;
            res.locals.km = req.body.km;
        }
        return next();

    }
}