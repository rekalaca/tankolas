module.exporst = function (objRep){
    const {fuelModel} = ObjRep;

    return (req,res,next) =>{
        console.table("Lista:"+res.locals.tankolasok)
        res.locals.tankolasok = fuelModel.find({});
        console.table(req.locals.tankolasok);
        res.locals.url = req.url;
        return next();
    }
   
}